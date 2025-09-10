import { useEffect, useState } from "react";
import { sbProductsObject as supabase } from "../supabase/dto/product.dto";
import { useModal, makeModalData } from "../contexts/ModalContext";

const useProducts = () => {
  const { openModal, closeModal } = useModal();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.getAllProducts();
      if (error) throw error;
      setProducts(data);
    } catch (error) {
      const modalContents = makeModalData({
        modalId: "Get Products Error",
        mode: "alert",
        title: "오류",
        contents: "상품을 가져오는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("Get Products Error"),
      });
      openModal(modalContents);
      console.error("상품 조회 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, productLoading: loading };
};

export default useProducts;
