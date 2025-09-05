import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.from("products").select(`
                    *,
                    categories(name),
                    brands(name)
                `);

            if (error) throw error;
            setProducts(data || []);
        } catch (error) {
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
