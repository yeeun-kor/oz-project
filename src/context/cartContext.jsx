import { createContext, useContext, useState } from "react";

//context생성
const cartContext = createContext();

//Provider설정
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //장바구니에 담는 상태변화 함수 생성
  const addToCart = (quantity, options, id) => {
    setCart([...cart, { quantity, options, id }]);
  };

  //장바구니 삭제하는 상태변화 함수 생성
  const removeFromCart = (id) => {
    setCart(cart.filter((el) => id !== el.id));
  };
  return (
    <>
      <cartContext.Provider
        value={{ cart, setCart, addToCart, removeFromCart }}
      >
        {children}
      </cartContext.Provider>
      ;
    </>
  );
}

//useCart설정
export function useCart() {
  return useContext(cartContext);
}
