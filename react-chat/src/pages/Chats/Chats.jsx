import { memo } from "react";

import { ChatList } from "../../components/ChatList/ChatList";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";

import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export const Chats = memo(({ onChatSelect }) => {
  return (
    <>
      <Header>
        <Button shadow>
          <MenuIcon />
        </Button>
        <h2>Список чатов</h2>
        <Button>
          <SearchIcon />
        </Button>
      </Header>
      <ChatList onChatSelect={onChatSelect} />
      <Button animation>
        <EditIcon />
      </Button>
    </>
  );
});
