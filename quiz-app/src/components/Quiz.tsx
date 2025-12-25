import React, { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

const quizData: QuizQuestion[] = [
  {
    question: "Tên đầy đủ của tuyến cao tốc Bắc – Nam hiện nay là gì?",
    options: [
      "Cao tốc Hồ Chí Minh – Hà Nội",
      "Cao tốc Bắc – Nam phía Đông",
      "Quốc lộ 1A mở rộng",
      "Cao tốc ven biển Việt Nam",
    ],
    answer: "Cao tốc Bắc – Nam phía Đông",
  },
  {
    question:
      "Tuyến cao tốc Bắc – Nam chủ yếu chạy song song với tuyến giao thông nào?",
    options: [
      "Đường Hồ Chí Minh",
      "Đường sắt Bắc – Nam",
      "Quốc lộ 1A",
      "Quốc lộ 14",
    ],
    answer: "Quốc lộ 1A",
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [optionSelected, setSelected] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelected(null);
    }
  };

  const question = quizData[currentQuestion];

  return (
    <>
      <h2>
        Câu {currentQuestion + 1}
      </h2>

      <p className="question">{question.question}</p>

      {question.options.map((option) => (
        <button
          key={option}
          className={`option ${
            optionSelected === option ? "selected" : ""
          }`}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      {optionSelected && (
        <p>Câu trả lời của bạn: <b>{optionSelected}</b></p>
      )}

      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={currentQuestion === 0}>
          Quay lại
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === quizData.length - 1}
        >
          Kế tiếp
        </button>
      </div>
    </>
  );
};

export default Quiz;
