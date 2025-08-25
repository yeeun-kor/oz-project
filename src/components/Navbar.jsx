import { SlBasket, SlHeart } from "react-icons/sl";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex gap-4">
      <Link to={"/like"}>
        <SlHeart size={30}></SlHeart>
      </Link>
      <Link to={"/cart"}>
        <SlBasket size={30}></SlBasket>
      </Link>
    </div>
  );
}
``;
