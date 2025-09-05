import { useState, useRef, useEffect } from "react";

// 사용자 경험을 개선하기 위해서 이미지 지연로딩을 구현해보세요
// 이미지 컴포넌트에 필요한 기본 props들을 정의해주세요
// 기본 placeholder 이미지를 설정해주세요
const LazyImage = ({
    src,
    alt,
    className,
    placeholder = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
}) => {
    // 현재 표시할 이미지 주소를 관리하는 상태를 만들어주세요
    // 이미지 로딩 완료 여부를 관리하는 상태를 만들어주세요
    // DOM 요소를 참조하기 위한 ref를 만들어주세요

    // useEffect를 사용하여 컴포넌트가 화면에 보일 때 실제 이미지를 로딩하도록 구현해주세요
    // 브라우저의 관찰자 API를 사용하여 요소가 뷰포트에 들어왔는지 감지해보세요
    // 적절한 임계값을 설정하여 언제 이미지를 로딩할지 결정해주세요

    return (
        <img
        // ref 연결
        // src 속성
        // alt 속성
        // 로딩 상태에 따른 스타일링
        // 이미지 로딩 완료 이벤트 처리
        />
    );
};

export default LazyImage;
