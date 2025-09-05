import { Link } from "react-router-dom";

// 전체 페이지의 공통 레이아웃을 구성하는 컴포넌트입니다
// 네비게이션 바와 장바구니 아이콘을 포함합니다
const Layout = ({ children, cartState }) => {
    // 장바구니의 총 상품 개수를 가져와주세요

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 네비게이션 바를 만들어주세요 */}
            <nav className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* 홈으로 이동하는 로고/타이틀 링크를 만들어주세요 */}

                        <div className="flex items-center space-x-4">
                            {/* 장바구니 페이지로 이동하는 링크를 만들어주세요 */}
                            {/* 장바구니 아이콘과 상품 개수 표시를 구현해주세요 */}
                            <Link to="/cart" className="relative">
                                <div className="bg-blue-500 text-white p-2 rounded-full">🛒</div>
                                {/* 장바구니에 상품이 있을 때만 개수를 표시해주세요 */}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 페이지 컨텐츠가 렌더링될 영역 */}
            <main>{children}</main>
        </div>
    );
};

export default Layout;
