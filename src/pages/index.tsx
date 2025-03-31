<<<<<<< HEAD
import GlobalSearchBar from "@/components/global-searchbar";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1>메인페이지</h1>
    </>
=======
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import SearchBar from "./components/searchBar";
import MovieItem from "./components/movie-item";
import style from "./index.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.movie_list}>
          {" "}
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.movie_list}>
          {" "}
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
>>>>>>> master
  );
}

Home.getLayout = (page: ReactNode) => {
<<<<<<< HEAD
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
=======
  return <SearchBar>{page}</SearchBar>;
>>>>>>> master
};
