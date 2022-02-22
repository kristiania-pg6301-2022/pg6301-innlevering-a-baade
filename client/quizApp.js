import { Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { isCorrectAnswer, randomQuestion } from "../server/quiz";

export function Frontpage() {
  return (
    <div>
      <h1>Quiz Broadcast</h1>
      <Link to={"/question"} Answer questions>
        <button>Remain indoors</button>
      </Link>
    </div>
  );
}

export function ShowQuestion() {
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

function ShowAnswer() {
  return (
    <div>
      <Routes>
        <Route path={"true"} element={<h1>Correct</h1>} />
        <Route path={"false"} element={<h1>Incorrect</h1>} />
      </Routes>
      <div>
        <Link to={"/question"}>New question</Link>
      </div>
    </div>
  );
}

export function Application() {
  return (
    <Routes>
      <Route path={"/"} element={<Frontpage />} />
      <Route path={"/question"} element={<ShowQuestion />} />
      <Route path={"/answer/*"} element={<ShowAnswer />} />
    </Routes>
  );
}
