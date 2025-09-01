import { useSelector } from "react-redux";
import { selectPokemonByFavorite } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Favorites() {
  //내가 선택한 찜목록의 포켓몬들은 이미 slicer에 저장되어 있음
  //저장되어 있는 찜애들 데리고 오는 selector생성하고 갖고와
  //반환값은 참,거짓임

  const favoriteList = useSelector(selectPokemonByFavorite);
  console.log(favoriteList);

  return (
    <>
      {favoriteList.map((el) => (
        <Card pokemonData={el} key={el.id}></Card>
      ))}
    </>
  );
}
