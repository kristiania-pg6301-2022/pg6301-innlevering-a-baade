import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShowQuestions } from "./quiz";
import { FrontPage } from "./frontPage";
import { ShowAnswer } from "./ShowAnswer";

export function QuizApp() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/question"} element={<ShowQuestions />} />
      <Route path={"/answer/*"} element={<ShowAnswer />} />
    </Routes>
  );
}
