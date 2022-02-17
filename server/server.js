import express from "express";
import { randomQuestion, isCorrectAnswer, Questions } from "./quiz.js";
import * as path from "path";

const app = express();

app.get("/api/question/random", (req, res) => {
  const { id, question, answer } = randomQuestion();
  res.json({ id, question, answer });
});

app.post("/api/quiz/answer", (req, res) => {
  const { id, answer } = req.body;
  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.sendStatus(404);
  }
  if (isCorrectAnswer(question, answer)) {
    return res.json({ result: "correct" });
  } else {
    return res.json({ result: "incorrect" });
  }
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
