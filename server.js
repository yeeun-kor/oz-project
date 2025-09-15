const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const users = [
  {
    user_id: "test",
    user_password: "1234",
    user_name: "테스트 유저",
    user_info: "테스트 유저입니다",
  },
];

const app = express();
app.use(
  cors({
    origin: ["http://127.0.0.1:5501", "http://localhost:5501"],
    methods: ["OPTIONS", "POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const secretKey = "ozcodingschool";

// 클라이언트에서 post 요청을 받은 경우
app.post("/", (req, res) => {
  const { userId, userPassword } = req.body;
  const userInfo = users.find(
    (el) => el.user_id === userId && el.user_password === userPassword
  );
  console.log(userInfo);
  // 유저정보가 없는 경우
  if (!userInfo) {
    res.status(401).send("로그인 실패");
  } else {
    const accessToken = jwt.sign({ userId: userInfo.user_id }, secretKey, {
      expiresIn: 1000 * 60 * 10,
    });
    res.send(accessToken);
  }
});

// 클라이언트에서 get 요청을 받은 경우
app.get("/", (req, res) => {
  //클라이언트에서 보낸 토큰키헤더값 추출
  const accessToken = req.headers.authorization.split(" ")[1];
  //토큰키헤더값 검사하여 일치하면 유저정보값이 넘어옴 -> payload변수로 저장
  const payload = jwt.verify(accessToken, secretKey);
  const userInfo = users.find((el) => el.user_id === payload.userId);
  //실제 있는 데이터값을 통째로 넘겨야 하기 때문에,return 으로 json변환이 필요
  //post는 그저 정보만 넘겨주는거라, return 은 필요없다. 
  return res.json(userInfo);
});

app.listen(3000, () => console.log("서버 실행!"));
