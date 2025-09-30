import "./App.css";
//문제: users 배열 중 거주지가 서울인 사람의 이름과 나이를 화면에 렌더링해주세요.
const users = [
  { id: 1, 이름: "홍길동", 나이: 25, 거주지: "서울" },
  { id: 2, 이름: "김철수", 나이: 30, 거주지: "부산" },
  { id: 3, 이름: "박영희", 나이: 22, 거주지: "서울" },
  { id: 4, 이름: "이민호", 나이: 27, 거주지: "대구" },
  { id: 5, 이름: "최수정", 나이: 29, 거주지: "부산" },
  { id: 6, 이름: "강호동", 나이: 35, 거주지: "대구" },
  { id: 7, 이름: "이수진", 나이: 32, 거주지: "인천" },
  { id: 8, 이름: "장동건", 나이: 28, 거주지: "서울" },
  { id: 9, 이름: "유재석", 나이: 40, 거주지: "부산" },
  { id: 10, 이름: "김범수", 나이: 37, 거주지: "인천" },
];
function App() {
  const seoulUsers = users.filter((user) => {
    return user.거주지 === "서울";
  });
  console.log(seoulUsers);
  return (
    <>
      {seoulUsers.map(
        (seoulUser) => (
          // ⭐️map() 반복시 return문 안에 코드가 여러줄 들어가면 꼭 ! () 중괄호 감싸주고, 부모태그 최상위 하나인거 명심하기 !
          //1️⃣ return 사용 안하고 소괄호로 대신하기
          //🙋🏻‍♀️질문 ! key값은 언제 왜 써야하는지, key이름은 어떤걸로 설정해야하는지 궁금합니다--> ai한테 물어보니, key라는 속성은 DOM이 각 아이템들을 각각 구별하는 식별번호 라고 합니다!
          <div key={seoulUser.id}>
            <div>이름 : {seoulUser.이름}</div>
            <div>나이 : {seoulUser.나이}</div>
          </div>
        )

        //2️⃣return문 사용시 {return ()} 사용할 것
        //return (
        //   <div>
        //     <div>이름 : {seoulUser.이름}</div>
        //     <div>나이 : {seoulUser.나이}</div>
        //   </div>
        // );
      )}
    </>
  );
}

export default App;
