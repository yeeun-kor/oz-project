<!-- PR 제목 예시:
[missionX] X단계 미션 구현 - 000/0팀
pr 템플릿은 어떻게 활용하는진 알겠는데,
issue는 언제 사용하는지,
issue템플릿은 협업때 사용하는건지 궁금합니다

어떤상황에서 Pr이랑 이슈를 작성하는지 헷갈립니다!
-->

# React 포켓몬 도감 만들기

## 구현 사항 < Favorit 목록 >

### 1. 전역상태 추가

내가 찜하기를 눌렀던 아이템의 전역 상태 저장소 만들기!

- `createSlice()`로 만들기
- 상태 관리는 객체타입으로 세팅함

  ```jsx
  export const favoriteSlice = createSlice({
    name: favorite,
    initialState: [],
    reducers: {
      addToFavorite() {},
      removeFromFavorite() {},
    },
  });
  ```

#### 1-1. reducer `addToFavorite` 추가

좋아요 버튼 클릭시, `state`(초기 배열상태) 에 추가되는 로직을 구현 할 것이다.

1. `state.push` 하여 좋아요한 데이터배열을 통째로 넣기
2. 이때, `state.push `의 action의 payload값에서 pokemonId값을 넣기.
3. 그러면 해당 배열에선 **포켓몬의 ID값** 만 들어갈것이다.

- [1,3,4,5,] 이런식으로

#### 1-2. reducer `removeFromFavorite` 삭제

삭제하기 위해선 번호가 인덱스에서 몇번째인지 알아야 한다.

**배열내에 특정한 요소를 삭제하려면,**
몇번째 요소인지! 그 번지수를 알아야함.

그리고 그 부분만 ** 똑! 떼서 버리려면** `slice` 함수를 사용 해야한다.
`Slice` 함수를 사용하기 위해선, idx번호를 알아야함.

```jsx
const idx = state.indexOf(action.payload.pokemonId);
if (idx !== -1) state.splice(idx, 1);
```

1. `state`(data배열)에서 indexOf로 data의 포켓몬 아이디가 몇번째인지 확인
2. 만약, pokemonId가 배열에서 3번째인 경우 const idx = 3이다.
3. 그래서 idx 가 -1이 아닌경우 (일치하는 값이 있다!) state에서 splice 하여 선택된 포켓몬Id배열만 쏙! 빼서 원본 배열을 제거해주자.

## 어려웠던 점

### action.payload

slice에서 생성한 action의 payload개념이 너무나도 헷갈렸다.
여기서 다시 짚고 넘어가고 싶어서 , AI의 도움을 받아서 학습을 진행 하였다.
우리가 설정한 액션을 호출하면 어떤 값이 넘어올지 확인해보자.

```jsx
dispatch(addToFavorite({ pokemonId: 3 }));
//데이터 배열중 하나라서 객체요소로 감싸줘야함.
```

- 우리가 이렇게 `addToFavorite() `에 찜으로 선택한 Id값을 넘기게 되면,
- `reducer` 내부에서 `action.payload` 는 {`pokemonId` : 25} 가 된다.
- 구조분해 할당으로 `pokemonId` 숫자를 꺼내오게 된다.

만약 삭제로직이라면 ?

```jsx
만약 배열이 [1,4,25]이고 payload가 { pokemonId: 25 }라면,
state.indexOf(25) → 2가 됩니다.
```

## 구현 이미지

![alt text](좋아요포켓몬.gif)
