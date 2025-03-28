import GlobalSearchBar from "@/components/global-searchbar";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1>메인페이지</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <GlobalSearchBar>{page}</GlobalSearchBar>;
};
