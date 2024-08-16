import React, { useState } from "react";

const CustomizableClothing = () => {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedPattern, setSelectedPattern] = useState("Solid");
  const [customText, setCustomText] = useState("");

  const colors = ["Red", "Blue", "Green", "Black"];
  const patterns = ["Solid", "Striped", "Plaid", "Floral"];
  

  return (
    <div className="flex mt-10">
      {/* Image on the left side */}
      <div className="w-1/3">
        
      </div>

      {/* Customization Box */}
      <div
        className="custom-clothing-container py-4 px-8 bg-[#ffa998] shadow-lg rounded-lg max-w-lg ml-8"
        style={{ border: "2px solid #f76566" }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Customize Your Clothing
        </h2>

        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Choose Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Choose Pattern:</label>
          <select
            value={selectedPattern}
            onChange={(e) => setSelectedPattern(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {patterns.map((pattern) => (
              <option key={pattern} value={pattern}>
                {pattern}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Add Custom Text:</label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your text"
          />
        </div>

        <div className="custom-preview p-4 bg-gray-100 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Preview</h3>
          <div
            className="w-32 h-32 mx-auto bg-cover rounded-lg"
            style={{
              backgroundColor: selectedColor.toLowerCase(),
              backgroundImage:
                selectedPattern === "Solid"
                  ? "none"
                  : selectedPattern === "Striped"
                  ? "linear-gradient(white 50%, transparent 50%)"
                  : selectedPattern === "Plaid"
                  ? "repeating-linear-gradient(white 5%, transparent 5%, transparent 10%)"
                  : "url('https://tse1.mm.bing.net/th?id=OIP.wYiDmXFLS_XQ93hcQvYx6gHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107')",
            }}
          >
            <p className="text-white text-center mt-10">{customText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableClothing;
