import { useEffect, useState } from "react";
import {
  getChatData,
  saveMessage,
  createMessageObject,
} from "../../utils/storage";
import SendIcon from "@mui/icons-material/Send";
import styles from "./ChatWindow.module.scss";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const chat = getChatData()[chatId];

    if (chat && chat.messages) {
      setMessages(chat.messages);
    }

    const simulateReceivedMessageSent = setTimeout(() => {
      const text = "Привет) как дела?";
      const message = createMessageObject(text, "received");
      saveMessage(chatId, message);
      setMessages((prevMessages) => [...prevMessages, message]);
    }, 5000);

    return () => clearTimeout(simulateReceivedMessageSent);
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (messageText.trim() === "") return;

    const message = createMessageObject(messageText, "sent");
    saveMessage(chatId, message);
    setMessages((prevMessages) => [...prevMessages, message]);
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
      <div className={styles.messagesContainer}>
        <ul className={styles.messagesList}>
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`${styles.messageItem} ${
                msg.read ? styles.received : styles.sent
              }`}
              onClick={() =>
                msg.direction === "received" && !msg.read && markAsRead(msg.id)
              }
            >
              <span>{msg.text}</span>
              {msg.direction === "sent" && msg.read && (
                <span className={styles.checkmark}>✔️</span>
              )}
              <span className={styles.time}>
                {new Date().toLocaleTimeString(msg.timestamp)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <form className={styles.messageForm}>
          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Сообщение"
            className={styles.messageInput}
          />
          <button onClick={sendMessage}>
            <SendIcon />
          </button>
        </form>
      </footer>
    </>
  );
};

export default ChatWindow;
