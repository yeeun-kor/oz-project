import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import headerStyle from "./assets/styles/header.module.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function Layout() {
  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <div className={headerStyle.headerLinks}>
          <Link to="/home" className="header-link">
            Home
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
          <Link to="/contact" className="header-link">
            Contact
          </Link>
          <Link to={`/${Math.random()}`} className="header-link">
            Random
          </Link>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  return (
    <>
      <Layout></Layout>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />{" "}
          {/* 기본 경로(/)에서 HomePage 렌더링 */}
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
