import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";
import useCart from "./hooks/useCart";
import Home from "./pages/Home";

// Cart 컴포넌트를 지연 로딩으로 설정해주세요
// lazy() 함수를 사용하여 최적화를 구현해보세요

// 라우터를 이용하여 Home과 Cart를 연결해주세요
function App() {
    // 장바구니 상태와 관련 함수들을 커스텀 훅에서 가져와주세요
    // 각 컴포넌트에 필요한 props를 분석하고 전달해주세요
    
    return (
        
        
            // 공통 레이아웃 컴포넌트를 사용해주세요
            
                // 지연 로딩되는 컴포넌트들을 위한 로딩 처리를 해주세요
                
                    // 라우트들을 정의해주세요
                    // "/" 경로: Home 컴포넌트
                    // "/cart" 경로: Cart 컴포넌트
                    
    );
}

export default App;