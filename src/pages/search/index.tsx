<<<<<<< HEAD
import GlobalSearchBar from "@/components/global-searchbar";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>검색어는 {q}</h1>
=======
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import MovieItem from "../components/movie-item";
import SearchBar from "../components/searchBar";

export default function Search() {
  const router = useRouter();
  const q = router.query.q as string;

  return (
    <div>
      {movies
        .filter((movie) => movie.title.includes(q))
        .map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
>>>>>>> master
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
<<<<<<< HEAD
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
=======
  return <SearchBar>{page}</SearchBar>;
>>>>>>> master
};
