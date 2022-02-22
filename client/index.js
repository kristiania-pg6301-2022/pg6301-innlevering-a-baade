import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QuizApp } from "./quizApp";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <QuizApp />{" "}
  </BrowserRouter>,
  document.getElementById("app")
);
