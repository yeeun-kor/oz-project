// http 서버 생성
const http = require("http");

// 사용자의 입력값을 관리하는 배열 생성
let todo = [
  { id: 1, content: "더미데인터 01" },
  { id: 2, content: "더미데인터 02" },
];

// 열려있는 서버는 -> http(브라우저) 에 어떤 요청과 응답을 보낼지
//! CORS에러 발생 : 서버가 브라우저로 응답값을 보내주는데, 주소값이 CORS헤더에 없어서 뱉어냄 !
//! 해결법 : 클라이언트쪽에서 헤더에 주소값도 함께 보내줘야함
const server = http.createServer((req, res) => {
  console.log(req.method + "요청이 들어왔어용 ");
  //! CORS 해결하는 헤더값 수동으로 설정
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,OPTIONS");

  //* 브라우저->서버 Prefilght 요청해야함( OPTIONS 메서드로 들어옴)
  //* 아무 문제 없으면 서버가 브라우저에게 "res.sen()"  메세지 보내줄 것임
  if (req.method === "OPTIONS") {
    return res.end("요청 보내세요.");
  }
  //* 브라우저-> 사용자 입력값을 보내면 -> 똑같이 응답 해줘야함
  //* 배열값 그대로 보내면 인식 못하니깐 JSON.stringify() 으로 변환하여 응답메세지에 적어서 http에 뿌려줘야함
  if (req.method === "GET") {
    return res.end(JSON.stringify(todo));
  }

  //* 브라우저 -> 서버입력값 전송
  if (req.method === "POST") {
    //data 저장할 공간 만들기
    let data;
    req.on("data", (chunk) => {
      data = chunk.toString();
    });
    req.on("end", () => {
      console.log(data); //입력값이 서버의 요청값으로 잘 전달되었음
      const newTodo = { id: Number(new Date()), content: data };
      //서버에 값 todo .push 추가
      todo.push(newTodo);
    });
    return res.end("Todo 추가완료!@");
  }

  //* 브라우저 -> 서버 수정한 값 전송
  if (req.method === "PUT") {
    let data;
    req.on("data", (chunk) => {
      data = chunk.toString();
    });
    req.on("end", () => {
      const newTodo = JSON.parse(data);
      todo = todo.map((el) => {
        if (el.id === newTodo.id) {
          return newTodo;
        } else {
          return el;
        }
      });
    });
    return res.end("Todo 수정완료!");
  }

  //* 브라우저 -> 서버 수정한 값 전송
  if (req.method === "DELETE") {
    let data;
    req.on("data", (chunk) => {
      data = chunk.toString();
    });
    req.on("end", () => {
      //버튼을 클릭하면 해당 번호의 id 값을 받아오게 됨.
      const id = Number(data);
      //filter고차함수를 사용하여, 현재 id값이랑 일치하지 않는 애들로만 반환시켜
      todo = todo.filter((el) => el.id !== id);
    });
    return res.end("삭제 완료 !");
  }

  return res.end("end");
});

server.listen(3000, () => {
  console.log("서버열렸음");
});
