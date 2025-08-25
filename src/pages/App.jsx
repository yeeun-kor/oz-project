import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import LikeList from "../components/LikeList";
import Home from "./Home";
import Layout from "./Layout";
import Search from "./Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="like" element={<LikeList></LikeList>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
        </Route>
      </Routes>
    </>
  );    
}

export default App;
