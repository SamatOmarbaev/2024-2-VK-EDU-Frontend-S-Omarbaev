import './chatWindow.css'
import { createMessageObject, saveMessage, markReceivedMessagesAsRead, loadPeople, getChatData } from '../../utils/storage.js';

export const initializeChatWindow = () => {
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

        if (!messageText) return;

        const message = createMessageObject(messageText, 'sent');
        saveMessage(chatId, message);
        addMessageToUI(message, messagesList);
        input.value = '';
    });

    let simulatedReceivedMessageSent = false;

    setTimeout(() => {
        if (!simulatedReceivedMessageSent) {
            simulateReceivedMessage(chatId, 'Привет) как дела?', messagesList);
            simulatedReceivedMessageSent = true;
        }
    }, 5000);
}

const fillHeader = (chatId) => {
    const header = document.querySelector('.header');
    const people = loadPeople();
    const person = people.find(p => p.id === chatId);

    if (!person) {
        console.error('Пользователь не найден:', chatId);
        return;
    }
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
}

const loadMessages = (chatId, messagesList) => {
    const chats = getChatData();
    const chat = chats[chatId];

    if (chat && chat.messages) {
        chat.messages.forEach(message => {
            addMessageToUI(message, messagesList);
        });
    }

    markReceivedMessagesAsRead(chatId);
}

const addMessageToUI = (message, messagesList) => {
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

const simulateReceivedMessage = (chatId, text, messagesList) => {
    const message = createMessageObject(text, 'received');
    saveMessage(chatId, message);
    addMessageToUI(message, messagesList);
}
