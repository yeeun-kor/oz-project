const express = require("express");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(express.json());

app.post("/encode", (req, res) => {
  const { id, name } = req.body;
  const user = {
    id,
    name,
  };
  const token = jwt.sign({user}, "asd123!", { expiresIn: "1m" }); //token화
  res.send(token);
  console.log(token);
});

app.get("/decode", (req, res) => {
  const token = req.query.token;
  try {
    const decoded = jwt.verify(token, "asd123!");
    console.log("DECODED JWT", decoded);
    res.send(decoded);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log("서버실행 완료, nodemon으로 실행시키기 npm run start");
});
