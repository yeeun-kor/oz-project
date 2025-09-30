<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
  <link rel="icon" href="./favicon/favicon.png" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="stylesheet" href="css/mystyle.css?v=1" />

    <title>ourHanoks</title>
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
   
  </head>
 <body style="padding-top: 100px">
  <jsp:include page="nav.jsp" />
    <div class="container-fluid">
      <div class="row my-5">
        <div class="col text-center py-5"><h1>Our Hanoks</h1></div>
      </div>
      <!-- 이미지 그리드 -->
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/main_carousel01.jpg"
              class="card-img-top ourhonok-hover img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">블루재 (Blue齋)</h5>
              <p class="card-text">북촌 한옥마을에 자리잡은 고귀한 푸른 한옥</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/main_carousel02.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">히든재 (Hidden齋)</h5>
              <p class="card-text">골목 끝에서 마주치는 신비로운 공간</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/main_carousel03.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">힐로재 (Hillo齋)</h5>
              <p class="card-text">
                북촌팔경 중 가장 으뜸인 7경에 자리잡은 따뜻한 한옥
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/our01.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">누크재 (Nook齋)</h5>
              <p class="card-text">
                마음까지 편안해지는 아늑하고 조용한 한옥호텔
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/our02.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">아크재 (Arc齋)</h5>
              <p class="card-text">
                오랜 시간을 머금고 북촌을 대표할 대형 한옥
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ourhonok-card">
            <img
              src="images/our03.jpg"
              class="card-img-top img-fluid ourhonok-hover"
              alt="..."
            />
            <div class="card-body ourhonok-body">
              <h5 class="card-title">더블재 (Double齋)</h5>
              <p class="card-text">느리게 흐르기에 더욱 아름다운 시간</p>
            </div>
          </div>
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
