const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PORT = 3000;

// 파일 저장 스토리지 정의 -> upload 폴더 설정
//
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".")[0];
    const fileExt = file.originalname.split(".")[1];
    cb(null, `${fileName}-${Date.now()}.${fileExt}`);
  },
});

const upload = multer({ storage: storage });

// 파일 업로드 라우트
// upload.any(): multer 미들웨어를 사용하여 어떤 이름이든 허용
app.post("/upload", upload.any(), (req, res) => {
  res.send("파일 업로드 성공");
});

// 파일 다운로드 라우트
// get요청으로 패스 파라미터
// 파일 다운로드 라우트
app.get("/download/:filename", (req, res) => {
  const fileName = req.params.filename; // 요청 URL에서 파일명 받기
  const filePath = path.join(__dirname, "uploads", fileName);

  // 파일 존재 여부 확인
  if (fs.existsSync(filePath)) {
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error("파일 다운로드 중 오류:", err);
        res.status(500).send("파일 다운로드 실패");
      }
    });
  } else {
    res.status(404).send("파일을 찾을 수 없습니다");
  }
});

app.get("/", (req, res) => {
  res.send("파일 업로드 서버");
});

app.listen(PORT, () => {
  console.log("server onLoad");
});
