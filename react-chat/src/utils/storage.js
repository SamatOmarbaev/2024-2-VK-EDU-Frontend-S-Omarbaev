import { initialPeople } from "./people";

const LOCAL_STORAGE_KEY = 'chatAppData';

export const loadPeople = () => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    if (!data.people) {
        data.people = initialPeople;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
    return data.people;
};

export const getChatData = () => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    return data.chats || {};
};

export const getLastMessage = (chatId) => {
    const chats = getChatData();
    const chat = chats[chatId];
    if (chat && chat.messages.length > 0) {
        return chat.messages[chat.messages.length - 1];
    }
    return null;
};

export const markReceivedMessagesAsRead = (chatId) => {
    const chats = getChatData();
    const chat = chats[chatId];
    if (chat) {
        chat.messages.forEach(message => {
            if (message.direction === 'received' && message.readStatus === 'unread') {
                message.readStatus = 'read';
            }
        });
        saveChatData(chats);
    }
};

export const createMessageObject = (text, direction) => {
    const timeStamp = new Date();

    return {
        id: Date.now().toString(),
        text,
        timestamp: timeStamp.getTime(),
        direction,
        readStatus: 'unread'
    };
};

export const saveMessage = (chatId, message) => {
    const chats = getChatData();

    if (!chats[chatId]) {
        chats[chatId] = { messages: [], participants: [] };
    }

    chats[chatId].messages.push(message);
    saveChatData(chats);
};

const saveChatData = (chats) => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    data.chats = chats;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
