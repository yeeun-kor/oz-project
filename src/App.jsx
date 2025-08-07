//오류1 : return문 내에 여러코드이면 중괄호 필수
//오류2 : return문 내에선 부모 블록은 하나만! div나 빈태그로 최상위 블록으로 묶어주기
//오류3 : 자바스크립트 요소 (변수)를 사용하려면, {} 중괄호 이용

function App() {
  let count = 3;
  return (
    <>
      <h1>React는 JSX 문법을 사용합니다. </h1>
      <p>총 3가지 오류가 있어요. </p>
      <p>자바스크립트 요소를 사용하려면 </p>
      <p> count+count = {count + count}이렇게 하면 됩니다.</p>
    </>
  );
}
export default App;
