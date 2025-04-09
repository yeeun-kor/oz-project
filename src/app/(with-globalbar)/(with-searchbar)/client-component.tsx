"use client";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(
    "클라이언트 컴포넌트라 서버랑, 클라이언트 둘다 띄워져서 두번 랜더링됩니다."
  );
  return <div>{children}</div>;
}
