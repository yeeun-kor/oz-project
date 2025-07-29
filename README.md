# 🧮 Calculator

<img width="612" height="783" alt="Image" src="https://github.com/user-attachments/assets/79821180-8204-492e-adba-c2ce97d13f8c"/>

<br>
<br>

## 나만의 계산기 구현하기

![Image](https://github.com/user-attachments/assets/c2a625ff-9852-4fac-9b45-dd8da1c2a976)

- 작업 기간: 2025-07-25 ~ 2025-07-30
- 작업 로그:

<br><br>

## 🗂️ JavaScript 최종과제 가이드

  <details>
  <summary> 미션01일차 </summary>
  <div markdown="1">

#### STEP 1. HTML로 목업 만들기

#### 요구사항

HTML 파일을 생성하고 기본 구조를 작성하세요
CSS 초기화 코드를 입력해주세요.

#### 구현 단계

`index.html`

1. body 요소 내부에 계산기 컨테이너를 만듭니다.
2. flex를 이용하여 컨테이너가 화면의 중간에 위치하도록 합니다.
3. 컨테이너 내부에 2개의 영역을 생성합니다. (display, buttons)
4. 각 영역을 시각적으로 확인할 수 있도록 border 속성을 추가합니다.
5. display와 buttons를 flex를 사용하여 적절하게 배치합니다.
6. 계산기 컨테이너의 내부 여백을 적절하게 설정합니다.

### STEP 2. 계산기 상단에 버튼 추가하기 (도전미션)

#### 요구사항

1.  계산기 상단에 버튼을 3개 추가하세요
2.  맥북 계산기의 디자인 모티브로 하지만, 기능은 동작하지 않아도 됩
3.  버튼은 원 형태이고, 각 버튼이 일정한 간격을 갖도록 구현해야 합니다.
<br>
<br>
</div>

</details>

  <details>
  <summary> 미션02일차 </summary>
  <div markdown="1">

#### STEP 1. HTML로 목업 만들기, flexbox로 정렬 및 배치하기

#### 요구사항

1. CSS의 flexbox 속성을 이용해 계산기 레이아웃을 구성하세요.
2. 계산기의 기본 구성 요소를 추가하세요 (디스플레이, 숫자 버튼, 연산자 버튼 등).

#### 구현 단계

`index.html`

- **buttons** 내부에 계산기에 필요한 버튼을 추가합니다.

  1.  모든 버튼은 `button` class를 가지고 있어야 합니다.
  2.  숫자 버튼에는 `number` class를 추가합니다.
  3.  연산기호 버튼(`+`, `-`, `*`, `/`)에는 `operator` class를 추가합니다.
  4.  기능 버튼(`C`, `±`, `%`)에는 `function` class를 추가합니다.
  5.  숫자 0은 다른 버튼에 비해 두 배의 영역을 가지고 있으므로, `zero` class를 추가합니다.

`style.css  `

- **display** 영역을 스타일링합니다.

1. 텍스트를 오른쪽으로 정렬합니다.
2. 콘텐츠와 테두리 사이에 padding을 지정합니다.
3. buttons 영역과 버튼들을 flexbox를 사용하여 정렬합니다.

## 🔥도전 미션

### 1. 버튼에 hover 및 active 효과 추가하기

### 요구 사항

- 버튼에 마우스를 올리면(`hover`) 배경색이 변경되도록 하세요.
- 버튼을 클릭하면(`active`) 배경색이 잠시 변경되도록 하세요.
<br>
<br>
</div>

</details>

  <details>
  <summary> 미션03일차 </summary>
  <div markdown="1">

## 요구사항

[3단계 미션지](https://www.notion.so/3-23acaf5650aa8110a6bac1f3c2aaa951?pvs=21)

- 각 버튼을 클릭했을 때 해당 버튼의 값을 콘솔에 출력하세요.

## 구현 단계

### 3-1단계: 각 버튼을 클릭했을 때 console에 각 버튼의 value가 나오도록 하기

- **`script.js`**

  1. 모든 버튼 요소를 선택합니다.
  2. 각 버튼에 클릭 이벤트 리스너를 추가합니다 ⇒ for문 돌려서 개별 요소에 접근
  3. 버튼이 클릭되었을 때, 해당 버튼의 값을 콘솔에 출력합니다.
     - 해당 버튼의 값 ⇒ `textContent`로 설정함

  ![](attachment:a9ba31c8-4541-4d06-9231-150d82e7443e:Jul-04-2024_16-07-45.gif)

<aside>
💡

`forEach()` 사용하는 이유

```
const $btn = document.querySelectorAll(".button");
console.log($btn);
```

![image.png](attachment:e81d6fb0-20c8-49ab-a2b3-0925276ab911:image.png)

- 클래스명으로 가지고 온 노드 → 19개의 노드 리스트 발견 , 하나씩 순회하면서 이벤트 리스너 추가해야함.
</aside>

### 3-2단계: 숫자를 디스플레이에 표시하기

### 요구 사항

- 숫자 버튼을 클릭하면 디스플레이에 해당 숫자가 표시되도록 하세요.
- 초기 디스플레이 값이 `0`일 때는 클릭한 숫자로 바뀌어야 합니다.
- 초기 값이 `0`이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 합니다.
- 클래스가 `number`인 버튼에 대해서만 처리하세요.

### 구현 단계

1. **script.js**
   1. 모든 버튼 요소와 디스플레이 요소를 선택합니다.
   2. 각 버튼에 클릭 이벤트 리스너를 추가합니다.
   3. 버튼이 클릭되었을 때, 클래스가 `number`인 경우 디스플레이에 값을 표시합니다.
   4. 디스플레이가 `0`일 때는 클릭한 숫자로 바뀌어야 합니다.
   5. 디스플레이가 `0`이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 합니다.

### 구현

```
$num.forEach((num) => {
  num.addEventListener("click", () => {
    if ($display.textContent === "0") {
      $display.textContent = num.textContent; //"0"이면 덮어쓰기 하기
    } else {
      $display.textContent += num.textContent; //누적해서 쌓기
    }
  });
});
```

1. 동일하게 `number`클래스는 10개의 노드리스트 반환 → `forEach()` 돌려서 각 요소에 접근
2. 각 요소를 클릭하였을 때 → `display` 부분의 `text`가 클릭한 요소로 동기화 되어야함
3. 조건

   1. 만약 `display===”0”` 이면 , 클릭한 요소로 “덮어쓰기 해야함 “
   2. 그게 아니라면, 클릭한 숫자들이 뒤에 계속 누적해서 쌓여야한다.

   <aside>
   💡

   왜 `display=== 0` 이 안될까?

   - textContent는 항상 “문자열 “ 반환
   - **숫자가** 아니기 때문에 조건 실패함.
   </aside>

![계산기.gif](attachment:2250f65a-1256-496e-92e0-d540bf67ece9:계산기.gif)

## 🔥도전 미션

### 소수점과 Clear 기능 추가하기

### 요구 사항 1 : 소수점 추가

- 소수점 클래스 추가 = `“dec”`
- `“dec”` 이벤트 추가 ⇒ 소수점이 없으면 소수점 추가, 소수점 있으면 추가 되지 않도록

```
$dec.addEventListener("click", () => {
  //소수점이 포함되어 있으면? 돌아가
  if ($display.textContent.includes(".")) {
    return;
  }
  //소수점 없으면? 추가해 ~
  $display.textContent += $dec.textContent;
});
```

<aside>
💡

if `($display.textContent === ".")`  되지 않는 이유

- 이 친구는 전체값이 `“.”` 일때만 돌아간다.
- 즉) **3.14 는 `“.”`에 포함이 되지 않아 숫자+소수점 형태라서**
- 오로지 . 하나만 있어야지 조건이 발동이 된다
- 그래서 `===”.”` 사용하지 않고 [`includes`] 를 사용한 것
</aside>

### 요구 사항 2 : 클리어 기능 추가

- `C` 버튼을 클릭하면 디스플레이를 `0`으로 초기화하세요. - 초기화 클래스 추가 = “clear” - `display` 의 텍스트 부분 0으로 초기화 시키기.

        ```
        $clear.addEventListener("click", () => {
          $display.textContent = "0";
        });
        ```

  <br>
  <br>
      </div>
      </details>
    <br><br>

## 📁 Folder Structure

```
calculator/
├── index.html
├── src/
├── style.css
├── script.js
├── README.md
```

<br><br>

## 📍 Class Naming Convention

> 이 프로젝트는 BEM(Block Element Modifier) 방식을 기반으로 클래스명을 작성하되, 일부 유틸리티 클래스는 예외로 처리합니다.

<br><br>

#### 필수 클래스

```
button     // 모든 버튼 공통
number     // 숫자 버튼 (0~9)
operator   // 연산자 버튼 (+ - * /)
function   // 기능 버튼 (C, ±, % 등)
zero       // 0번 버튼 (2칸 영역)
```

- DAY 2에서 명시된 필수 클래스명 입니다. 아래 클래스는 반드시 포함되어야 합니다.

<br><br>

### 개인 네이밍 기준 (BEM 기반)

```
.calc__display     /* calculator의 display 영역 */
.calc__keypad      /* calculator의 button 영역 */
```

- `calculator` 는 축약하여 `calc`로 사용합니다.

<br>

#### ⚠️ 예외: 유틸리티 클래스

```
.p-40
.btn-xs
```

- 재사용 목적의 디자인 도우미 클래스는 BEM 규칙을 따르지 않습니다.
- 구조보다 스타일 목적이 우선되는 클래스이며, 자유롭게 사용 가능합니다.

<br>

#### ⚠️ 예외: `.calc-container`는 독립 스타일링을 위한 Wrapper

```
.calc-container
```

- .calc-container는 전체 레이아웃을 구성하기 위한 wrapper로 사용되며, BEM의 Block으로 취급하지 않습니다.
- 따라서 내부 요소들을 .calc-container**display처럼 연결하지 않고, .calc**display, .calc\_\_keypad등으로 구성합니다.
