import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickBtn = () => {
    router.push("/test");
  };
  return (
    <>
      <Link href={"/movie"}>movie</Link>
      <br />
      <Link href={"/search"}>서칭페이지</Link>
      <br />
      <Link href={"/"}>홈페이지</Link>
      <header>
        <button onClick={onClickBtn}>/test페이지이동</button>
      </header>
      <Component {...pageProps} />
    </>
  );
}
