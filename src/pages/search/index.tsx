import GlobalSearchBar from "@/components/global-searchbar";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h1>검색어는 {q}</h1>
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
};
