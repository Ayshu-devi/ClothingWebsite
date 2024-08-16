import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div
      className={`chat-message p-2 rounded-lg my-2 ${
        message.sender === "bot"
          ? "bg-gray-200 text-black"
          : "bg-blue-500 text-white self-end"
      }`}
    >
      {message.text}
    </div>
  );
};

export default ChatMessage;
