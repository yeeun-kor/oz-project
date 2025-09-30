import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonSlice } from "../RTK/pokemonSlice";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";

export default function Detail() {
  //주소창에서 넘어온 id값 받아오기
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  //RTK에서 imgFrong타입 받아오기
  const imgType = useSelector((state) => state.pokemon.defaultImgType);
  const data = useSelector(selectPokemonById(Number(pokemonId)));
  //RTK값이 "front"이면 data.fron값이고, 만약 "front"가 아니면 data.back 으로
  const img =
    imgType === "front" ? data.front : "back" ? data.back : data.front;

  //이미지 클릭시 앞,뒤 토글이 되도록 상태 관리
  //reducer호출시 actions 꼭 불러올 것

  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-8 px-16 rounded-xl bg-white ">
      <div className="text-2xl flex gap-2 items-start">
        {data.name}
        <FavoriteButton pokemonId={data.id}></FavoriteButton>
      </div>
      <div className="whitespace-pre-wrap text-center">{data.description}</div>

      <img
        src={img}
        alt=""
        className={`w-48 transition-transform duration-500 img-flip ${
          imgType === "back" ? "rotate-y-180" : ""
        }`}
        onClick={() => {
          dispatch(pokemonSlice.actions.toggleImage());
        }}
      />
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          className="border p-2 rounded-lg bg-slate-300"
          onClick={() => setIsSoundPlaying(!isSoundPlaying)}
        >
          울음소리
        </button>

        <audio
          className={isSoundPlaying ? "invisible" : "visible"}
          src={data.sound}
          controls
        ></audio>
      </div>
    </div>
  );
}
