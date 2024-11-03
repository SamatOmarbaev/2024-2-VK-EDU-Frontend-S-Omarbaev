import { memo } from "react";
import { ChatListElement } from "../ChatListElement/ChatListElement";
import { getLastMessage } from "../../api/chats";
import { usePeople } from "../../hooks/usePeople";

export const ChatList = memo(() => {
  const people = usePeople();

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
        <ChatListElement key={chat.person.id} chat={chat} />
      ))}
    </ul>
  );
});
