import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";


export function Frontpage() {
    return <div>
        <h1>Quiz Broadcast</h1>
        <Link to={"question"}>
                <button>Remain indoors</button>
        </Link>
    </div>;
}

function Application() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = {"/"} element = {<Frontpage/>} />
        </Routes>
    </BrowserRouter>
    );
}

ReactDOM.render(
  <Application/>,
  document.getElementById("app")
);
