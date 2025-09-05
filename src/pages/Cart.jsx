import CartItem from "../components/CartItem";

const Cart = ({ cartState }) => {
    // cartState에서 필요한 데이터와 함수들을 구조분해할당으로 가져와주세요
    // 장바구니 아이템들, 수량 업데이트 함수, 삭제 함수, 총 가격 계산 함수, 로딩 상태 등

    // 로딩 중일 때 적절한 메시지를 보여주세요

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* 장바구니가 비어있을 때와 아이템이 있을 때를 조건부 렌더링으로 처리해주세요 */}

                {/* 장바구니가 비어있는 경우 */}

                {/* 장바구니에 아이템이 있는 경우 */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* 장바구니 아이템들을 map 함수로 렌더링해주세요 */}
                    {/* 각 CartItem 컴포넌트에 필요한 props를 전달해주세요 */}

                    {/* 총 금액을 계산하여 표시해주세요 */}
                    <div className="p-6 bg-gray-50 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">총 금액:</span>
                            <span className="text-2xl font-bold text-blue-600">
                                {/* 총 가격을 천 단위 콤마와 함께 표시해주세요 */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
