import useProducts from "../hooks/useProducts";
import ProductsItem from "../components/ProductItem";

const Home = ({ addToCart }) => {
    const { products, productLoading } = useProducts();

    if (productLoading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">상품 목록</h1>
            <ProductsItem products={products} addToCart={addToCart} />
        </div>
    );
};

export default Home;
