import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hii! I am your assistant. How can I help you today?' }
  ]);

  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return 'Hello there!';
    if (text.includes('how are you') || text.includes('kaise ho')) return 'I am a bot, but I am doing good!';
    if (text.includes('your name')) return 'I am a simple chatbot!';
    if (text.includes('bye')) return 'Goodbye! Have a great day!';
    return 'Sorry! I did not understand that.';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    const botMsg = { sender: 'bot', text: getBotResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
