import { useLoader } from "./useLoader";
import { fetchJSON } from "./http";
import React from "react";
import { QuestionComponent } from "./quizApp";

export function FrontPage() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("/api/score"));

  return (
    <div>
      <h1>Welcome to the quiz broadcast</h1>
      {score && (
        <div>
          You have answered {score.correct} out of {score.answered} correct
        </div>
      )}
      <QuestionComponent reload={reload} />
    </div>
  );
}
