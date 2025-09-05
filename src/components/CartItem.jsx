import LazyImage from "./LazyImage";

// 장바구니 아이템에 필요한 정보들을 화면에 표시해주세요
// 이미지 지연로딩 컴포넌트를 사용하여 성능을 최적화해보세요
// 수량 조절과 삭제 기능을 구현해주세요
const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
    return (
        <div className="flex items-center p-6 border-b last:border-b-0">
            {/* 상품 이미지를 지연로딩으로 표시해주세요 */}
            {/* LazyImage 컴포넌트에 필요한 props를 전달해주세요 */}

            <div className="flex-1 ml-4">
                {/* 상품명을 표시해주세요 (옵셔널 체이닝 사용) */}
                {/* 상품 가격을 천 단위 콤마와 함께 표시해주세요 */}
            </div>

            <div className="flex items-center space-x-2">
                {/* 수량 감소 버튼을 만들어주세요 */}
                <button className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400">-</button>

                {/* 현재 수량을 표시해주세요 */}

                {/* 수량 증가 버튼을 만들어주세요 */}
                <button className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400">+</button>

                {/* 삭제 버튼을 만들어주세요 */}
                <button className="ml-4 text-red-500 hover:text-red-700">삭제</button>
            </div>
        </div>
    );
};

export default CartItem;
