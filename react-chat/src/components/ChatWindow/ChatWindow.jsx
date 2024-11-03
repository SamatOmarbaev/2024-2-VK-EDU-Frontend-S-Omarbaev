import { memo, useEffect, useState } from "react";
import { FormFooter } from "../FormFooter/FormFooter";
import { ChatMessageElement } from "../ChatMessageElement/ChatMessageElement";
import { createMessageObject, getChatData, saveMessage } from "../../api/chats";
import styles from "./ChatWindow.module.scss";

const addNewMessage = ({ text, status, id, setMessages }) => {
  const message = createMessageObject(text, status);
  saveMessage(id, message);
  setMessages((prevMessages) => [...prevMessages, message]);
};

export const ChatWindow = memo(({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const chatData = getChatData();
    const chat = chatData[chatId];

    if (chat && chat.messages) {
      setMessages(chat.messages);
    }

    const simulateReceivedMessageSent = setTimeout(() => {
      const text = "Привет) как дела?";
      addNewMessage({
        text,
        status: "received",
        id: chatId,
        setMessages,
      });
    }, 5000);

    return () => clearTimeout(simulateReceivedMessageSent);
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
});
