const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// users의 정보를 확인하신 후에 로그인 요청을 진행해주세요.
// server.js 파일 내에 총 5가지의 문제가 존재합니다.
// 문제의 요구사항을 꼼꼼히 읽어보신 후에 과제를 진행해주세요.
const users = [
  {
    user_id: "oz_user1",
    user_password: "1234",
    user_name: "김오즈",
    user_info: "서울에 거주하는 김오즈입니다.",
  },
  {
    user_id: "oz_user2",
    user_password: "4567",
    user_name: "박코딩",
    user_info: "부산에 거주하는 박코딩입니다.",
  },
  {
    user_id: "oz_user3",
    user_password: "7890",
    user_name: "이쿠키",
    user_info: "경기에 거주하는 이쿠키입니다.",
  },
  {
    user_id: "oz_user4",
    user_password: "1357",
    user_name: "최노드",
    user_info: "제주에 거주하는 최노드입니다.",
  },
];

const app = express();

app.use(
  cors({
    // ⭐️ origin에 설정되어 있는 포트번호를 본인의 라이브서버 포트번호로 변경해주세요.
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["OPTIONS", "POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// 1️⃣. 요구사항에 맞도록 session 옵션을 설정해 주세요. (총 4가지)
app.use(
  session({
    secret: "session",
    resave: false,
    saveUninitialzed: false,
    name: "session_id",
  })
);

// POST 요청 (로그인 요청시 보내는 메소드)
app.post("/", (req, res) => {
  // console.log(req.body);
  const { userId, userPassword } = req.body;
  const userInfo = users.find(
    (el) => el.user_id === userId && el.user_password === userPassword
  );
  // console.log(userInfo);
  if (!userInfo) {
    res.status(401).send("로그인 실패");
  } else {
    req.session.userId = userInfo.user_id;
    res.send("⭐️세션 생성 완료!");
  }
});

// GET 요청
app.get("/", (req, res) => {
  const userInfo = users.find((el) => el.user_id === req.session.userId);
  // console.log(typeof userInfo);타입이 Object로 나오는데,
  // 이걸 그대로 return 하면 안되려나 ??? 꼭 json형태로 바꿔야하나요 ???
  // 그리고 추가로 ! app.post에서는 json으로 변환 하지 않고 -> 유저의 정보를 바로 session에 저장해도 되나요 ?
  //왜 이녀석만 json으로 바꿔야하는지 애-매 하네요
  return res.json(userInfo);
});

// DELETE 요청
app.delete("/", (req, res) => {
  req.session.destroy();
  res.clearCookie("session_id");
  res.send("🧹세션 삭제 완료");
});

app.listen(3000, () => console.log("서버 실행 ..."));
