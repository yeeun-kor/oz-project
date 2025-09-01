//pokemonId값에 맞는 pokemon 의 상태를 가져오기

import { createSelector } from "@reduxjs/toolkit";
export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    //filter를 돌려서 일치하는 값을 뱉어내기 match로
    // 여기서 pokemon이 뭐더라 ?
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );
