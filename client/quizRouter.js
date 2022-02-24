import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { ShowAnswer } from "./showAnswer";
import ShowQuestion from "./quizApp";

export function QuizRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />
          <Route path={"/question"} element={<ShowQuestion />} />
          <Route path={"/answer/*"} element={<ShowAnswer />} />
          <Route path={"/*"} element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
