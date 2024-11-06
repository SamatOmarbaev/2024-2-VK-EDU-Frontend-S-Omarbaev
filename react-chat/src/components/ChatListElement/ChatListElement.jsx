import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import styles from "./ChatListElement.module.scss";

export const ChatListElement = memo(({ chat }) => {
  return (
    <Link to={`${ROUTES.CHAT_DETAILS}/${chat.person.id}`}>
      <li className={styles.ChatItem}>
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
    </Link>
  );
});
