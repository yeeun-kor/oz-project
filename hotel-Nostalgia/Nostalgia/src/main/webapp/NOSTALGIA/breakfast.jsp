<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>breakfast</title>
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
  </head>
<body style="padding-top: 100px">
  <jsp:include page="nav.jsp" />
    <div class="container-fluid w-75">
      <div class="row my-5">
        <!-- 좌측 캐러셀 -->
        <div class="col-md-8">
          <div
            id="breakfast_carousel"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#breakfast_carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#breakfast_carousel" data-slide-to="1"></li>
              <li data-target="#breakfast_carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="images/break01.jpg"
                  class="d-block img-fluid w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="images/break02.jpg"
                  class="d-block img-fluid w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="images/break03.jpg"
                  class="d-block img-fluid w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#breakfast_carousel"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#breakfast_carousel"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
        <!-- 우측 타이틀내용 -->
        <div class="col-md-4 d-flex flex-column mt-5">
          <div class="row d-flex justify-content-start">
            <div class="col">
              <h1>조식 서비스</h1>
              <p class="break_text">Breakfast Service</p>
            </div>
          </div>
          <div class="row d-flex justify-content-end" style="margin-top: auto">
            <div class="col break_text">
              노스텔지어에서는 건강하고 신선한 한국의 식재료를 재해석해 만든
              조식 서비스를 제공하고 있습니다. 노스텔지어만의 특별한 브런치 공간
              북촌 원카페에서 진행되는 조식 서비스는 2부제로 운영하고 있으며,
              예약 후 체크인 시 메뉴 선택이 가능합니다
            </div>
          </div>
        </div>
      </div>
      <!-- 조식장소 및 금액 시간간 -->
      <div class="row border-top border-dark border-bottom break_text2 my-5">
        <div
          class="col-md-3 border-right border-dark py-5 px-3 border-bottom-0"
        >
          <h3>조식 장소</h3>
          <p class="mt-3">노스텔지어 북촌 원카페 (가회동 55-2)</p>
        </div>
        <div
          class="col-md-3 border-right border-dark py-5 px-3 border-bottom-0"
        >
          <h3>금액</h3>
          <p class="mt-3">KRW 20,000</p>
        </div>
        <div class="col-md-6 py-5 px-3">
          <h3>조식 시간</h3>
          <p class="mt-3">Session 1 (AM 8:00 - 9:00)</p>
          <p>Session 2 (AM 9:00 -10:00)</p>
        </div>
      </div>
      <!-- 조식메뉴 -->
      <h3>조식메뉴</h3>

      <div class="row my-5 break_menu">
        <div class="col-md-4 border-right border-dark">
          <h3>Set A</h3>
          <h5>취나물 페스토 사과 브리치즈 샌드위치</h5>
          <img src="images/setA.png" alt="" class="img-fluid w-50 my-5" />
          <p>
            - 토마토 단호박 스프 <br />
            - 오이 고추 콘 코울슬로 <br />
            - 호두 정과 <br />
            - 반숙란 <br />
          </p>
          <p class="my-5">
            *아메리카노/라떼/Tea(NYU 브렉퍼스트)/우유/ 오렌지주스 중 택 1 <br />
            *계절에 따라 일부 메뉴 재료가 변동될 수 있습니다. <br />
          </p>
        </div>
        <div class="col-md-4 border-right border-dark pl-5">
          <h3>Set B</h3>
          <h5>홈메이드 조청 그래놀라 요거트</h5>
          <img src="images/setB.png" alt="" class="img-fluid w-50 my-5" />
          <p>
            - 바나나 크로플 <br />
            - 반숙란 <br />
            - 꿀 <br />
          </p>
          <p class="my-5">
            *아메리카노/라떼/Tea(NYU 브렉퍼스트)/우유/ 오렌지주스 중 택 1 <br />
            *계절에 따라 일부 메뉴 재료가 변동될 수 있습니다. <br />
          </p>
        </div>
        <div class="col-md-4 pl-5">
          <h3>Set C</h3>
          <h5>누룽지와 불고기</h5>
          <img src="images/setC.png" alt="" class="img-fluid w-50 my-5" />
          <p>
            - 조미 김 <br />
            - 무말랭이 <br />
            - 견과류 멸치 볶음 <br />
            - 계란말이 <br />
          </p>
          <p class="my-5">
            *아메리카노/라떼/Tea(NYU 브렉퍼스트)/우유/ 오렌지주스 중 택 1 <br />
            *계절에 따라 일부 메뉴 재료가 변동될 수 있습니다. <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
    <jsp:include page="footer.jsp" />
  </body>
</html>
