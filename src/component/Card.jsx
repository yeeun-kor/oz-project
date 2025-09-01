import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function Card({ pokemonData }) {
  //클릭했을 때, 상세페이지 /detail/:pokemonId 로 이동 시키겠다.
  const navigate = useNavigate();

  //이미지 로딩중 상태 설정
  const [isImgLoad, setIsImgLoad] = useState(true);
  return (
    <containter
      className="bg-white
      w-40 border items-center flex flex-col rounded-md gap-5 py-3 transition duration-700 ease-in-out hover:scale-110 hover:duration-700 hover:drop-shadow-lg border-r-4 border-black
      border-b-4 "
      onClick={() => navigate(`/detail/${pokemonData.id}`)}
    >
      {/* 로딩중 div추가 */}
      {isImgLoad ? <div className="w-32 text-center">로딩중...</div> : null}
      <img
        src={pokemonData.front}
        alt=""
        className={`w-32 ${isImgLoad ? "hidden" : "block"}`}
        onLoad={() => setIsImgLoad(false)}
      />
      <div className="flex gap-1">
        {pokemonData.name}

        <FavoriteButton pokemonId={pokemonData.id}></FavoriteButton>
      </div>
    </containter>
  );
}
