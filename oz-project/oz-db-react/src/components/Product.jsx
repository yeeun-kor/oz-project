import React, { memo } from "react";
import LazyImage from "./LazyImage";

const Product = memo(({ product, addToCart }) => {
  const { id, name, image_url, price, brands, categories } = product;

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="aspect-w-1 aspect-h-1">
        <LazyImage
          src={image_url}
          alt={name}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mb-2 text-sm text-gray-600">
          {brands?.name} • {categories?.name}
        </p>
        <p className="mb-4 text-xl font-bold text-blue-600">
          {price.toLocaleString()}원
        </p>
        <button
          type="button"
          onClick={() => addToCart(id)}
          className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          장바구니에 추가
        </button>
      </div>
    </div>
  );
});

export default Product;
