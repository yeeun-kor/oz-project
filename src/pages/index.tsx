
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import SearchBar from "./components/searchBar";
import MovieItem from "./components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { InferGetServerSidePropsType } from "next";

//ssr설정
export const getServerSideProps =async()=>{
const [allMovies] = await Promise.all([fetchMovies()])
  return{props:{allMovies}}
}

export default function Home({allMovies}:InferGetServerSidePropsType<typeof getServerSideProps>) {
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
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>

  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchBar>{page}</SearchBar>;

};
