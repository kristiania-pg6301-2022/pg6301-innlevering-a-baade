import { Link, Route, Routes } from "react-router-dom";
import * as React from "react";

export function GetAnswer({ answer }) {
  return (
    <div>
      {answer ? <h1>Correct</h1> : <h1>Incorrect</h1>}
      <div>
        <Link to={"/question"}>
          <button>Next round, and remain indoors</button>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button>Remember remain indoors, (FrontPage)</button>
        </Link>
      </div>
    </div>
  );
}

export function ShowAnswer() {
  return (
    <div>
      <Routes>
        <Route path={"correct"} element={<GetAnswer answer={true} />} />
        <Route path={"incorrect"} element={<GetAnswer answer={false} />} />
      </Routes>
    </div>
  );
}
