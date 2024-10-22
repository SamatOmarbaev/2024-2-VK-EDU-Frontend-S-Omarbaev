import { useEffect, useState } from "react";
import {
  getChatData,
  saveMessage,
  createMessageObject,
} from "../../utils/storage";
import styles from "./ChatWindow.module.scss";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const chat = getChatData()[chatId];
    if (chat && chat.messages) {
      setMessages(chat.messages);
    }
  }, [chatId]);

  const sendMessage = () => {
    const message = createMessageObject(messageText, "sent");
    saveMessage(chatId, message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessageText("");
  };

  return (
    <div className={styles.chatWindow}>
      <ul className={styles.messagesList}>
        {messages.map((msg) => (
          <li key={msg.id} className={msg.direction}>
            {msg.text}
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>
        <input
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </footer>
    </div>
  );
};

export default ChatWindow;
