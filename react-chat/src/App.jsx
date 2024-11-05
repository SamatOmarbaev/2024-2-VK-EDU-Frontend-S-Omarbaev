import { useState } from "react";

import { Chats } from "./pages/Chats/Chats";
import { Chat } from "./pages/Chat/Chat";

import "./index.css";

const App = () => {
  const [activeChatId, setActiveChatId] = useState(null);

  const goBack = () => setActiveChatId(null);

  return (
    <div className="app">
      {activeChatId === null ? (
        <Chats onChatSelect={setActiveChatId} />
      ) : (
        <Chat chatId={activeChatId} onBack={goBack} />
      )}
    </div>
  );
};

export default App;
