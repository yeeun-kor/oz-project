import SearchBar from "./components/searchBar";
import { ReactNode } from "react";

export default function Home() {
  return <div></div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
