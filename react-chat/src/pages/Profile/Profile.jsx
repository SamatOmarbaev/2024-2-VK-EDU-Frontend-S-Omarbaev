import { useNavigate, useParams } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { loadPeople } from "../../utils/storage";
import styles from "./Profile.module.scss";
import { useState } from "react";

export const Profile = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const person = loadPeople().find((p) => p.id === chatId);
  const [valueName, setValueName] = useState(person?.name);
  const [valueBio, setValueBio] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className={styles.Header}>
        <button onClick={goBack}>
          <ArrowBack />
        </button>
        <h2>Edit Profile</h2>
        <div className={styles.HeaderSearchMore}>
          <CheckIcon />
        </div>
      </header>
      <div className={styles.ProfileContent}>
        <div className={styles.ProfileImgContainer}>
          <img src={person.photo} alt={`${person?.name}'s photo`} />
        </div>
        <div className={styles.InputContainer}>
          <label className={valueName ? styles.LabelActive : styles.Label}>
            Full name
          </label>
          <input
            type="text"
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
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
            onChange={(e) => setValueBio(e.target.value)}
            className={styles.InputName}
            required
          />
        </div>
      </div>
    </>
  );
};
