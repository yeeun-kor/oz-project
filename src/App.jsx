import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./styled/styled";

const StyledSection = styled.section`
  ${flexMixin(undefined, "center", "center", "20px", "wrap")}
  padding: 20px 40px;
`;

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
body {
  background-color: #121212;
}
`;


function App() {
  return (
    <>
      <GlobalStyled></GlobalStyled>
      <main>
        <Header />
        <StyledSection>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </StyledSection>
      </main>
    </>
  );
}

export default App;
