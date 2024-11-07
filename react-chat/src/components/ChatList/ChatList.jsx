import { getAuthHeaders } from "../../apiService/auth/auth";
import { getChats } from "../../apiService/chats/chats";
import { ChatListElement } from "../ChatListElement/ChatListElement";
import { useEffect, useState } from "react";

export const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const chatBox = await getChats(getAuthHeaders());
        setChats(chatBox.results || []);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    loadChats();
  }, []);

  return (
    <ul>
      {chats.map((chat) => (
        <ChatListElement key={chat.person.id} chat={chat} />
      ))}
    </ul>
  );
};
