import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className="flex  items-center gap-4 border-2 px-2 rounded-lg">
      <Link to={"/search"}>
        <SlMagnifier size={25}></SlMagnifier>
      </Link>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="검색어 입력"
        className="w-[372px] h-[56px] border-none rounded-lg"
      />
    </div>
  );
}
