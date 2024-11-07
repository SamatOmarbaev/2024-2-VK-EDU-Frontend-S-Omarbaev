import { useEffect, useState } from "react";
import { FormFooter } from "../FormFooter/FormFooter";
import { ChatMessageElement } from "../ChatMessageElement/ChatMessageElement";
import { createMessageObject, saveMessage } from "../../api/chats";
import styles from "./ChatWindow.module.scss";
import { getMessages } from "../../apiService/messages/messages";

const addNewMessage = ({ text, status, id, setMessages }) => {
  const message = createMessageObject(text, status);
  saveMessage(id, message);
  setMessages((prevMessages) => [...prevMessages, message]);
};

export const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const loadedMessages = getMessages(chatId);
    setMessages(loadedMessages);
  }, [chatId]);

  const sendMessage = () => {
    if (messageText.trim() === "") return;

    addNewMessage({
      text: messageText,
      status: "sent",
      id: chatId,
      setMessages,
    });
    setMessageText("");
  };

  const markAsRead = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  return (
    <>
      <div className={styles.MessagesContainer}>
        <ul className={styles.MessagesList}>
          {messages.map((msg) => (
            <ChatMessageElement
              key={msg.id}
              msg={msg}
              markAsRead={markAsRead}
            />
          ))}
        </ul>
      </div>
      <FormFooter
        messageText={messageText}
        setMessageText={setMessageText}
        sendMessage={sendMessage}
      />
    </>
  );
};
