import React, { useState } from "react";

const InputBox = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      addMessage({ text: input, sender: "user" });
      setInput("");
    }
  };

  return (
    <div className="input-box mt-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        className="flex-grow p-2 border rounded-l-lg"
        placeholder="Ask your stylist..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded-r-lg"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
