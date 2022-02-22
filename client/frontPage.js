import React from "react";
import { Link } from "react-router-dom";
import { loadHandler } from "./loadHandler";
import { fetchJSON } from "./http";

export function FrontPage() {
  const {
    data: score,
    loading,
    reload,
  } = loadHandler(async () => fetchJSON("/api/score"));

  return (
    <div>
      <h1>Quiz Broadcast</h1>
      {loading && <div>LOADING...</div>}
      {score && (
        <h1>
          Answered {score.correct} out of {score.answers} correctly!!!
        </h1>
      )}
      <Link to={"/question"} Answer questions>
        <button>Remain indoors</button>
      </Link>
    </div>
  );
}
