import { Link, Route, Routes } from "react-router-dom";
import React from "react";

export function ShowAnswer() {
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
