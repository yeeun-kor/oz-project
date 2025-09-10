import { useEffect, useMemo, useState } from "react";
import { sbCartObject as supabase } from "../supabase/dto/cart.dto";
import { useModal, makeModalData } from "../contexts/ModalContext";

const useCart = () => {
  const { openModal, closeModal } = useModal();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // 장바구니 조회 (재사용 가능한 함수)
  const refreshCart = async () => {
    try {
      const { data, error } = await supabase.getAllProductsFromCart();
      if (error) throw error;
      setCartItems(data);
    } catch (error) {
      console.error("장바구니 조회 오류:", error);
      const modalContents = makeModalData({
        modalId: "Read Cart Error",
        mode: "alert",
        title: "오류",
        contents: "장바구니를 가져오는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("Read Cart Error"),
      });
      openModal(modalContents);
    }
  };

  // 장바구니에 상품 추가
  const addToCart = async (productId, quantity = 1) => {
    try {
      const { data } = await supabase.getOneProductFromCart(productId);
      if (data) {
        await supabase.patchProductFromCart(
          data.id,
          "quantity",
          data.quantity + quantity
        );
      } else {
        await supabase.postProductToCart(productId, quantity);
      }
      const modalContents = makeModalData({
        modalId: "Add Cart",
        mode: "alert",
        title: "장바구니 추가",
        contents: "장바구니에 상품이 추가되었습니다.",
        confirmAction: () => closeModal("Add Cart"),
      });
      openModal(modalContents);
      await refreshCart();
      return { success: true };
    } catch (error) {
      console.error("장바구니 추가 오류:", error);
      const modalContents = makeModalData({
        modalId: "Add Cart Error",
        mode: "alert",
        title: "오류",
        contents:
          "장바구니에 상품을 추가하는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("Add Cart Error"),
      });
      openModal(modalContents);
      return { success: false, error: error.message };
    }
  };

  // 수량 변경
  const updateCartQuantity = async (cartId, quantity) => {
    try {
      if (quantity <= 0) {
        return await removeFromCart(cartId);
      }

      const { error } = await supabase.patchProductFromCart(
        cartId,
        "quantity",
        quantity
      );
      if (error) throw error;

      await refreshCart();
      return { success: true };
    } catch (error) {
      console.error("수량 변경 오류:", error);
      const modalContents = makeModalData({
        modalId: "Change Quantity Error",
        mode: "alert",
        title: "오류",
        contents: "수량을 변경하는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("Change Quantity Error"),
      });
      openModal(modalContents);
      return { success: false, error: error.message };
    }
  };

  // 삭제
  const removeFromCart = async (cartId) => {
    try {
      const { error } = await supabase.deleteProductFromCart(cartId);
      if (error) throw error;
      await refreshCart();
      return { success: true };
    } catch (error) {
      console.error("상품 제거 오류:", error);
      const modalContents = makeModalData({
        modalId: "Remove Item Error",
        mode: "alert",
        title: "오류",
        contents: "상품을 제거하는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("Remove Item Error"),
      });
      openModal(modalContents);
      return { success: false, error: error.message };
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price || 0) * item.quantity;
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

  const handlers = useMemo(
    () => ({
      addToCart,
      updateCartQuantity,
      removeFromCart,
      refreshCart,
    }),
    []
  );
  const utilHandlers = useMemo(
    () => ({ getTotalPrice, getTotalItems }),
    [cartItems]
  );
  return {
    cartItems,
    cartLoading: loading,
    ...handlers,
    ...utilHandlers,
  };
};

export default useCart;
