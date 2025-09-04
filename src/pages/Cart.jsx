import CartItem from "../components/CartItem";

const Cart = ({ cartState }) => {
    const { cartItems, updateCartQuantity, removeFromCart, getTotalPrice, cartLoading } = cartState;

    if (cartLoading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500 mb-4">장바구니가 비어있습니다</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateCartQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart}
                            />
                        ))}

                        <div className="p-6 bg-gray-50 border-t">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold">총 금액:</span>
                                <span className="text-2xl font-bold text-blue-600">
                                    {getTotalPrice().toLocaleString()}원
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
