import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatWindow } from "../../components/ChatWindow/ChatWindow";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { usePeople } from "../../hooks/usePeople";
import avatar from "../../assets/avatar.svg";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVertOutlined";
import styles from "./Chat.module.scss";
import { getChatById } from "../../apiService/chats/chats";
import { getByID } from "../../utils/people";

export const Chat = memo(() => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const [user, setUser] = useState(null);
  const people = usePeople();
  const person = people.find((p) => p.id === chatId);

  useEffect(() => {
    const foundChat = getChatById(chatId);
    if (foundChat) {
      const foundUser = getByID(foundChat.userId);
      setUser(foundUser);
    } else {
      navigate("/");
    }
  }, [chatId, navigate]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <Button shadow onButtonClick={goBack}>
          <ArrowBack />
        </Button>
        <div className={styles.HeaderAvatar}>
          <img
            src={avatar}
            alt="avatar photo"
            className={styles.HeaderAvatarPhoto}
          />
          <span className={styles.HeaderAvatarTitle}>{person?.name}</span>
        </div>
        <div className={styles.HeaderSearchMore}>
          <Button>
            <SearchIcon />
          </Button>
          <Button>
            <MoreIcon />
          </Button>
        </div>
      </Header>
      <main className={styles.ChatContainer}>
        <ChatWindow chatId={chatId} />
      </main>
    </>
  );
});
