import Link from "next/link";
import style from "./global-layout.module.css";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={style.headerLogo}>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main className={style.mainBg}>{children}</main>
      <footer>제작자 @연의</footer>
    </>
  );
}
