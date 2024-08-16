import React, { useState } from "react";
import Question from "./Question";
import Results from "./Results";

const quizQuestions = [
  {
    question: "What's your favorite color?",
    options: ["Red", "Blue", "Green", "Black"],
  },
  {
    question: "What's your preferred style?",
    options: ["Casual", "Formal", "Sporty", "Vintage"],
  },
  {
    question: "What's your go-to footwear?",
    options: ["Sneakers", "Boots", "Sandals", "Heels"],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.quizony.com/clothing-quiz-what-clothing-style-is-your-complete-opposite/imageForSharing.png')",
      }}
    >
      <div className="quiz-container p-6 max-w-2xl bg-white shadow-lg rounded-lg mt-10 mr-10">
        {showResults ? (
          <Results answers={answers} />
        ) : (
          <div>
            <div className="progress-bar bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
            <Question
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
            <div className="flex justify-between mt-4">
              {currentQuestion > 0 && (
                <button
                  onClick={handlePrevious}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Previous
                </button>
              )}
              {currentQuestion < quizQuestions.length - 1 ? (
                <button
                  onClick={() => handleAnswer(answers[currentQuestion])}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setShowResults(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Show Results
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
