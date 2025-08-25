import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="min-h-100">
      <Header></Header>
      <main className="px-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
