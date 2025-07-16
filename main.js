// let num = Infinity;
// console.log(num);
// let num2 = 100 / 0;
// console.log(num2);
// console.log();
// console.log(typeof num);
// console.log(typeof num2);

// let num3 = "kwqfdsfgdsfsd" / 10;
// console.log(num3);
// console.log(typeof num3);
// console.log();
// let num1 = null;
// console.log(num1);
// console.log(num1 === null);

// let num;
// console.log(num);
// console.log(typeof num);

// let num = "100";
// console.log(typeof num);
// console.log();
// num = 10;
// console.log(typeof num);

// let global = '나는 "전역" 변수 입니다';
// function outerFunction() {
//   console.log(global);
//   let inner = "나는 이너 변수 입니다.";
//   console.log(inner);
//   function block() {
//     let block = "나는 블록이다! ";
//   }
//   console.log(block);
// }
// outerFunction();

// console.log('hello "world"');
// console.log(`hello \"worldddddd\"`);

// function print() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// print();

// //함수호이스팅

// string("hello", "world");
// function string(str1, str2) {
//   console.log(str1 + str2);
// }

// //변수 호이스팅
// console.log(key);
// let key = "hi";

// const memberName = "Jane";
// const grade = "gold";
// const points = "32000";

// const gradeLabel = grade.toUpperCase(); // 대문자로 만드는 코드
// const bonusRate = 0.1;

// const bonusPoints = Math.floor(points * bonusRate);

// console.log(`${memberName}님의 등급: ${gradeLabel}`);
// console.log("보너스 포인트:", bonusPoints + "P");
// // console.log("총 보유 포인트:", points + bonusPoints + "P");
// console.log("총 보유 포인트:", parseInt(points) + bonusPoints + "P");

// console.log();
// console.log(typeof points); //string -> number 형변환 필요
// console.log(typeof bonusPoints);
//  * 목표 출력

// Jane님의 등급: GOLD
// 보너스 포인트: 3200P
// 총 보유 포인트: 35200P

/* 출력
  ┌─────┐
  │     │
  │  ●  │
  │     │
  └─────┘
 */

// 여기에 코드를 작성해주세요.

const diceArt = [
  "0인 경우는 제외해주세요.",
  `
  ┌─────┐
  │     │
  │  ●  │
  │     │
  └─────┘
  `,
  `
  ┌─────┐
  │ ●   │
  │     │
  │   ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ●   │
  │  ●  │
  │   ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │     │
  │ ● ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │  ●  │
  │ ● ● │
  └─────┘
  `,
  `
  ┌─────┐
  │ ● ● │
  │ ● ● │
  │ ● ● │
  └─────┘
  `
];

let diceNumber = Math.floor(Math.random() * 6) + 1;
console.log(diceArt[diceNumber]);
console.log(("b" + "a" + +"a" + "a").toLowerCase());
console.log("2" + "2" - "2");
//풀이과정
// ### 주사위 눈금 랜덤

// - Math 내장객체 → 난수(실수) `random()` 메서드 & 정수 내림 `floor()` 메서드 사용
// - 주사위 눈금은 1~6
//     Math.floor(Math.random() * 6) + 1;

//     1. `Math.random() * 6` → 0이상 6미만의 실수
//     2. `Math.floor(Math.random() * 6)` → 0이상 5이하 정수
//     3.  `+ 1;` → 1이상 6이하의 정수
