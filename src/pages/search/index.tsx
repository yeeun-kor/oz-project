import GlobalSearchBar from "@/components/global-searchbar";
import fetchMovies from "@/lib/fetch-movies";
import MovieItem from "../components/movie-item";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import { ReactNode, use, useEffect, useState } from "react";
import { MovieData } from "@/type";
import { useRouter } from "next/router";
// SSR방식
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   const movies = await fetchMovies(q as string);

//   return { props: { movies } };
// };

// SSG방식 -> 동적페이지
export default function Search() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const { q } = router.query;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };
  useEffect(() => {
    if (q) {
      fetchMovies();
    }
  }, [q]);
}

Search.getLayout = (page: ReactNode) => {
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
};
