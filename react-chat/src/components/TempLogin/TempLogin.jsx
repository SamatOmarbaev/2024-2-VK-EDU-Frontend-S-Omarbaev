import { useState } from "react";
import styles from "./TempLogin.module.scss";
import { Button } from "../Button/Button";

export const TempLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.TempLoginForm}>
      <h2>Войти</h2>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.InputName}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.InputName}
      />
      <Button type="submit" onButtonClick={handleSubmit}>
        Войти
      </Button>
    </form>
  );
};
