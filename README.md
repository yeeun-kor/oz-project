# Styled-Components를 이용하여 OZ 페이지 디자인하기

<br/>

- [Styled-Components를 이용하여 OZ 페이지 디자인하기](#styled-components를-이용하여-oz-페이지-디자인하기)
  - [Styled-Components 란?](#styled-components-란)
  - [Styled-Components 사용하기](#styled-components-사용하기)
    - [Styled-Components Props 사용하기](#styled-components-props-사용하기)
    - [전역 스타일 설정하기](#전역-스타일-설정하기)
  - [스타일 컴포넌트 특징](#스타일-컴포넌트-특징)
  - [스타일 컴포넌트의 장점 \& 단점](#스타일-컴포넌트의-장점--단점)
    - [장점](#장점)
    - [단점](#단점)
- [scss \& styled-components mix하는 법](#scss--styled-components-mix하는-법)
  - [1. 스타일 폴더 생성](#1-스타일-폴더-생성)
    - [JS파일 생성](#js파일-생성)
  - [2.믹스드인 함수 생성](#2믹스드인-함수-생성)
    - [매개변수 설정](#매개변수-설정)
    - [리턴값 설정](#리턴값-설정)
  - [3. 변수 설정](#3-변수-설정)
    - [const 변수로 설정하기](#const-변수로-설정하기)
- [scss \& styled-components 사용하기](#scss--styled-components-사용하기)
  - [1. 외부 스타일 함수 `import사용`](#1-외부-스타일-함수-import사용)
  - [2. 스타일컴포넌트 내부에서 `중첩구조` 사용 가능](#2-스타일컴포넌트-내부에서-중첩구조-사용-가능)
    - [완료한 scss파일 제거](#완료한-scss파일-제거)
  - [3. 전역 스타일 생성](#3-전역-스타일-생성)

## Styled-Components 란?

- `css-in-Js` 자바스크립트 안에서 Css 를 작성하는 방식
- 이전에서 리액트는 `COMPONENT단위로` 랜더링이 되며, 자바스크립트 + Html인 `JSX코드로` 컴포넌트를 구성하였다.
- Styled라이브러리를 사용해서, 컴포넌트 안에서도 `css를` 사용할 수 있게끔 도와준다.

<br/>
<br/>

## Styled-Components 사용하기

1. `npm i styled-components `설치하기
2. `import` 꺼내오고,변수에 저장해서 컴포넌트화 시키기.

```jsx
const blueBtn = styled.태그종류`
  속성1: 속성값1;
  속성2: 속성값2;
`;
```

<br/>

3. 예시 코드 확인해보자.

- 요소에 대한, 스타일 컴포넌트를 생성하고 -> jsx코드로 불러오기.

```jsx
const Btn = styled.button`
  background-color: blue;
  color: red;
  padding: 50px 100px;
`;
```

```jsx
function App() {
  return (
    <main>
      <Btn>버튼</Btn>
    </main>
  );
}
```

<br/>
<br/>

### Styled-Components Props 사용하기

1. 생성한 컴포넌트에 `${}` 사용해서 `props값 (속성명)` 뭐로 받을지 설정

- 여기에선 textColor에 A값을 넣으면 color값을 A값으로 사용
- 그게 아니면 `"color:blue"` 이다.
  <br/>

```jsx
const BidRedBtn = styled(RedBtn)`
  font-size: 2rem;
  color: ${(props) => props.textColor || "blue"};
`;

const PropsBtn = styled.button`
  background-color: ${(props) => props.backgroundColor || "white"};
`;
```

<br/>

2. 사용하는 부분에서 props값을 어떤걸로 넣을지 명시하기
   - 여기에선 props명을 `textColor로` 설정하고
   - 그 값을 "`green`"으로 설정

```jsx
function App() {
  return (
    <main>
      <BidRedBtn textColor="green">빅레드버튼</BidRedBtn>
      <PropsBtn backgroundColor="skyblue">props btn</PropsBtn>
    </main>
  );
}
```

<br/>
<br/>

### 전역 스타일 설정하기

1. 전역에 적용된 리셋 스타일 컴포넌트 만들기

```jsx
const GlobalStyle = createGlobalStyle`
  *{margin: 0;padding: 0;};
  input{width: 80%;}`;
```

2. 생성된 컴포넌트를 최상위 컴포넌트로 설정하기

```jsx
return (
  <>
    <GlobalStyle />
    <main></main>
  </>
);
```

<br/>

## 스타일 컴포넌트 특징

> 컴포넌트 내부에서 scss문법인 **중첩+믹스드인** 사용 가능하다

```jsx
const GlobalStyle = createGlobalStyle`
  *{margin: 0;padding: 0;};
  input{width: 80%;}
  span{
    &:hover{color:blue} //중첩기능 사용
  }
  `;
```

<br/>
<br/>

## 스타일 컴포넌트의 장점 & 단점

### 장점

- 👍🏻컴포넌트를 재사용 모듈화 가능

- 👍🏻클래스 이름 자동으로 생성

<br>

### 단점

- 👎🏻Css 추가 학습 필요 -> 컴포넌트,props등등( 러닝커브)

- 👎🏻클래스 이름 보기가 불편, 역추적 어려움

- 👎🏻자바스크립트 파일이 커진다.

---

# scss & styled-components mix하는 법

- scss에서 사용한 코드들을 JS 코드로 바꿔주고
- 외부에서 사용하기 해야함.
- 즉 , JS에서 함수 컴포넌트 만들고 export를 해준다.
- 그리고 사용한 JSX파일에서 import하자

## 1. 스타일 폴더 생성

### JS파일 생성

- `style/`폴더를 생성하여, scss (믹스드인) 친구들은 자바스크립트 코드로 구현하기
- `[styled]  - [style.js]`

## 2.믹스드인 함수 생성

### 매개변수 설정

```jsx
const FlexMixin = (
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = "0",
  wrap = "nowrap"
) => {};
```

- `scss`에서 사용한 믹스드인 전용 함수(컴포넌트) 를 생성한다. -이때 매개변수로 인자값과, 속성값을 `=` 과 `""` 문자열로 변환 시켜주어서 인자로 받아야 한다.

<br>

### 리턴값 설정

```jsx
) => {
  return `  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
  flex-wrap: $wrap;`;
};
};
```

- 스타일컴포넌트의 반환값은 무조건 ` 백틱(``)  `을 사용해야함
- 리턴값도 우리는 백틱으로 감싸주어야함
- 이때, `SCSS값을` 스타일컴포넌트로 넘겨주어야 해서, 스타일컴포넌트한테 **css문자열로 들어갈거야~** 라는 메서드 넣어줘야함.

> 반환값을 jsx로 중괄호 설정해서 마무리.

```jsx
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};
```

<br>

## 3. 변수 설정

- 기존의 scss에서 사용한 변수이다.
- 이걸 이제, 스컴으로 만들 것.

```
// 기존 변수
$tag-color: #d7fa00;
$gray: rgb(160, 160, 160);
```

### const 변수로 설정하기

```jsx
export const tag_color = "#d7fa00";
export const gray = "rgb(160,160,160)";
```

<br>

# scss & styled-components 사용하기

## 1. 외부 스타일 함수 `import사용`

```jsx
const StyledHeader = styled.header`

  ${flexMixin(undefined, "space-between", "center", undefined, undefined)}

    li {
      ${font("16px", 400)}
      list-style: none;
      color: ${tag_color};
    border: 1px solid ${tag_color};
    }
  }
`;
```

- 외부 자바스크립트 파일에서 만들었던, `변수+믹스드인`을 `import해서` 사용하자.
- 이때, 매개변수가 비어있는 곳에는 꼭 "`undefined`" 설정해서 인자 갯수 맞춰야 한다.
- 변수 설정시 소괄호로 감싸서 설정하기

<br>

## 2. 스타일컴포넌트 내부에서 `중첩구조` 사용 가능

```jsx
const StyledHeader = styled.header`
  ${flexMixin(undefined, "space-between", "center", undefined, undefined)}
  ul {
    ${flexMixin(undefined, "center", "center", "20px", undefined)}
    li {
      ${font("16px", 400)}
      list-style: none;
    }
  }
`;
```

<br>

### 완료한 scss파일 제거

- 믹스드인과 변수는 -> 외부 js파일로 생성함
- scss스타일은 , 사용하는 컴포넌트 안에서 스타일 생성함
- 그래서 scss파일은 이제 필요없음 ! 삭제삭제

<br>
<br>

## 3. 전역 스타일 생성

```jsx
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
```

- 전체 스타일 리셋하는 코드를 글로벌 스타일로 분리 시키고
- 가장 최상위 컴포넌트로 끌러올리기

```jsx
function App() {
  return (
    <>
      <GlobalStyled></GlobalStyled>
      <main>
        <Header />
        <StyledSection></StyledSection>
      </main>
    </>
  );
}
```
