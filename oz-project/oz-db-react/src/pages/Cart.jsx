import CartItem from "../components/CartItem";

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <p className="text-xl text-gray-500 mb-4">장바구니가 비어있습니다</p>
    </div>
  );
};

const CartContainer = ({ children, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {children}
      <div className="p-6 bg-gray-50 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">총 금액:</span>
          <span className="text-2xl font-bold text-blue-600">{price}원</span>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ cartState }) => {
  const {
    cartItems,
    updateCartQuantity,
    removeFromCart,
    getTotalPrice,
    cartLoading,
  } = cartState;

  if (cartLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartContainer price={getTotalPrice().toLocaleString()}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </CartContainer>
        )}
      </div>
    </div>
  );
};

export default Cart;
