import { loadPeople, getLastMessage } from "../../utils/storage";
import styles from "./ChatList.module.scss";

const ChatList = ({ onChatSelect }) => {
  const people = loadPeople();

  const chatsWithLastMessage = people.map((person) => {
    const lastMessage = getLastMessage(person.id);
    return {
      person,
      lastMessage,
    };
  });

  return (
    <ul className={styles.ChatList}>
      {chatsWithLastMessage.map((chat) => (
        <li
          key={chat.person.id}
          className={styles.ChatItem}
          onClick={() => onChatSelect(chat.person.id)}
        >
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
      ))}
    </ul>
  );
};

export default ChatList;
