import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  return <h1>{id} 영화 상세 페이지 </h1>;
}
