import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    // 찜추가,찜삭제하는 favoriteSlice 를 추가함
    favorite: favoriteSlice.reducer,
  },
});
