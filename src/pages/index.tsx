import SearchBar from "./components/searchBar";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return <div className={style.container}></div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
