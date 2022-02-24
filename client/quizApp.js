import React, { useState } from "react";
import { postJSON } from "./http";

export function ShowQuestion({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    await postJSON("/api/answer", { id, answer });
    onReload();
  }
  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}>
            <button onClick={() => handleAnswer(a)}>
              {question.answers[a]}
            </button>
          </div>
        ))}
    </div>
  );
}

export function QuestionComponent({ reload }) {
  const [question, setQuestion] = useState();

  async function handleQuizLoader() {
    const res = await fetch("/api/random");
    setQuestion(await res.json());
  }

  function handleReload() {
    setQuestion(undefined);
    reload();
  }

  if (!question) {
    return (
      <div>
        <button onClick={handleQuizLoader}>Remain Indoors</button>
      </div>
    );
  }
  return <ShowQuestion question={question} onReload={handleReload} />;
}
