// server.js

const express = require("express");
const cors = require("cors");

// 서버 열기
const app = express();
//cors 설정
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
  })
);

let data = { message: "여러분 화이팅!" };

//express내장메서드 사용
app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  res.writeHead(204, headers);
  res.send();
});

app.get("/", (req, res) => {
  return res.json(data);
});

app.post("/", (req, res) => {
  const newData = { message: req.body };
  data.push(newData);
  return res.send(`받은 POST 데이터: ${newData}`);
});

app.put("/", (req, res) => {
  const newData = req.body;
  console.log(newData);
  data = { message: newData };
  return res.send(`업데이트된 데이터: ${newData}`);
});

app.delete("/", (req, res) => {
  data = {};
  return res.send("데이터가 삭제되었습니다.");
});
app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
