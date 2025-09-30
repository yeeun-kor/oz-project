<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
  <link rel="icon" href="./favicon/favicon.png" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OFFERINGS</title>
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <!-- My Style CSS -->
    <link rel="stylesheet" href="css/mystyle.css" />
  </head>
  <body style="padding-top: 100px">
  <jsp:include page="nav.jsp" />
    <div class="container-fluid">
      <div class="row my-5">
        <div class="col text-center py-5"><h1>OFFERINGS</h1></div>
      </div>
      <!-- 이미지 그리드 -->
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/offer01.jpg"
              class="card-img-top ourhonok-hover img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">조식 서비스</h5>
              <p class="card-text">Breakfast Service</p>
              <div class="text-right">
                <a href="breakfast.jsp" class="btn btn-link text-dark"
                  >DISCOVER MORE</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/offer02.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">북촌막걸리 + 2단 플레터 안주세트</h5>
              <p class="card-text">
                Bukchon Makgeolli &amp; 2-Tier Platter Set
              </p>
              <div class="text-right">
                <a href="#" class="btn btn-link text-dark" hidden="hidden">DISCOVER MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/offer03.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">포토 서비스</h5>
              <p class="card-text">Photography Service</p>
              <div class="text-right">
                <a href="#" class="btn btn-link text-dark" hidden="hidden">DISCOVER MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/offer04.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">폴라로이드 렌탈 서비스</h5>
              <p class="card-text">Polaroid Rental Service</p>
              <div class="text-right">
                <a href="#" class="btn btn-link text-dark" hidden="hidden">DISCOVER MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/offer05.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">아크재 (Arc齋)</h5>
              <p class="card-text">
                오랜 시간을 머금고 북촌을 대표할 대형 한옥
              </p>
              <div class="text-right">
                <a href="#" class="btn btn-link text-dark" hidden="hidden">DISCOVER MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <jsp:include page="footer.jsp" />
  </body>
</html>
