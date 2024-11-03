import { memo, useEffect, useState } from "react";

import { ChatListElement } from "../ChatListElement/ChatListElement";
import { loadPeople } from "../../api/people";
import { getLastMessage } from "../../api/chats";

export const ChatList = memo(({ onChatSelect }) => {
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
          key={chat.person.id}
          chat={chat}
          onChatSelect={() => onChatSelect(chat.person.id)}
        />
      ))}
    </ul>
  );
});
