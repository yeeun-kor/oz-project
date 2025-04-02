import GlobalSearchBar from "@/components/global-searchbar";
import fetchMovies from "@/lib/fetch-movies";
import MovieItem from "../components/movie-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "..";
import { ReactNode } from "react";

export const gerServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const movies = await fetchMovies(q as string);

  return { props: { movies } };
};

export default function Search({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie}></MovieItem>
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
};
