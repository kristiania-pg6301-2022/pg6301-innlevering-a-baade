import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { isCorrectAnswer, randomQuestion } from "../server/questions";

export function ShowQuestions() {
  function handelAnswer(answer) {
    if (isCorrectAnswer(question, answer)) {
      navigate("/answer/true");
    } else {
      navigate("/answer/false");
    }
  }

  const navigate = useNavigate();

  const [question] = useState(randomQuestion());
  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}>
            <button onClick={() => handelAnswer(a)}>
              {question.answers[a]}
            </button>
          </div>
        ))}
    </div>
  );
}
