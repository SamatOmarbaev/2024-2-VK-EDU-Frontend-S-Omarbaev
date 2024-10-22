import { useState } from "react";
import "./index.css";
import Chats from "./pages/Chats/Chats";
import { Chat } from "./pages/Chat/Chat";

const App = () => {
  const [activeChatId, setActiveChatId] = useState(null);

  return (
    <div className="app">
      {activeChatId === null ? (
        <Chats onChatSelect={setActiveChatId} />
      ) : (
        <Chat chatId={activeChatId} onBack={() => setActiveChatId(null)} />
      )}
    </div>
  );
};

export default App;
