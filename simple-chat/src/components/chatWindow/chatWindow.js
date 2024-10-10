import './chatWindow.css'
import { createMessageObject, saveMessage, markReceivedMessagesAsRead, loadPeople } from '../../utils/storage.js';

export function initializeChatWindow() {
    const urlParams = new URLSearchParams(window.location.search);
    const chatId = urlParams.get('id');

    const form = document.querySelector('.message-form');
    const input = document.getElementById('message-input');
    const messagesList = document.querySelector('.messages-list');

    fillHeader(chatId);

    document.addEventListener('DOMContentLoaded', () => loadMessages(chatId, messagesList));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageText = input.value.trim();

        if (messageText) {
            const message = createMessageObject(messageText, 'sent');
            saveMessage(chatId, message);
            addMessageToUI(message, messagesList);
            input.value = '';
        }
    });

    setTimeout(() => {
        simulateReceivedMessage(chatId, 'Привет) как дела?', messagesList);
    }, 5000);
}

function fillHeader(chatId) {
    const header = document.querySelector('.header');
    const people = loadPeople();
    const person = people.find(p => p.id === chatId);

    if (person) {
        header.innerHTML = `
            <button id="back-btn" class="material-symbols-outlined">arrow_back_ios</button>
            <div class="header-avatar">
                <div class="header-avatar_photo">
                    <img src="../../assets/avatar.svg" alt="avatar photo" />
                </div>
                <span class="header-avatar_title">${person.name}</span>
            </div>
            <div class="header-search_more">
                <span class="material-symbols-outlined">search</span>
                <span class="material-symbols-outlined">more_vert</span>
            </div>
        `;

        const backButton = document.getElementById('back-btn');
        backButton.onclick = () => window.history.back()
    } else {
        console.error('Пользователь не найден:', chatId);
    }
}

function getMessageId(chatId, id) {
    return `${chatId}.message_${id}`;
}

function loadMessages(chatId, messagesList) {
    let lastMessageId = 0;
    if (localStorage.getItem(`${chatId}.lastMessageId`) !== null) {
        lastMessageId = parseInt(localStorage.getItem(`${chatId}.lastMessageId`));
    }
    for (let i = 1; i <= lastMessageId; i++) {
        const messageKey = getMessageId(chatId, i);
        const messageData = localStorage.getItem(messageKey);
        if (messageData) {
            const message = JSON.parse(messageData);
            addMessageToUI(message, messagesList);
        }
    }

    markReceivedMessagesAsRead(chatId);
}

function addMessageToUI(message, messagesList) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('message-item', message.direction);

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    timeSpan.textContent = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let statusIcon = null;
    if (message.direction === 'sent') {
        statusIcon = document.createElement('span');
        statusIcon.classList.add('material-symbols-outlined');
        if (message.readStatus === 'unread') {
            statusIcon.textContent = 'check';
        } else if (message.readStatus === 'read') {
            statusIcon.textContent = 'done_all';
        }
    }

    messageItem.textContent = message.text;
    if (statusIcon) messageItem.appendChild(statusIcon);
    messageItem.appendChild(timeSpan);

    messagesList.appendChild(messageItem);
}

function simulateReceivedMessage(chatId, text, messagesList) {
    const message = createMessageObject(text, 'received');
    saveMessage(chatId, message);
    addMessageToUI(message, messagesList);
}
