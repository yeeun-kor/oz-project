// 선택자
const $num = document.querySelectorAll(".number");
const $btn = document.querySelectorAll(".button");
const $display = document.getElementById("display");
const $dec = document.querySelector(".dec");
const $clear = document.querySelector(".clear");
/*
총19개의 노드리스트 발견 , 하나씩 순회하면서 이벤트 리스터 추가해야함
console.log($btn);
*/

$btn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});

$num.forEach((num) => {
  num.addEventListener("click", () => {
    if ($display.textContent === "0") {
      $display.textContent = num.textContent;
    } else {
      $display.textContent += num.textContent;
    }
  });
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
  $display.textContent = "0";
});
