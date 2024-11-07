import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { ROUTES } from "../../constants/constants";
import ArrowBack from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import avatar from "../../assets/avatar.svg";
import styles from "./Profile.module.scss";
import { getUser } from "../../apiService/users/users";
import EditInput from "../../components/EditInput/EditInput";

export const Profile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  // const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [editingUser, setEditingUser] = useState({
    name: "Пользователь",
    username: "username",
    description: "Напишите немного о себе",
    avatar: avatar,
  });

  const makeChangeHandle = (feildParam) => (value) =>
    handleChange(feildParam, value);

  useEffect(() => {
    const savedUser = getUser(userId);
    if (savedUser) {
      setUser(savedUser);
      setEditingUser(savedUser);
    }
  }, [userId]);

  /*const handleEdit = () => {
    if (isEditing) {
      setUser(editingUser);
      saveUser(userId, editingUser);
    }
    setIsEditing(!isEditing);
  };*/

  const handleChange = (field, value) => {
    setEditingUser((prev) => ({ ...prev, [field]: value }));
  };

  const goBack = () => {
    navigate(ROUTES.CHATS);
  };

  const userPic = user?.avatar || avatar;

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
          src={userPic}
          alt={`${userPic}'s photo`}
          className={styles.ProfileImgContainer}
        />
        <EditInput
          labelName="Full name"
          value={editingUser?.name}
          onChange={makeChangeHandle("name")}
        />
        <EditInput
          labelName="Username"
          value={`@${editingUser.username ?? ""}`}
          onChange={makeChangeHandle("username")}
        />
        <EditInput
          labelName="Bio"
          value={editingUser?.description}
          onChange={makeChangeHandle("description")}
        />
      </div>
    </>
  );
};
