import { Routes, Route } from "react-router-dom";
import { Chats } from "./pages/Chats/Chats";
import { Chat } from "./pages/Chat/Chat";
import { Profile } from "./pages/Profile/Profile";
import { ROUTES } from "./constants/constants";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.CHATS} element={<Chats />} />
        <Route path={`${ROUTES.CHAT_DETAILS}/:chatId`} element={<Chat />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
