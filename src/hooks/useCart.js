import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // 장바구니 조회 (재사용 가능한 함수)
    const refreshCart = async () => {
        try {
            const { data, error } = await supabase.from("cart").select(`
                *,
                products (
                    id,
                    name,
                    price,
                    image_url
                )
            `);
            if (error) throw error;
            setCartItems(data || []);
        } catch (error) {
            console.error("장바구니 조회 오류:", error);
        }
    };

    // 장바구니에 상품 추가
    const addToCart = async (productId, quantity = 1) => {
        try {
            const { data: existingItem } = await supabase.from("cart").select("*").eq("product_id", productId).single();

            if (existingItem) {
                const { error } = await supabase
                    .from("cart")
                    .update({ quantity: existingItem.quantity + quantity })
                    .eq("id", existingItem.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("cart").insert([
                    {
                        product_id: productId,
                        quantity,
                        user_id: 1,
                    },
                ]);
                if (error) throw error;
            }

            await refreshCart();
            return { success: true };
        } catch (error) {
            console.error("장바구니 추가 오류:", error);
            return { success: false, error: error.message };
        }
    };

    // 수량 변경
    const updateCartQuantity = async (cartId, quantity) => {
        try {
            if (quantity <= 0) {
                return await removeFromCart(cartId);
            }

            const { error } = await supabase.from("cart").update({ quantity }).eq("id", cartId);

            if (error) throw error;
            await refreshCart();
            return { success: true };
        } catch (error) {
            console.error("수량 변경 오류:", error);
            return { success: false, error: error.message };
        }
    };

    // 삭제
    const removeFromCart = async (cartId) => {
        try {
            const { error } = await supabase.from("cart").delete().eq("id", cartId);

            if (error) throw error;
            await refreshCart();
            return { success: true };
        } catch (error) {
            console.error("상품 제거 오류:", error);
            return { success: false, error: error.message };
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.products?.price || 0) * item.quantity;
        }, 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    useEffect(() => {
        const initCart = async () => {
            setLoading(true);
            try {
                await refreshCart();
            } finally {
                setLoading(false);
            }
        };

        initCart();
    }, []);

    return {
        cartItems,
        cartLoading: loading,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems,
        refreshCart,
    };
};

export default useCart;
