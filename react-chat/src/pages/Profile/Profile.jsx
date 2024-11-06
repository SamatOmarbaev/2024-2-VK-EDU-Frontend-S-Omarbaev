import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { usePeople } from "../../hooks/usePeople";
import { ROUTES } from "../../constants/constants";
import ArrowBack from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import avatar from "../../assets/avatar.svg";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const people = usePeople();
  const person = people.find((p) => p.id === chatId);
  const [valueName, setValueName] = useState(person?.name);
  const [valueBio, setValueBio] = useState("");

  const goBack = () => {
    navigate(ROUTES.CHATS);
  };

  const handleChangeName = (e) => setValueName(e.target.value);

  const handleChangeBio = (e) => setValueBio(e.target.value);

  return (
    <>
      <Header>
        <Button shadow onButtonClick={goBack}>
          <ArrowBack />
        </Button>
        <h2>Edit Profile</h2>
        <Button>
          <CheckIcon />
        </Button>
      </Header>
      <div className={styles.ProfileContent}>
        <img
          src={avatar}
          alt={`${person?.name}'s photo`}
          className={styles.ProfileImgContainer}
        />
        <div className={styles.InputContainer}>
          <label className={valueName ? styles.LabelActive : styles.Label}>
            Full name
          </label>
          <input
            type="text"
            value={valueName}
            onChange={handleChangeName}
            className={styles.InputName}
            required
          />
        </div>
        <div className={styles.InputContainer}>
          <label className={valueBio ? styles.LabelActive : styles.Label}>
            Bio
          </label>
          <textarea
            type="text"
            value={valueBio}
            onChange={handleChangeBio}
            className={styles.InputName}
            required
          />
        </div>
      </div>
    </>
  );
};
