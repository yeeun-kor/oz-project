import useProducts from "../hooks/useProducts";
import ProductsItem from "../components/ProductItem";

// 상품 데이터를 가져오기 위한 커스텀 훅을 사용해주세요
const Home = ({ addToCart }) => {
    // useProducts 훅에서 필요한 데이터들을 구조분해할당으로 가져와주세요

    // 로딩 상태일 때 사용자에게 적절한 메시지를 보여주세요

    // 상품 목록을 렌더링하고 필요한 props를 전달해주세요
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">상품 목록</h1>
            {/* ProductsItem 컴포넌트에 필요한 데이터를 props로 전달해주세요 */}
        </div>
    );
};

export default Home;
