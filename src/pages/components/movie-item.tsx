import type { MovieData } from "@/type";
import Link from "next/link";

import style from "./movie-item.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { Infer } from "next/dist/compiled/superstruct";
export const getStaticProps = async () => {
  const [allMovies] = await Promise.all([fetchMovies()]);
  return { props: { allMovies } };
};

export default function MovieItem(
  {
    id,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  }: MovieData,
  allMovies: Infer<typeof getStaticProps>
) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl}></img>
    </Link>
  );
}
