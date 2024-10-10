import './chatList.css'

import { loadPeople, getLastMessage, markReceivedMessagesAsRead } from '../../utils/storage.js';

export function renderChatList() {
    let people = loadPeople();

    const chatList = document.getElementById('chat-list');
    chatList.innerHTML = '';

    const chatsWithLastMessage = people.map(person => {
        const lastMessage = getLastMessage(person.id);
        return {
            person,
            lastMessage,
        };
    });

    chatsWithLastMessage.sort((a, b) => {
        const timeA = a.lastMessage ? a.lastMessage.timestamp : 0;
        const timeB = b.lastMessage ? b.lastMessage.timestamp : 0;
        return timeB - timeA;
    });

    chatsWithLastMessage.forEach(chat => {
        const chatItem = createChatItem(chat);
        chatList.appendChild(chatItem);
    });
}

function createChatItem({ person, lastMessage }) {
    const chatItem = document.createElement('li');
    chatItem.classList.add('chat-item');
    const chatItemStatusAndTime = document.createElement('div');
    chatItemStatusAndTime.classList.add('chat-item-status-time');

    const statusBadge = createStatusBadge(lastMessage);
    const chatItemPhoto = createChatItemPhoto(person);
    const chatItemInfo = createChatItemInfo(person, lastMessage);
    const chatItemStatusDiv = createChatItemBadge(statusBadge);
    const chatItemTime = createChatItemTime(lastMessage)

    chatItemStatusAndTime.appendChild(chatItemTime);
    chatItemStatusAndTime.appendChild(chatItemStatusDiv);

    chatItem.appendChild(chatItemPhoto);
    chatItem.appendChild(chatItemInfo);
    chatItem.appendChild(chatItemStatusAndTime);

    chatItem.addEventListener('click', () => {
        markReceivedMessagesAsRead(person.id);
        window.location.href = `chat.html?id=${person.id}`;
    });

    return chatItem;
}

function createStatusBadge(lastMessage) {
    let statusBadge = null;

    if (lastMessage) {
        if (lastMessage.direction === 'received' && lastMessage.readStatus === 'unread') {
            const unreadCountDiv = document.createElement('div');
            unreadCountDiv.classList.add('unread-msgs-count');
            unreadCountDiv.textContent = '1';
            statusBadge = unreadCountDiv;
        } else if (lastMessage.direction === 'sent') {
            const statusIconSpan = document.createElement('span');
            statusIconSpan.classList.add('material-symbols-outlined');
            if (lastMessage.readStatus === 'unread') {
                statusIconSpan.classList.add('message-status-icon');
                statusIconSpan.textContent = 'check';
            } else if (lastMessage.readStatus === 'read') {
                statusIconSpan.textContent = 'done_all';
            }
            statusBadge = statusIconSpan;
        }

    }
    return statusBadge;
}

function createChatItemPhoto(person) {
    const chatItemPhotoDiv = document.createElement('div');
    chatItemPhotoDiv.classList.add('chat-item-photo');
    const img = document.createElement('img');
    img.src = person.photo;
    img.alt = person.name;
    chatItemPhotoDiv.appendChild(img);

    return chatItemPhotoDiv;
}

function createChatItemInfo(person, lastMessage) {
    const lastMessageText = lastMessage ? lastMessage.text : '';

    const chatItemInfo = document.createElement('div');
    chatItemInfo.classList.add('chat-item-info');

    const chatItemName = document.createElement('span');
    chatItemName.classList.add('chat-item-name');
    chatItemName.textContent = person.name;

    const chatItemLastMessage = document.createElement('div');
    chatItemLastMessage.classList.add('chat-item-last-message');
    chatItemLastMessage.textContent = lastMessageText;

    chatItemInfo.appendChild(chatItemName);
    chatItemInfo.appendChild(chatItemLastMessage);

    return chatItemInfo;
}

function createChatItemBadge(statusBadge) {
    const chatItemBadge = document.createElement('div');
    if (statusBadge) {
        chatItemBadge.appendChild(statusBadge);
    }

    return chatItemBadge;
}

function createChatItemTime(lastMessage) {
    const lastMessageTime = lastMessage
        ? new Date(lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : '';

    const chatItemTime = document.createElement('span');
    chatItemTime.classList.add('chat-item-time');
    chatItemTime.textContent = lastMessageTime;

    return chatItemTime;
}
