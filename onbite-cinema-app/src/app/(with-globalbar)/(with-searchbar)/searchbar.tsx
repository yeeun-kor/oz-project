"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  const onSubmit = () => {
    if (search.trim()) router.push(`/search?q=${search}`);

    return;
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onSubmit={onSubmit}>검색</button>
      </div>
    </>
  );
}
