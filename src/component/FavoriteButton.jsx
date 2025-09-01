import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/pokemonSlice";

//좋아요 되어있는지 확인하기 위한, 포켓몬 id필요
export default function FavoriteButton({ pokemonId }) {
  //좋아요 되어있는지, 아닌지 확인하는 some 함수 사용 -> 리턴값이 참 거짓으로 받아옴
  //근데 여기서 some로직을 모르겠네 ;
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );

  //버튼 토글 버튼 만들기 위해 상태 설정
  const dispatch = useDispatch();
  return (
    //좋아요된 상태이면 풀하트, 아니면 비어있는 하트
    //버튼 클릭시 디테일 페이지로 넘어가지 않도록 stop이벤트 처리 진행
    <button
      onClick={(e) => {
        e.stopPropagation();
        //dispatch진행
        //만약 찜목록에 들어있다면? remove를 actions에서 호출하고, 삭제할 ID번호 넘겨주기
        //이때, 포켓몬 아이디는 전체 데이터값을 가지고 가야해서 {} 객체로 가져가기
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeToFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
