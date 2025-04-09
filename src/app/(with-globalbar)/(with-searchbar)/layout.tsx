import Searchbar from "./searchbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Searchbar />
        {children}
      </div>
    </>
  );
}
