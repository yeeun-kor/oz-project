// 선택자
const $num = document.querySelectorAll(".number");
const $btn = document.querySelectorAll(".button");
const $display = document.querySelector(".display-val");
const $result = document.querySelector(".display-expr");
const $dec = document.querySelector(".dec");
const $cal = document.querySelector(".cal");
const $clear = document.querySelector(".clear");
const $operator = document.querySelectorAll(".operator");

// 🔥 변수선언시 주의사항 : 버튼 클릭사이에도 값이 유지되어야 하는가? 상위 스코프로 이동
let firstOperand = null; //첫번째, 피연산자 저장할 변수
let secondOperand = null; //연산자 저장할 변수
let operator = null; //연산자를 저장할 변수

const $numDivideZero = "정의되지않음";

//계산 성공,실패 상태 플래그 추가
let isInvalidCalculation = false; //잘못된계산하면 true설정
let isResulrShown = false; //‼️상태변수추가

//숫자 입력시
$num.forEach((num) => {
  num.addEventListener("click", (e) => {
    //직전에 "="로 계산이 완료된 상태라면 ? : 새계산 시작
    if (isResulrShown || isInvalidCalculation) {
      // //이전 상태 초기화
      $result.textContent = "";
      $display.textContent = num.textContent;
      firstOperand = null;
      secondOperand = null;
      operator = null;
      isResulrShown = false;
      isInvalidCalculation = false;
      console.log(`first : ${firstOperand}, second : ${secondOperand}`);
      return;
    }

    if ($display.textContent === "0") {
      $display.textContent = num.textContent;
    } else {
      $display.textContent += num.textContent;
    }
  });
});

// 연산기호 클릭하면 연산기호와 현재 디스플레이 값 저장하기
$operator.forEach((item) => {
  item.addEventListener("click", () => {
    //만약 계산 실수라면 입력자체 무시
    if ($display.textContent === "Error") return;
    if (firstOperand === null) {
      firstOperand = $display.textContent; //현재 누른 값을 기준으로 저장함
      operator = item.textContent; //연산자 클릭한 걸로 저장
      $result.textContent = `${firstOperand} ${operator} `; //결과창에 누른 입력값 표시하기
      $display.textContent = ""; //다음 숫자를 위해 디스플레이 비워두기
    } else {
      operator = item.textContent; //내부 연산자 갱신( 예를들어 2+3 인데 마음이 바뀌어서 2-3하려면 새로 갱신 필요 )
      $result.textContent = `${firstOperand} ${operator}`;
      $display.textContent = "";
    }
  });
});

//계산결과 수행하는 순수 함수
const calculate = (num1, op, num2) => {
  const a = Number(num1); // 엄격한 검사로 "" 빈문자시 0반환 되도록
  const b = Number(num2);

  //연산자에 따라 계산하는 로직 수행
  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "✕":
      return a * b;
    case "÷":
      return b === 0 ? "Undefined" : a / b; //num2 는 0이 되면 안된다!
    default:
      return "Error";
  }
};

// = 버튼 클릭하여 계산 하기
$cal.addEventListener("click", () => {
  secondOperand = $display.textContent; // 두번째 피연산자 확보
  //유효성검사
  console.log(`secondOperand : ${secondOperand}`);
  if (firstOperand === null || !operator || secondOperand === "") {
    isInvalidCalculation = true;
    console.log(`first : ${firstOperand}, second : ${secondOperand}`);
    return;
  }

  const cal_result = calculate(firstOperand, operator, secondOperand);
  $result.textContent = `${firstOperand} ${operator} ${secondOperand} = `;

  //계산 오류시
  if (cal_result === "Error" || cal_result === "Undefined") {
    $display.textContent = $numDivideZero;
    isInvalidCalculation = true;
    firstOperand = null;
    secondOperand = null;
    operator = null;
    return;
  }

  //정수 계산 로직
  const result = Math.round((cal_result + Number.EPSILON) * 1000) / 1000; //소수점은 3자리까지만
  $display.textContent = result;
  firstOperand = result;
  secondOperand = null;
  operator = null;
  isInvalidCalculation = false; //다시 정상으로 돌리기
  isResulrShown = true; // 계산이 완료됨을 기록
});

// 소수점 버튼 클릭 -> 소수점 추가
$dec.addEventListener("click", () => {
  //소수점이 포함되어 있으면? 돌아가
  if ($display.textContent.includes(".")) {
    return;
  }
  //소수점 없으면? 추가해 ~
  $display.textContent += $dec.textContent;
});

// Clear버튼 기능
$clear.addEventListener("click", () => {
  clear();
});

const clear = () => {
  $display.textContent = 0;
  firstOperand = null;
  secondOperand = null;
  operator = null;
  $result.textContent = "";
};
