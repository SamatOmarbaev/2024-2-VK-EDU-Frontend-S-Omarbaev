import styles from "./Chat.module.scss";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVertOutlined";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import { loadPeople } from "../../utils/storage";

export const Chat = ({ chatId, onBack }) => {
  const person = loadPeople().find((p) => p.id === chatId);

  return (
    <>
      <header className={styles.Header}>
        <button onClick={onBack}>
          <ArrowBack />
        </button>
        <div className={styles.HeaderAvatar}>
          <div className={styles.HeaderAvatarPhoto}>
            <img src="../../assets/avatar.svg" alt="avatar photo" />
          </div>
          <span className={styles.HeaderAvatarTitle}>{person.name}</span>
        </div>
        <div className={styles.HeaderSearchMore}>
          <SearchIcon />
          <MoreIcon />
        </div>
      </header>
      <main className={styles.chatContainer}>
        <ChatWindow chatId={chatId} onBack={onBack} />
      </main>
    </>
  );
};
