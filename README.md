# 포켓몬 도감 만들기 미니프로젝트

## 📖 포켓몬 도감 (Pokédex)

리액트와 최신 프론트엔드 기술 스택을 활용하여 제작한 포켓몬 도감 애플리케이션입니다.
포켓몬의 이름, 이미지, 설명을 불러오고 검색 및 찜 기능을 제공합니다.

---

## 🚀 프로젝트 개요

- 개발 기간: 2025.08.29 -
- 목표: 리액트 최적화, 상태 관리, 라우팅, UI 구성 능력을 종합적으로 학습
- 특징: SPA(Single Page Application) 기반, 코드 스플리팅 적용, 상태 관리 고도화

---

## 🎯 주요 기능

- 포켓몬 카드 리스트 (이름/이미지)
- 상세 페이지 (포켓몬 설명/스탯)
- 검색 기능 (이름 기반 검색)
- 찜 목록 관리 (즐겨찾기 추가/삭제)
- 동적 로딩(React.lazy, Suspense)으로 초기 렌더링 성능 개선

---

## ⚡ 최적화 포인트

---

## 📂 폴더 구조

```bash
src/
 ├── assets/               # 이미지, 폰트, 전역 스타일
 ├── components/           # 재사용 가능한 공용 컴포넌트
 │    ├── Card/            # 포켓몬 카드 컴포넌트
 │    ├── Layout/          # Header, Footer, Navigation
 │    └── UI/              # Button, Modal, Loader 등
 ├── pages/                # 페이지 단위 컴포넌트
 │    ├── Main/            # 메인 (포켓몬 리스트)
 │    ├── Detail/          # 상세 페이지
 │    ├── Search/          # 검색 페이지
 │    └── Favorites/       # 찜 목록
 ├── RTK/                  # Redux Toolkit 관련
 │    ├── slices/          # 포켓몬 데이터 슬라이스
 │    └── store.js         # 전역 스토어 설정
 ├── services/             # API 호출 함수 (fetch, axios 등)
 ├── hooks/                # 커스텀 훅
 ├── utils/                # 공용 유틸 함수
 ├── App.jsx               # 라우팅 및 전체 구조
 └── main.jsx              # 진입점

```

---

## 🛠 기술 스택

- `Frontend`: React, Vite, Tailwind CSS
- `State` Management: Redux Toolkit (RTK)
- `Routing`: React Router DOM
- `API`:[PokéAPI](https://pokeapi.co/docs/v2#pokemon)
