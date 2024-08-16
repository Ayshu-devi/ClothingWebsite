import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import InputBox from "./InputBox";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI Stylist. How can I help you today?", sender: "bot" },
  ]);

  const addMessage = (message) => {
    setMessages([...messages, message]);

    // Simulate a bot response
    setTimeout(() => {
      const botMessage = {
        text: getBotResponse(message.text),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    // Simple AI logic for responding to the user
    if (userMessage.toLowerCase().includes("outfit")) {
      return "I suggest a casual look with a pair of jeans and a white t-shirt. How does that sound?";
    } else if (userMessage.toLowerCase().includes("trends")) {
      return "Currently, bold colors and oversized jackets are trending!";
    } else if (userMessage.toLowerCase().includes("formal")) {
      return "A classic black suit with a white shirt and tie is always a great choice for formal occasions.";
    } else {
      return "I'm still learning! Can you ask something else?";
    }
  };

  return (
    <div className="flex justify-end"> {/* Align the chatbot to the right */}
      <div className="chatbot-container bg-white shadow-lg rounded-lg p-4 max-w-md mt-10 mr-10">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        </div>
        <InputBox addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
