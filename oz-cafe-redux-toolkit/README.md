# Redux & Redux Toolkit이란?

- [Redux \& Redux Toolkit이란?](#redux--redux-toolkit이란)
  - [Redux (라이브러리)](#redux-라이브러리)
      - [설치 방법](#설치-방법)
    - [Redux 데이터 흐름 - FLUX 패턴](#redux-데이터-흐름---flux-패턴)
  - [1. Action \& Dispatch](#1-action--dispatch)
    - [액션 객체](#액션-객체)
    - [액션 생성자](#액션-생성자)
  - [2. Reducer](#2-reducer)
    - [Reducer의 인자값](#reducer의-인자값)
    - [combineReducers](#combinereducers)
  - [3. Store](#3-store)
- [React - Redux 연결하기](#react---redux-연결하기)
  - [Redux-Thunk](#redux-thunk)
      - [출처](#출처)

<br/>
<br/>

## Redux (라이브러리)

- 가장 대표적인 전역 상태 관리 '라이브러리'
- 그래서 설치 필요

#### 설치 방법

```powershell
npm install redux react-redux
```

<br/>

### Redux 데이터 흐름 - FLUX 패턴

![플럭스패턴](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ZTe7dIoLlUFYFbML.png)

1. UI에서 상태변화가 필요한 이벤트가 발생
2. 상태를 어떻게 변화시킬지 (이벤트 어떻게 줄지 ) 정보가 담긴 `Action` 객체가 만들어진다.
3. `Action` 객체는 `Dispatch` 라는 함수로 `Reducer` 에게 전달한다.
4. `Reducer` 에서는 `Action` 객체를 해석하고, 그 값에 따라 `Store` 에 들어있는 전역상태의 값을 변경 시킨다.

<br/>
<br/>

> **Action**

여기서 액션은 `Action Creator`라고 생각하면 된다.
클릭 같은 이벤트가 발생했을 때 그 이벤트가 발생했음을 `Action` 정보를 담고 있는 **객체를 만들어내** `Dispatcher에` 전달하는 역할을 한다.
`Action` 객체의 `type` 을 구분해 미리 작성해둔 명령들을 수행한다.

```jsx
action 객체에
{type : "INCREMENT"} 구분지어서 명령어 설정이 가능하다.
```

> **Dispatcher**

<br/>

`Dispatcher는` 들어오는 `Action` **객체 정보를 받아** 실제로 어떤 행동을 할지 결정하는 곳이다.
흔히 쓰이는 표현으로 `Dispatcher는` **중앙 허브 역할**을 하고 있다고 한다.

> **Reducer** > <br/>

`Dispatcher` 에서는 넘긴 `Action` 객체 type 을 해석하여 직접적으로 상태를 변경 시킨다.
즉, `Store의` 상태를 변경시키는 역할을 한다.

> **Store** > <br/>

위에서 작업한 `Reducer` 의 작업공간 그리고 데이터+상태 값을 가지고 있다.
`Store를` `Dispatcher와` 연결해 `Store` 에 접근할 수 있도록 `callback` 명령을 제공할 수 있다.
또한 여기서 가지고 있는 상태에 View가 접근하고, 상태가 변경되면 View에서도 이를 반영한다.

> **View** > <br/>

`Store에서` 어떤 이벤트(변경 등)가 발생하면 `View는` 변경된 점을 가져오고, 이를 바탕으로 화면을 다시 랜더링한다.

<br />

## 1. Action & Dispatch

상태를 어떻게 변화시킬 것인지에 대한 내용이 담겨있는 '객체'

### 액션 객체

```jsx
{
  type: "INCREMENT";
  payload: 5;
}

dispatch({
  type: "INCREMENT";
  payload: 5;
})
```

- 특정 숫자 값을 증가 하는 액션객체 `payload: 5`
- Dispatch로 객체값을 전달할 때, 위와 같이 객체를 그대로 넣어주면 된다.

<br />

### 액션 생성자

```jsx
const increment = (num)=>({
      type:"INCREMENT"
      payload:num
})

dispatch(increment(3))
```

- 증가하려는 숫자값을 유동적으로 받고 싶다면 , 액션 생성자를 활용 하자.
- **유동적으로 동적**으로 값을 받아서 Dispatch로 넘겨줄 수 있다.

<br />

## 2. Reducer

리턴하는 값이 **새로운 상태로** 바뀌게 되는 함수
-> 새로운 상태로 바뀐 값이 곧 `store`(전역)의 값과 데이터⭐️
`Reducer` 함수는 두개의 인자를 받는 함수이다.

### Reducer의 인자값

```jsx
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return +action.payload;
  }
};
```

- state : store가 보유하고 있는 전역상태의 값
- action : diapatch 로 전달받은 인자값
  <br />

### combineReducers

만약 다뤄야할 Reducer 가 여러개라면 ?
`combineReducers` 함수로 묶어서 하나로 전역상태관리소를 만들 수 있다.

```jsx
const rootReducer = combineReducers({
      counterReducer, cartReducer, menuReducer,...
})

```

> 이때, `combineReducers`는 객체를 인자로 받와야한다!
> 안그러면 undefined 나옴
> <br />

## 3. Store

`Redux의` 전역 상태 저장소
`createStore` 함수에 `Reducer` 를 전달해서 생성

```jsx
const store = createStore(rootReducer); //여러개의 reducer를 합친 변수
```

---

# React - Redux 연결하기

1. App과 전역 상태 저장소 연결하기 -> `<Provider store={store}>`
2. 상태 저장소에서 상태 꺼내와서 사용하기 -> `useSelector()`
3. dispatch함수 만들어서 사용하기 -> `useDispatch()`

## Redux-Thunk

Redux에서 비동기 처리를 하게 해주는 미들웨어
액션 객체 생성 대신, 액션 함수를 사용하게 해준다.

> 액션 객체 : 객체에서 생성한 ' 문자열 '을 해석하여 로직 수행
> 액션 함수 : 여러줄의 함수를 묶어서 실행하게 해준다.

#### 출처

[FLUX패턴](https://medium.com/hcleedev/web-react-flux-%ED%8C%A8%ED%84%B4-88d6caa13b5b)
