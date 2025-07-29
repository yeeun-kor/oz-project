🧮 Calculator
계산기 디자인

나만의 계산기 구현하기 | JS Final Mission in OZ
🚀 Live Demo (GitHub Pages)
작업 기간: 2025-07-25 ~ 2025-07-30
작업 로그: Binyard Blog
디자인 시안: Figma

🗂️ JavaScript 최종과제 가이드
DAY1 미션지
DAY2 미션지
DAY3 미션지

📁 Folder Structure
calculator/
├── index.html
├── src/
│   ├── style.css
│   └── script.js
├── README.md
├── .gitignore
└── package.json

📍 Class Naming Convention
이 프로젝트는 BEM(Block Element Modifier) 방식을 기반으로 클래스명을 작성하되, 일부 유틸리티 클래스는 예외로 처리합니다.

필수 클래스
button     // 모든 버튼 공통
number     // 숫자 버튼 (0~9)
operator   // 연산자 버튼 (+ - * /)
function   // 기능 버튼 (C, ±, % 등)
zero       // 0번 버튼 (2칸 영역)
DAY 2에서 명시된 필수 클래스명 입니다. 아래 클래스는 반드시 포함되어야 합니다.

개인 네이밍 기준 (BEM 기반)
.calc__display     /* calculator의 display 영역 */
.calc__keypad      /* calculator의 button 영역 */
calculator는 축약하여 calc로 사용합니다.

⚠️ 예외: 유틸리티 클래스

.p-40
.btn-xs
재사용 목적의 디자인 도우미 클래스는 BEM 규칙을 따르지 않습니다.
구조보다 스타일 목적이 우선되는 클래스이며, 자유롭게 사용 가능합니다.

⚠️ 예외: .calc-container는 독립 스타일링을 위한 Wrapper

.calc-container
.calc-container는 전체 레이아웃을 구성하기 위한 wrapper로 사용되며, BEM의 Block으로 취급하지 않습니다.
따라서 내부 요소들을 .calc-container__display처럼 연결하지 않고, .calc__display, .calc__keypad등으로 구성합니다.
