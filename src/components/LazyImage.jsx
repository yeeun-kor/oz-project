import { useState, useRef, useEffect } from "react";

// 이미지 레이지 로딩
const LazyImage = ({
    src,
    alt,
    className,
    placeholder = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageSrc(src);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [src]);

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-70"} ${className}`}
            onLoad={() => setLoaded(true)}
        />
    );
};

export default LazyImage;
