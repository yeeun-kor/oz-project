const num1 = "1.234dasdass";
const num2 = "1.234";
const num3 = "";

console.log(parseInt(num1)); //1.234
console.log(parseInt(num2)); //1.234

console.log(Number(num1)); //조금이라도 문자가 섞이면 -> NaN
console.log(Number(num2)); //1.234
console.log(Number(num3)); //빈문자열 -> 0
