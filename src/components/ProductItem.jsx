import React, { memo } from "react";
import Product from "./Product";

// 상위 컴포넌트에서 받은 데이터를 하위 컴포넌트에 전달하는 패턴을 구현해보세요
// React의 최적화 기법을 사용하여 성능을 개선해보세요
// 배열 데이터를 반복 렌더링하는 방법을 사용해보세요

const ProductsItem = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* products 배열을 순회하며 각 상품을 Product 컴포넌트로 렌더링해주세요 */}
            {/* 각 상품 데이터와 함수를 props로 전달해주세요 */}
            {/* key 속성을 잊지 마세요 */}
        </div>
    );
};

// 컴포넌트를 최적화하여 내보내기해주세요

export default ProductsItem;
