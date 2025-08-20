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
