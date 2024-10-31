import ChatList from "../../components/ChatList/ChatList";
import styles from "./Chats.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Chats = () => {
  return (
    <>
      <header className={styles.Header}>
        <MenuIcon />
        <h2>Список чатов</h2>
        <SearchIcon />
      </header>
      <ChatList />
      <button className={styles.CreateChatButton}>
        <EditIcon />
      </button>
    </>
  );
};

export default Chats;
