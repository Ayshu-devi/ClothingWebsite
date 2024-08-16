import React from "react";

const styleMapping = {
  Red: "Bold",
  Blue: "Cool",
  Green: "Natural",
  Black: "Classic",
  Casual: "Casual",
  Formal: "Formal",
  Sporty: "Sporty",
  Vintage: "Vintage",
  Sneakers: "Sporty",
  Boots: "Casual",
  Sandals: "Natural",
  Heels: "Formal",
};

const determineStyle = (answers) => {
  const styleCount = {};

  answers.forEach((answer) => {
    const style = styleMapping[answer];
    if (style) {
      if (!styleCount[style]) {
        styleCount[style] = 0;
      }
      styleCount[style]++;
    }
  });

  let maxStyle = "";
  let maxCount = 0;
  for (const [style, count] of Object.entries(styleCount)) {
    if (count > maxCount) {
      maxStyle = style;
      maxCount = count;
    }
  }

  return maxStyle;
};

const Results = ({ answers }) => {
  const stylePreference = determineStyle(answers);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Style Preference</h2>
      <p className="text-lg mb-4">
        Based on your answers, your style preference is: <strong>{stylePreference}</strong>
      </p>
      <ul className="list-disc list-inside space-y-2">
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default Results;
