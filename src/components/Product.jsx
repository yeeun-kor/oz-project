import React, { memo } from "react";
import LazyImage from "./LazyImage";

const Product = memo(({ product, addToCart }) => {
    const { id, name, image_url, price, brands, categories } = product;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-1 aspect-h-1">
                <LazyImage src={image_url} alt={name} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    {brands?.name} • {categories?.name}
                </p>
                <p className="text-xl font-bold text-blue-600 mb-4">{price.toLocaleString()}원</p>
                <button
                    type="button"
                    onClick={() => addToCart(id)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                    장바구니에 추가
                </button>
            </div>
        </div>
    );
});

Product.displayName = "Product";

export default Product;
