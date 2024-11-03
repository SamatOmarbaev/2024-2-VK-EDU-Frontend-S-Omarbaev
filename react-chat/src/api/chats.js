import { loadData, saveData } from "../utils/localstorage";

export const getChatData = () => {
    const data = loadData();
    return data.chats || null;
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
        read: direction === 'sent' ? false : true
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
    const data = loadData();
    data.chats = chats;
    saveData(data);
};