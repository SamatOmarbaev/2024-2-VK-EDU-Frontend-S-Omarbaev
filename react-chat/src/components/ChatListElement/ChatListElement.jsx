import { memo } from "react";

import styles from "./ChatListElement.module.scss";

export const ChatListElement = memo(({ onChatSelect, chat }) => {
  return (
    <li className={styles.ChatItem} onClick={onChatSelect}>
      <img
        src={chat.person.photo}
        alt={chat.person.name}
        className={styles.ChatPhoto}
      />
      <div className={styles.ChatInfo}>
        <span className={styles.ChatName}>{chat.person.name}</span>
        <span className={styles.ChatLastMessage}>
          {chat.lastMessage ? chat.lastMessage.text : ""}
        </span>
      </div>
    </li>
  );
});
