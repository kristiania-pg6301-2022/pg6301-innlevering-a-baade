import express from "express";
import { randomQuestion } from "./quiz.js";
import * as path from "path";

const app = express();

app.get("/api/question/random", (req, res) => {
  const question = randomQuestion();
  res.json(question);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../clients/dist/index.html"));
  } else {
    next();
  }
});
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
