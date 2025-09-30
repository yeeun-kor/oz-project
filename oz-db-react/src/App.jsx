import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./layouts/Layout";
import useCart from "./hooks/useCart";
import Home from "./pages/Home";
import LoadingPage from "./pages/Loading";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
  const cartState = useCart();

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path="/"
            element={<Layout itemCount={cartState.getTotalItems()} />}
          >
            <Route index element={<Home addToCart={cartState.addToCart} />} />
            <Route path="/cart" element={<Cart cartState={cartState} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
