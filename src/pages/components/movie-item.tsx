import type { MovieData } from "@/type";
import Link from "next/link";

import style from "./movie-item.module.css";
export default function MovieItem({
  id,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl}></img>
    </Link>
  );
}
