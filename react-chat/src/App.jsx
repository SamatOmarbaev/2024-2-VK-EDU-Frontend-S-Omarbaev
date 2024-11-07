import { Routes, Route, Navigate } from "react-router-dom";
import { Chats } from "./pages/Chats/Chats";
import { Chat } from "./pages/Chat/Chat";
import { Profile } from "./pages/Profile/Profile";
import { ROUTES } from "./constants/constants";
import "./index.css";
import { useState } from "react";
import { loginUser, registerUser } from "./apiService/auth/auth";
import { TempLogin } from "./components/TempLogin/TempLogin";
import { TempRegister } from "./components/TempRegister/TempRegister";
import { AuthGuard } from "./components/AuthGuard/AuthGuard";

const TempAuth = ({ isRegistering, onLogin, onRegister, toggleRegister }) => (
  <div className="register">
    {isRegistering ? (
      <TempRegister onRegister={onRegister} />
    ) : (
      <TempLogin onLogin={onLogin} />
    )}
    <button onClick={toggleRegister}>
      {isRegistering
        ? "Уже есть аккаунт? Войти"
        : "Нет аккаунта? Зарегистрироваться"}
    </button>
  </div>
);

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      window.location.reload();
    } catch (error) {
      alert("Ошибка при авторизации ", error);
    }
  };

  const handleRegister = async (formData) => {
    try {
      await registerUser(formData);
      setIsRegistering(false);
      alert("Регистрация успешна. Пожалуйста, войдите.");
    } catch (error) {
      alert("Ошибка при регистрации ", error);
    }
  };

  const toggleRegister = () => setIsRegistering(!isRegistering);

  return (
    <div className="app">
      <Routes>
        <Route
          path={ROUTES.AUTH}
          element={
            <TempAuth
              isRegistering={isRegistering}
              onLogin={handleLogin}
              onRegister={handleRegister}
              toggleRegister={toggleRegister}
            />
          }
        />
        <Route
          path={ROUTES.CHATS}
          element={
            <AuthGuard>
              <Chats />
            </AuthGuard>
          }
        />
        <Route
          path={`${ROUTES.CHAT_DETAILS}/:chatId`}
          element={
            <AuthGuard>
              <Chat />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.AUTH} />} />
      </Routes>
    </div>
  );
};

export default App;
