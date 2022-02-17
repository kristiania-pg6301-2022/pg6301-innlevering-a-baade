import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { randomQuestion } from "../server/quiz";

export function Frontpage() {
  return (
    <div>
      <h1>Quiz Broadcast</h1>
      <Link to={"question"} Answer questions>
        <button>Remain indoors</button>
      </Link>
    </div>
  );
}

function ShowQuestion() {
  const [question] = useState(randomQuestion());
  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}>
            <button>{question.answers[a]}</button>
          </div>
        ))}
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Frontpage />} />
        <Route path={"/question"} element={<ShowQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
