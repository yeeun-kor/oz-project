import style from "./[id].module.css";
import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));
  if (!movie) {
    return {
      notFound: true,
    };
  }
  return { props: { movie } };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>로딩중...</div>;
  }
  if (!movie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }
  const {
    id,
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = movie;
  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {runtime} | {genres}
      </div>
      <div className={style.description}>{releaseDate}</div>
    </div>
  );
}
