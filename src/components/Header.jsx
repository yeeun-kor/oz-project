export default function Header() {
  return (
    <header className="flex justify-between items-center py-[10px] px-5">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5 list-none font-normal text-[13px]">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
