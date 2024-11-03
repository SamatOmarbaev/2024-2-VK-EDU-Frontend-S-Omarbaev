import { memo } from "react";

import { Button } from "../Button/Button";

import SendIcon from "@mui/icons-material/Send";

import styles from "./FormFooter.module.scss";

export const FormFooter = memo(
  ({ messageText, sendMessage, setMessageText }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      sendMessage();
    };

    return (
      <footer className={styles.Footer}>
        <form className={styles.MessageForm} onSubmit={handleSubmit}>
          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Сообщение"
            className={styles.MessageInput}
          />
          <Button onButtonClick={sendMessage}>
            <SendIcon />
          </Button>
        </form>
      </footer>
    );
  }
);
