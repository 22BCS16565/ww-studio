import React, { useState } from "react";

const TherapyAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, from: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Thanks for your message! Contact us on email - kabircsecu@gmail.com Phone no - 9306110677 ", from: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        type="button"
        className="bg-purple-600 text-white p-3 rounded-full shadow-xl"
        onClick={toggleChat}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-2 w-72 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="bg-purple-600 text-white p-3 font-semibold flex justify-between items-center">
            <span>Assistant</span>
            <button type="button" onClick={toggleChat} className="text-white text-sm">✕</button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-gray-200 text-left"
                    : "bg-purple-500 text-white ml-auto text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              className="flex-1 p-2 border rounded text-sm"
            />
            <button
              type="button"
              onClick={sendMessage}
              className="bg-purple-600 text-white px-3 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapyAssistant;
