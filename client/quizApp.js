import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJSON, postJSON } from "./http";

const ShowQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const id = question.id;
  const navigate = useNavigate();

  useEffect(async () => {
    setQuestion(await fetchJSON("/api/quiz/random"));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await postJSON("/api/quiz", { id, answer });
    if (data.result === false) {
      navigate("/answer/incorrect");
    } else {
      navigate("/answer/correct");
    }
  }

  let response = "";
  if (question) {
    response = Object.keys(question.answers)
      .filter((q) => question.answers[q])
      .map((q) => (
        <div key={q}>
          <form onSubmit={handleSubmit}>
            <button
              name={"answer"}
              value={question.answers[q]}
              onClick={() => setAnswer(q)}
            >
              {question.answers[q]}
            </button>
          </form>
        </div>
      ));
  }
  return (
    <div>
      <h1>The Quiz Broadcast</h1>
      <div>
        <h2>{question.question}</h2>
        <div>{response}</div>
      </div>
    </div>
  );
};

export default ShowQuestion;
