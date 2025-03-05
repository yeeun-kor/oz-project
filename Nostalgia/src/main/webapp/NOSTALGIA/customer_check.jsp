<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*, javax.sql.*, java.util.*" %>
<!DOCTYPE html>
<html lang="en">
  <head>
  <link rel="icon" href="./favicon/favicon.png" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>예약 확인</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
    <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
  </head>
  <body style="padding-top: 100px;">
    <jsp:include page="nav.jsp" />
    <div class="container">
      <div class="row mt-5">
        <div class="col text-center">
          <h1>Reservation Check</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <form action="customer_check_view.jsp" method="post">
            <div class="form-group">
              <label for="reservation_name">성함</label>
              <input type="text" class="form-control" id="reservation_name" name="reservation_name" required placeholder="홍길동"/>
            </div>
            <div class="form-group">
              <label for="reservation_phone_num">연락처</label>
              <input type="text" class="form-control" id="reservation_phone_num" name="reservation_phone_num" required placeholder="(-)없이 입력해주세요" />
            </div>
            <button type="submit" class="btn btn-primary">예약 확인</button>
          </form>
        </div>
      </div>
    </div>
    <jsp:include page="footer.jsp" />
  </body>
</html>
