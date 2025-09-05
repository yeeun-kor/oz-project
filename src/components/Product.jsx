import React, { memo } from "react";
import LazyImage from "./LazyImage";

// React의 최적화 기법을 사용해서 불필요한 리렌더링을 방지해보세요
// product 객체에서 필요한 데이터들을 구조분해할당으로 추출해주세요
// 가격을 사용자 친화적으로 표시하는 방법을 찾아보세요 (천 단위 구분)
// 이미지 최적화를 위해 지연 로딩 컴포넌트를 사용해주세요
const Product = ({ product, addToCart }) => {
    // product 객체에서 필요한 속성들을 추출해주세요

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-1 aspect-h-1">{/* 이미지를 지연 로딩으로 표시해주세요 */}</div>
            <div className="p-4">
                {/* 상품명을 표시해주세요 */}

                {/* 브랜드와 카테고리를 표시해주세요 (옵셔널 체이닝 사용) */}

                {/* 가격을 천 단위 콤마와 함께 표시해주세요 */}

                {/* 장바구니 추가 버튼을 만들고 클릭 이벤트를 처리해주세요 */}
                <button
                    type="button"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                    장바구니에 추가
                </button>
            </div>
        </div>
    );
};

// 컴포넌트를 최적화하여 내보내기해주세요

export default Product;
