//1. 액션객체 생성
//1-1. 장바구니 생성 액션
//type ADD 명령어 설정

import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

//payload 제공되는 내역은 객체로 props 전달 받기
export const addToCart = (options, quantity, id) => {
  return {
    type: "ADD",
    payload: { options, quantity, id },
  };
};

//1-2. 삭제하는 액션 생성
export const removeFromCart = (id) => {
  return { type: "REMOVE", payload: { id } };
};

//2. Reducer 작성 (state,action) 인자받기
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};
const menuReducer = (state = data.menu) => {
  return state;
};

//3. store만들기 combineReducers는 무조건 객체로 받아와야함 !!!!!
const rootReducer = combineReducers({ cartReducer, menuReducer });
export const store = legacy_createStore(rootReducer);
