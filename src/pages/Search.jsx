import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Search() {
  //검색어 전체
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  //정규식패턴으로 검색어 변환
  const reg = getRegExp(param);
  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);
  console.log(pokemon.map((el) => el.name));
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemonData={el}></Card>
      ))}
    </>
  );
}
