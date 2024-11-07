import axios from 'axios';

const API_URL = 'https://vkedu-fullstack-div2.ru/api/';
// const API_URL = import.meta.env.VITE_API_URL;

export const getChats = async (headers) => {
  try {
    const response = await axios.get(`${API_URL}chats`, { headers });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
};

export const saveChat = async (chatData, authHeaders) => {
  try {
    const response = await axios.post(`${API_URL}chats/`, chatData, {
      headers: authHeaders,
    });
    return response.data;
  } catch (error) {
    console.error("Error saving chat:", error);
    return null;
  }
};

export const getChatById = async (chatId, headers) => {
  try {
    const response = await axios.get(`${API_URL}chats/${chatId}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching chat with ID ${chatId}:`, error);
    return null;
  }
};

