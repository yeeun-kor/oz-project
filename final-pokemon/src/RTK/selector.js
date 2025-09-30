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

//찜목록 가져오는 셀렉터 만들기
export const selectPokemonByFavorite = createSelector(
  //전체 포켓몬 목록과 ,찜 목록 2가지 상태 데이터 가져오기
  (state) => state.pokemon.data,
  (state) => state.favorite,
  //두가지 상태 받아오고, 함수 작성
  (pokemon, favorite) => {
    //전체 포켓몬의 id값이 만약 favorite목록 안에 포함되어 있다면 ?
    // includes라면? 참으로 리턴
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
