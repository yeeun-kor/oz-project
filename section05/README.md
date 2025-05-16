# React 실습 ( 2025.05.16)

## EsLint 설정

- rules배열 끝나는 지점에 옵션 추가하기
-       "no-unused-vars":"off",
      "react/prop-types":"off"

## React App 컴포넌트

- App.jsx 파일에서 App함수
- 자바스크립틔 App함수는 `<html>`코드를 반환하도록 설정할 수 있음
- 이런 `<html>`코드를 반환하는 함수들을 👉 컴포넌트 라고 부름
- 보통 컴포넌트 이름 부를때, 자바스크립트 함수 이름을 따옴

### App컴포넌트의 자식 컴포넌트

- React는 랜더링시 App.jsx를 root로 하여 뿌리로 , 즉 부모 컴포넌트이기 때문에
- 우리가 다른 컴포넌트를 생성하여 화면에 랜더링을 하려면 부모 컴포넌트 안에 종속되어야 한다.
- 즉) `부모`컴포넌트인 App컴포넌트 하위에 `자식`컴포넌트로 위치 해야한다는 점이다.

### 📢main.jsx에서 App컴포넌트 이외에 다른 컴포넌트 추가 못할까?

- main컴포넌트를 확인해보면
  `createRoot(document.getElementById('root')).render(
    <App />
) `
- 이런식으로 App컴포넌트가 호출되게 되는데, App컴포넌트 이외에 다른 컴포넌트 , 예를들어 아래 예시코드 처럼 `Header` 컴포넌트도 추가해도 될까?? 궁금해졌다.
- `createRoot(document.getElementById('root')).render(
    <App />
    <Header/>
) `

#### 답변: NO!

- React에서 `createRoot().render()`는 단일 루트 요소만 렌더링할 수 있다.
- 즉, `render()` 메서드는 하나의 JSX 요소만 받아서 `id="root"`에 렌더링함.

#### why 단일 루트 요소만 랜더링 가능?

- 단일 루트 요소가 있어야 `DOM 트리` 와의 매핑이 명확해짐
- 여러 요소를 랜더링 하고싶으면 👉 하나의 부모 요소로 감싸야 React가 이를 하나의 트리로 처리할 수 있음.

#### 결론 : React는 계층구조를 가져야 한다.

- 최상위 컴포넌트 `App`컴포넌트의 하위컴포넌트로 랜더링 하자.
- React의 컴포넌트 계층 구조를 유지하며, App이 모든 UI를 관리하는 중심 역할을 해야한다.
- 코드가 깔끔하고, 다른 컴포넌트를 추가하거나 관리하기 쉬움.

---
