import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//? 컨트롤러가 사용하게끔, export

// CRUD 중 READ 문법 findMany,findUnique
// 전체 페이지 READ : 페이지네이션 기능 사용했음 👀
export const filmFindMany = async (pageStart, pageEnd) => {
  return prisma.film.findMany({
    // 페이지1번부터 20번까지 조회 가능함.
    skip: pageStart,
    take: pageEnd,
  });
};

// 특정테이블의 값 중 하나만 보이는 method : findUnique()
export const filmFindOne = async (film_id) => {
  return prisma.film.findUnique({
    // where 구문을 사용하여 조건을 걸었음 !
    where: { film_id: film_id },
  });
};
