import { useState } from "react";
import styles from "./TempRegister.module.scss";
import { Button } from "../Button/Button";

export const TempRegister = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      bio,
      avatar,
    };
    console.log("Отправляемые данные:", formData);

    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.TempRegisterForm}>
      <h2>Регистрация</h2>
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
      <input
        type="text"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={styles.InputName}
      />
      <input
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className={styles.InputName}
      />
      <textarea
        placeholder="О себе"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className={styles.InputName}
      />
      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      <Button type="submit" onButtonClick={handleSubmit}>Зарегистрироваться</Button>
    </form>
  );
};
