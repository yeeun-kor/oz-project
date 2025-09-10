import React from "react";
import LazyImage from "./LazyImage";

const CartItem = React.memo(({ item, updateCartQuantity, removeFromCart }) => {
  return (
    <div className="flex items-center p-6 border-b last:border-b-0">
      <LazyImage
        src={item.imageUrl}
        alt={item.name}
        className="object-cover w-20 h-20 rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="font-bold text-blue-600">
          {(item.price || 0).toLocaleString()}원
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400"
        >
          -
        </button>
        <span className="w-12 text-center">{item.quantity}</span>
        <button
          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          삭제
        </button>
      </div>
    </div>
  );
});

export default CartItem;
