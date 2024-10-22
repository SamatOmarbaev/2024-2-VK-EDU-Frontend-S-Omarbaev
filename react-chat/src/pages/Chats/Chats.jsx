import ChatList from "../../components/ChatList/ChatList";
import styles from "./Chats.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Chats = ({ onChatSelect }) => {
  return (
    <div>
      <header className={styles.Header}>
        <MenuIcon />
        <h2>Список чатов</h2>
        <SearchIcon />
      </header>
      <ChatList onChatSelect={onChatSelect} />
      <button className={styles.CreateChatButton}>
        <EditIcon />
      </button>
    </div>
  );
};

export default Chats;
