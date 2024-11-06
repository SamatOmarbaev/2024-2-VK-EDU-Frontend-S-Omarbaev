import { Button } from "../Button/Button";
import SendIcon from "@mui/icons-material/Send";
import styles from "./FormFooter.module.scss";

export const FormFooter = ({ messageText, sendMessage, setMessageText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleChange = (e) => setMessageText(e.target.value);

  return (
    <footer className={styles.Footer}>
      <form className={styles.MessageForm} onSubmit={handleSubmit}>
        <input
          value={messageText}
          onChange={handleChange}
          placeholder="Сообщение"
          className={styles.MessageInput}
        />
        <Button onButtonClick={sendMessage}>
          <SendIcon />
        </Button>
      </form>
    </footer>
  );
};
