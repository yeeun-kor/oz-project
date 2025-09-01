import { useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { fetchAllDataOfPokemonById } from "./RTK/thunk";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDataOfPokemonById(30));
  }, []);

  //검색어 입력시 바로 이동하게끔 , 쿼리스트링으로 이동하게끔 설정
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className=" flex gap-3 justify-center">
        <Link to={"/"}>메인페이지</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="포켓몬검색"
            className="border-b border-[darkgrey] px-2 w-32 "
            //검색어 입력하면 바로 url이동 하도록
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          />
          <FaMagnifyingGlass />
        </div>
      </nav>
      <main className="flex gap-3 flex-wrap justify-center pt-5">
        <Routes>
          <Route path={"/"} element={<Main></Main>}></Route>
          <Route
            path={"/detail/:pokemonId"}
            element={<Detail></Detail>}
          ></Route>
          <Route path={"/search"} element={<Search></Search>}></Route>
          <Route path={"/favorite"} element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
