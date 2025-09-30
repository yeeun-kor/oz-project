import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import List from "./components/List";
import useFetch from "./hooks/useFetch";

const weatherURL = (lat, lon, apiId) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric&lang=kr&cnt=40`;
const apiId = "6f66f1540d1d673da70b3c9f47d6c327";

function App() {
  //현재 위치
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  //fetch받아오기
  // data 객체에 요청에 대한 응답값들이 다 들어있음.
  const { data } = useFetch(
    location.lat && location.lon
      ? weatherURL(location.lat, location.lon, apiId)
      : null
  );

  return (
    <>
      <h2>📍현재 나의 위치📍 </h2>
      <Header data={data}></Header>
      <List data={data}></List>
    </>
  );
}

export default App;
