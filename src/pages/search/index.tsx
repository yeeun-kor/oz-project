import { useRouter } from "next/router";
import SearchBar from "../components/searchBar";
import { ReactNode } from "react";
export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  return <h1>검색결과 : {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchBar>{page}</SearchBar>;
};
