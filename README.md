# 🌤️oz-style-weather 🌤️

Styled-Components를 이용한 날씨 어플리케이션 제작 (난이도 : ⭐️⭐️)

## 목차

- [🌤️oz-style-weather 🌤️](#️oz-style-weather-️)
  - [목차](#목차)
  - [5일치 데이터 필터링 하기](#5일치-데이터-필터링-하기)

---

#📍 작업순서 📍

1. `사용자 현재 위치` (위도,경도) 받아오기
2. openAPI의 `위도경도appId` 넣어서 확인하기
3. 1+2 조합해서 사용자위치 `city에` 저장해서 랜더링
4. 5일치 날짜 필터링해서 랜더링 하기
   (OpenWeather /forecast API는 3시간 단위 예보를 반환함!
   하루 대표 데이터를 날짜별로 그룹화해서 5개만 뽑아야함 )

---

## 5일치 데이터 필터링 하기

1. 먼저 fetch에서 넘어온 `list40`개 값을 받아온다.
2. 필터링이 끝내고 들어갈 새로운 배열 `dates만들기`
3. 필터링이 끝나고 return값은 인자로 받은 `list40개`를 필터링한 결과를 보낼 것

```jsx
return list.filter((item) => {
  const dateStr = new Date(item.dt * 1000).toLocaleDateString();
  if (dates.includes(dateStr)) return false;
  dates.push(dateStr);
  return true;
});
```

- 40개를 하나씩 돌면서 dt프로퍼티를 yyyy-mm-dd타입으로 먼저 변환
  - `\*1000 `하는 이유는 , 이거 안하면 1970년으로 나옴
- 바꾼 `dateStr`값이 dates에 **포함이 된다면 = 중복이라면 ?** = `return false `로 중복 제거 한다.
- 중복값이 아니라면, 화면에 랜더링 하게끔 dates배열에 담아준다.
