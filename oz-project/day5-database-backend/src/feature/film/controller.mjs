//! 내가 구현해야하는 부분 !

import getPageStartEnd from "../util/getPageStartEnd.mjs";
import { filmFindMany, filmFindOne } from "./model.mjs";

//! FIND 조회 함수
// 서버와 연결해야해서 비동기적 처리 async 함수 진행
export const getAll = async (req, res) => {
  //? 모든 조회는 무조건 페이지네이션 사용
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const { pageStart, pageEnd } = getPageStartEnd(Number(limit), Number(page));

  //Server 연결하기
  try {
    const result = await filmFindMany(pageStart, pageEnd);
    if (!result) {
      return res.status(404).json({ error: "NotFOUND!!" });
    }
    return res.json({ data: result });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.stack });
  }
};

export const getOne = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(404).json({ error: "NorFound....." });
  try {
    const result = await filmFindOne(id);
    if (!result) return res.status(400).json({ error: "NotFOUND" });
    return res.json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
};
