import styled from "styled-components";
import WeatherItem from "./WeatherItem";
const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  border: solid 1px white;
  flex-wrap: wrap;
  gap: 10px;
`;

export default function List({ data }) {
  //40개의 시간별정보를 -> 5일로 묶어야함.
  //이때 타임스탬프 일자가 겹치는건 제외 해야함 filter메서드 사용
  const get5Day = (list) => {
    const dates = []; //각 날짜를 담아둘 빈배열 생성
    return list.filter((item) => {
      const dateStr = new Date(item.dt * 1000).toLocaleDateString();
      //list의 배열요소들의 date값을 하나씩 순회하면서 날짜타입으로 변환 시킬 것
      //이제 비교하기
      if (dates.includes(dateStr)) return false; //날짜가 겹친다면 false로 빼기
      dates.push(dateStr); //없으면 배열에 추가하기
      return true;
    });
  };

  const filterdDates = data ? get5Day(data.list) : [];

  return (
    <>
      <h2>카드리스트</h2>
      <StyledSection>
        {filterdDates.map((item) => (
          <WeatherItem key={item.dt} item={item}></WeatherItem>
        ))}
      </StyledSection>
    </>
  );
}
