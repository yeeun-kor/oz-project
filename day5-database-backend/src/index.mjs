import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import {
  commentCreateRouter,
  commentGetRouter,
} from "./feature/comment/router.mjs";
import { filmRouter } from "./feature/film/router.mjs";
import { likeRouter } from "./feature/like/router.mjs";
import { postRouter } from "./feature/post/router.mjs";
// .env 파일 불러오기
dotenv.config();

// HTTP 서버 생성
const app = express();

// CORS 설정
const corsOrigin = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: corsOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

// 쿠키, body 파싱
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Basic Router Set
app.get("/film/post/:postId/comment", commentGetRouter);
app.post("/film/post/:postId/comment", commentCreateRouter);
app.use("/film/post/like", likeRouter);
app.use("/film/post", postRouter);
app.use("/film", filmRouter);

// HTTP 요청 로깅
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Health Check
app.get("/health", (_, res) => {
  return res.status(200).json({
    message: "health check",
  });
});

// 나머지 요청은 모두 404
app.use((_, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.listen(8090, () => console.log("Listening to 8090..."));
