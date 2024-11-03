import { memo } from "react";
import cn from "classnames";
import styles from "./ChatMessageElement.module.scss";

export const ChatMessageElement = memo(({ msg, markAsRead }) => {
  const handleMessageClick = () => {
    return msg.direction === "received" && !msg.read && markAsRead(msg.id);
  };

  const DateTime = new Date().toLocaleTimeString(msg.timestamp);

  const isCheckmark = msg.direction === "sent" && msg.read;

  const messageStyles = cn(styles.messageItem, {
    [styles.received]: msg.read,
    [styles.sent]: !msg.read,
  });

  return (
    <li className={messageStyles} onClick={handleMessageClick}>
      <span>{msg.text}</span>
      {isCheckmark && <span className={styles.checkmark}>✔️</span>}
      <span className={styles.time}>{DateTime}</span>
    </li>
  );
});
