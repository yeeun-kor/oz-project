import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

// 상품 목록을 저장할 상태를 생성해보세요
// 데이터 로딩 상태를 관리할 상태를 생성해보세요
const useProducts = () => {
    // useState를 사용하여 필요한 상태들을 정의해주세요

    // 데이터베이스에서 상품 정보를 가져오는 함수를 만들어주세요
    const fetchProducts = async () => {
        // 로딩 시작
        try {
            // supabase를 사용하여 products 테이블에서 데이터를 가져와주세요
            // 관련된 테이블(categories, brands)의 정보도 함께 가져와주세요
            // select 메서드에서 어떤 데이터를 가져올지 생각해보세요
            // 에러 처리를 해주세요
            // 가져온 데이터를 상태에 저장해주세요
        } catch (error) {
            // 에러 로깅
        } finally {
            // 로딩 종료
        }
    };

    // 컴포넌트가 마운트될 때 데이터를 가져오도록 useEffect를 사용해주세요

    // 필요한 값들을 반환해주세요
    return {};
};

export default useProducts;
