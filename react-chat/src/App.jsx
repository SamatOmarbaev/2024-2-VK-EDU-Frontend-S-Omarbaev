import { Routes, Route } from "react-router-dom";
import "./index.css";
import Chats from "./pages/Chats/Chats";
import { Chat } from "./pages/Chat/Chat";
import { Profile } from "./pages/Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/chat/:chatId/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
