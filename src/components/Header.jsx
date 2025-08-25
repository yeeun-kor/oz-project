import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <div className="flex justify-between py-5 px-5 items-center">
      <Link to={"/"}>
        <h1 className="text-2xl">LOGO</h1>
      </Link>
      <Searchbar></Searchbar>
      <Navbar></Navbar>
    </div>
  );
}
