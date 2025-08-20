import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null); //api에서 응답받은 데이터 =json객체

  useEffect(() => {
    if (!url) return; //url없으면 실행노우
    fetch(url) //fetch시작
      .then((res) => {
        if (!res.ok) throw new Error("API요청 실패"); //응답없으면 요청 실패
        return res.json();
      })
      .then((json) => setData(json)); //성공하면 setData로 응답값 초기화
  }, [url]);
  return { data }; //응답 json객체 보내버렷
}
