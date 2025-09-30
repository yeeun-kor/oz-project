import React, { memo } from "react";
import Product from "./Product";

const ProductsItem = memo(({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
});

export default ProductsItem;
