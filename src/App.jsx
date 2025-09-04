import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";
import useCart from "./hooks/useCart";
import Home from "./pages/Home";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
    const cartState = useCart();

    return (
        <Router>
            <Layout cartState={cartState}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home addToCart={cartState.addToCart} />} />
                        <Route path="/cart" element={<Cart cartState={cartState} />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
