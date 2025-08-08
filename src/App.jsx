import { useState } from "react";
import "./App.css";
/* 카운터 앱 만들기
- 버튼 클릭 이벤트에 따라 counter 상태 값이 변경되도록 구현
- 각각의 버튼에 해당하는 동작을 별도의 함수로 처리
*/
function App() {
  // React의 useState 훅을 사용하여 counter 상태 및 상태 변경 함수 선언
  const [counter, setCounter] = useState(0);

  // 버튼 컴포넌트에 전달할 클릭 이벤트 핸들러 함수 정의
  const plusCounter = () => {
    setCounter(counter + 1);
  };
  const minusCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Counter counter={counter}></Counter>
      <PlusBtn plusCounter={plusCounter}></PlusBtn>
      <MinusBtn minusCounter={minusCounter}></MinusBtn>
    </>
  );
}

// Counter 컴포넌트: 부모로부터 counter 값을 props로 전달받아 화면에 표시
function Counter({ counter }) {
  return <div>counter : {counter} </div>;
}

// PlusBtn, MinusBtn 컴포넌트: 부모로부터 클릭 이벤트 핸들러 함수를 props로 전달받아 버튼에 연결
function PlusBtn({ plusCounter }) {
  return <button onClick={plusCounter}>+</button>;
}
function MinusBtn({ minusCounter }) {
  return <button onClick={minusCounter}>-</button>;
}
export default App;
