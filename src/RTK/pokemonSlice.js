import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDataOfPokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  //비동기 작업이라 로딩과 에러 필요함.
  initialState: { data: [], loading: true, defaultImgType: "front" },

  //동기적 상태변경
  reducers: {
    toggleImage: (state) => {
      state.defaultImgType =
        state.defaultImgType === "front" ? "back" : "front";
    },
  },

  //비동기적 상태변경
  extraReducers: (builder) => {
    // 비동기 상태에 따라 상태값 변경
    builder
      // 처리 fulfilled 일 때
      .addCase(fetchAllDataOfPokemonById.fulfilled, (state, action) => {
        // 상태의 data([]) 값을 변경하겠다.
        // action.payload = Promise.all로 json으로 바뀐 151개의 객체
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllDataOfPokemonById.rejected, (state) => {
        state.loading = false;
      });
  },
});

//찜목록 저장소
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  //찜목록 추가하는 리듀서 & 찜에서 삭제하는 리듀서
  reducers: {
    //찜 추가 :원래 상태에 들어오는 값(action.payload)추가
    //전체 포켓몬 데이터값이 아닌, 선택한 포켓몬 ID값의 데이터를 배열에 넣겠다.
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },

    //찜 삭제 : 배열에서 특정 값을 제거하려면 splice사용해야함
    //splice배열 삭제 : index번호 특정하게 알아야함
    //index번호 찾는과정 시작 : indexOf로 내가 클릭한 아이템의 id값으로 번호 찾기 ( action.payload가 현재 클릭한 아이템 넘버)
    removeToFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      //indeOf의 반환값에서 -1은 제거할 요소가 없다는 뜻임
      //splice에서 삭제 하고픈 배열의 번째 + 어디까지 삭제할 것 인지 = 1
      if (index !== -1) state.splice(index, 1);
    },
  },
});
