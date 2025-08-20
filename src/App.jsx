import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  //전역 스타일 컴포넌트
  const GlobalStyle = createGlobalStyle`
  *{margin: 0;padding: 0;};
  input{width: 80%;}
  span{
    &:hover{color:blue}
  }
  `;

  //색상차트 설정하기
  const BackGroundColor = styled.div`
    width: 300px;
    height: 300px;
    background-color: rgb(
      ${(props) => props.input1},
      ${(props) => props.input2},
      ${(props) => props.input3}
    );
  `;
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <input
          type="range"
          min={0}
          max={255}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        ></input>
        <span>{input1}</span>
        <input
          type="range"
          min={0}
          max={255}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        ></input>
        <span>{input2}</span>

        <input
          type="range"
          min={0}
          max={255}
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        ></input>
        <span>{input3}</span>
        <BackGroundColor
          input1={input1}
          input2={input2}
          input3={input3}
        ></BackGroundColor>
        <section>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
