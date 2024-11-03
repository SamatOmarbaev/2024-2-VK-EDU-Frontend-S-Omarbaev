import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";

import { ChatListElement } from "../ChatListElement/ChatListElement";
import { loadPeople } from "../../api/people";
import { getLastMessage } from "../../api/chats";

export const ChatList = memo(() => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = loadPeople();

    setPeople(getPeople);
  }, []);

  const chatsWithLastMessage = people.map((person) => {
    const lastMessage = getLastMessage(person.id);
    return {
      person,
      lastMessage,
    };
  });

  return (
    <ul>
      {chatsWithLastMessage.map((chat) => (
        <ChatListElement
        <Link
          to={`/chat/${chat.person.id}`}
          key={chat.person.id}
          className={styles.ChatItem}
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
        </Link>
          chat={chat}
          onChatSelect={() => onChatSelect(chat.person.id)}
        />
      ))}
    </ul>
  );
});
