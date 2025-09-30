# Context API를 사용하여 OZ카페 코드 개선하기

## 과제 정보

- 주제 : Context API를 사용하여 OZ카페 코드 개선하기

<br />
<br />

## 구현하기

### 1. 전역상태 관리

`cartContext.jsx , menuContext.jsx` 생성하기

<br />
<br />

### 2 .전역상태 Provider 위치는 넣어주기

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MenuProvider>
  </BrowserRouter>
);
```

- 전역상태 위치는 상관없고, App.jsx만 감싸면 된다.

<br />
<br />

### 3. cartContext에서 setCart 다루는 함수 만들기

#### 3-1. 장바구니에 추가

```jsx
const addToCart = () => {
  setCart([...cart, { quantity, options, id: modalMenu.id }]);
};
```

1. cart에 추가하는 메서드를 `Provider의` 내부 함수로 적용 시키기
2. 외부에서 값을 받아와야 하는`quantity, options, id` 3인방
3. `Provider에서` 값 받아올 수 있도록 연결 시켜줘야한다.

```jsx
<cartContext.Provider value={{ cart, setCart, addToCart }}>
```

4. 연결시키고, 외부에서 `addToCart를` 사용하는 곳에서 프로퍼티 값을 넘겨 받아야 한다.

- id 자리의 값을 `modalMenu.id` 로 프로퍼티 값으로 넘겨주기.

```jsx
<button
  onClick={() => {
    addToCart(options, quantity, modalMenu.id);
    setModalOn(false);
  }}
>
  장바구니 넣기
</button>
```

5. `Provider` 내부의 `addToCart` 함수에서는 이제 3인방 값을 받아서, 장바구니에 추가하는 로직을 구현 하였다.

```jsx
const addToCart = (quantity, options, id) => {
  setCart([...cart, { quantity, options, id }]);
};
```

<br />
<br />

---

#### 3-2. 장바구니에서 삭제

```jsx
const removeFromCart = () => {
  setCart(cart.filter((el) => item.id !== el.id));
};
```

1. 삭제하는 로직을 그대로 복붙 진행 -> 여기서 아는 정보는 `cart,setCart`뿐! `item.id`값을 몰루
2. 이것 또한, `Provider로` 전달하고 props로 `id`값을 받아오자.
3. `removeFromCart` item.id로 id값 넘겨주기

```jsx
//Cart.jsx
<button
  onClick={() => {
    removeFromCart(item.id);
  }}
>
  삭제
</button>;

//cartProvider
const removeFromCart = (id) => {
  setCart(cart.filter((el) => id !== el.id));
};
```

   <br />
   <br />
