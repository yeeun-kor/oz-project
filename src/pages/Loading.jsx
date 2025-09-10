import { ShoppingCart } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {/* 장바구니 아이콘 */}
      <div className="animate-bounce">
        <ShoppingCart className="w-16 h-16 text-green-600" />
      </div>

      {/* 텍스트 */}
      <p className="mt-4 text-lg font-semibold text-gray-700">
        장바구니를 불러오는 중...
      </p>

      {/* 로딩 바 */}
      <div className="w-64 h-2 mt-6 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 animate-[loading_1.5s_infinite]" />
      </div>
    </div>
  );
};

export default LoadingPage;
