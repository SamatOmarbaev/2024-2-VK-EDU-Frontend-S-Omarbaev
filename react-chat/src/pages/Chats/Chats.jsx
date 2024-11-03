import { memo } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

export const Chats = memo(() => {
  return (
    <>
      <Header>
        <Link to={ROUTES.PROFILE}>
          <Button shadow>
            <MenuIcon />
          </Button>
        </Link>
        <h2>Список чатов</h2>
        <Button>
          <SearchIcon />
        </Button>
      </Header>
      <ChatList />
      <Button animation>
        <EditIcon />
      </Button>
    </>
  );
});
