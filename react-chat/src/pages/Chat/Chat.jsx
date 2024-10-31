import styles from "./Chat.module.scss";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVertOutlined";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import { loadPeople } from "../../utils/storage";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Chat = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const person = loadPeople().find((p) => p.id === chatId);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className={styles.Header}>
        <button onClick={goBack}>
          <ArrowBack />
        </button>
        <Link to={"profile"} className={styles.HeaderAvatar}>
          <div className={styles.HeaderAvatarPhoto}>
            <img src={person?.photo} alt="avatar photo" />
          </div>
          <span className={styles.HeaderAvatarTitle}>{person?.name}</span>
        </Link>
        <div className={styles.HeaderSearchMore}>
          <SearchIcon />
          <MoreIcon />
        </div>
      </header>
      <main className={styles.chatContainer}>
        <ChatWindow chatId={chatId} />
      </main>
    </>
  );
};
