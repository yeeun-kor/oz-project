import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //포켓몬데이터
  const [pokemonDatas, setPokemonDatas] = useState([]);

  //151배열 생성
  const arrayNum = Array.from({ length: 151 }, (_, idx) => {
    return idx + 1;
  });

  //api비동기 처리
  useEffect(() => {
    //포켓몬 1마리 정보 얻어오기 --> Promise 반환합니다.
    const getPokemonData = (pokemonId) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        .then((res) => res.json())
        .then((data) => ({
          id: pokemonId,
          name: data.names.find((el) => el.language.name === "ko").name,
          description: data.flavor_text_entries.find(
            (el) => el.language.name === "ko",
          ).flavor_text,
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        }));
    };
    //arrayNum 넣는 작업 📍왜 map() 이지?
    const pokemonDatas = arrayNum.map((id) => getPokemonData(id));
    console.log(pokemonDatas);

    //Promise.all로 후 처리해서 json으로 변환
    Promise.all(pokemonDatas).then((pokemons) => {
      setPokemonDatas(pokemons);
    });
  }, []);

  return (
    <div className="flex-col gap-3 flex justify-center items-center text-center">
      <h1>포켓몬 프로젝트</h1>
      {pokemonDatas.map((pokemon) => (
        <ul key={pokemon.id}>
          <li>name : {pokemon.name}</li>
          <li>des : {pokemon.description}</li>
          <div className="flex justify-center">
            <img src={pokemon.front}></img>
            <img src={pokemon.back}></img>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default App;
