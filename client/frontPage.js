import { useLoader } from "./useLoader";
import { fetchJSON } from "./http";
import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("/api/score"));

  return (
    <div>
      <h1>Welcome to the quiz broadcast</h1>
      {loading && <div>Loading ...</div>}
      {score && (
        <div>
          You have answered {score.correct} out of {score.answered} correct
        </div>
      )}
      <div>
        <Link to={"/question"}>
          <button> Remain indoors</button>
        </Link>
      </div>
    </div>
  );
}
