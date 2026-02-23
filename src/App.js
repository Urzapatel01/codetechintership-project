


export default App;
import React, { useState, useEffect } from "react";
import { database } from "./firebase";
import { ref, push, onValue } from "firebase/database";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(messageList);
      }
    });
  }, []);

  const sendMessage = () => {
    if (message.trim() === "" || username.trim() === "") return;

    const messagesRef = ref(database, "messages");

    push(messagesRef, {
      username,
      text: message,
      time: new Date().toLocaleTimeString(),
    });

    setMessage("");
  };

  return (
    <div className="chat-container">
      <h2>🔥 Real-Time Chat App</h2>

      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />

      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <span className="time">[{msg.time}]</span>
            <strong> {msg.username}: </strong>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

