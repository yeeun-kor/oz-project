import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";
import useCart from "./hooks/useCart";
import Home from "./pages/Home";

const Cart = lazy(() => import("./pages/Cart"));
// 라우터를 이용하여 Home과 Cart를 연결해주세요
// Cart는 처음에 로딩될 필요가 없기 떄문에 여러분들이 배운 lazy를 이용해서 최적화를 해 주세요.
function App() {
    // 장바구니 상태와 관련 함수들을 커스텀 훅에서 가져옵니다
    // 가져온 장바구니 상태에서 어떤 부분을 넘겨줘야 하는지 생각하고 해당 컴포넌트에 넘겨주세요
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
