<%@page import="dto.RoomDTO"%>
<%@page import="dao.RoomDAO"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" href="./favicon/favicon.png" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>reservation</title>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
<!-- mystyle.css -->
<link rel="stylesheet" href="css/mystyle.css" />
</head>
<body style="padding-top: 100px">

	<jsp:include page="nav.jsp" />
	<div class="container">
		<div class="row mt-5">
			<div class="col text-center">
				<h1>Reservation</h1>
			</div>
		</div>
		<div class="row">
			<div class="col mt-5">
				<form action="reservation_check.jsp" method="post">
					<div class="row">
						<div class="col-md-6">
							<!-- 이름 -->
							<div class="form-group">
								<label for="reservation_name">성함</label> <input type="text" class="form-control" id="reservation_name" placeholder="홍길동" name="reservation_name" required="required"/>
							</div>
						</div>
						<div class="col-md-6">
							<!-- 연락처 -->
							<div class="form-group">
								<label for="reservation_phone_num">연락처</label> <input type="text" class="form-control" id="reservation_phone_num" placeholder="-없이 입력해주세요" name="reservation_phone_num" required="required"/>
							</div>
						</div>
					</div>
					<!-- 이메일 -->
					<div class="form-group">
						<label for="reservation_email">이메일</label> <input type="email" class="form-control" id="reservation_email" placeholder="name@example.com" name="reservation_email" required="required" />
					</div>

					<!-- 체크 인/아웃 날짜/숙박인원 -->
					<div class="row">
						<div class="col-md-4">
							<div class="form-group">
								<label for="reservation_checkIn">체크인 날짜</label> <input type="date" class="form-control" id="reservation_checkIn" name="checkIn_date" onchange="setCheckoutMinDate()" min="<?php echo date('Y-m-d'); ?>" required="required"/>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for="reservation_checkOut">체크아웃 날짜</label> <input type="date" class="form-control" id="reservation_checkOut" name="checkOut_date" required="required" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for="reservation_num">숙박인원</label>
								<select class="form-control" id="reservation_num" name="reservation_num" required="required">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
						</div>

					</div>
					<!-- 요청사항 -->
					<!-- 요청 사항 입력 폼 -->
					<div class="form-group mb-5">
						<label for="reservation_request">추가 요청 사항</label>
						<textarea class="form-control" id="reservation_request" name="reservation_request" rows="3"></textarea>
					</div>

					<div class="row">
						<div class="col text-center">
							<!-- 버튼제출 -->
							<button type="submit" class="btn reservation_btn px-3 mb-5 btn-lg btn-success" id="reservation_submit" disabled>예약하기</button>

						</div>
					</div>
				</form>
			</div>
		</div>

		<!-- 객실타입-->
		<div class="row">
			<div class="col text-center py-5">
				<h1>Room Type</h1>
			</div>
		</div>



		<%
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8"); // 응답 한글 깨짐 방지

		RoomDAO roomDAO = new RoomDAO();
		List<RoomDTO> rooms = roomDAO.getAllRooms();
		request.setAttribute("rooms", rooms); // request에 rooms 저장
		request.getAttribute("imagePath");
		%>

		<%-- rooms가 정상적으로 값이 들어가는지 확인 --%>
		<%
		if (rooms == null || rooms.isEmpty()) {
		%>
		<p>🚨 방 정보가 없습니다.</p>
		<%
		} else {
		%>
		<p>✅ ${rooms.size()}개의 방 정보가 있습니다.</p>
		<%
		}
		%>


		<c:forEach var="room" items="${rooms}">


			<div class="card mb-5">
				<div class="row no-gutters">
					<div class="col-md-5">
						<img src="${pageContext.request.contextPath}/${room.image}" alt="방 이미지" class="img-fluid h-100" />


					</div>
					<div class="col-md-7">
						<div class="card-body">
							<div class="custom-control custom-radio">
								<input type="radio" id="reservation_${room.roomName}" name="customRadio" class="custom-control-input" value="${room.roomName}" /> <label class="custom-control-label" for="reservation_${room.roomName}" >
									<h3 class="card-title">${room.roomName}</h3>
								</label>
							</div>
							<p class="card-text">${room.description}</p>
							<h3 class="card-text text-right mt-5">
								<small>KRW</small>
								<fmt:formatNumber value="${room.price}" pattern="#,###" />
								~
							</h3>
							<div class="row">
								<p class="card-text col-4">Room Size : ${room.roomSize}㎡</p>
								<p class="card-text col-4">Max Pax(기준인원/최대인원) : ${room.maxPax}인</p>
								<p class="card-text col-4">Bed Type : ${room.bedType}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</c:forEach>


		<!-- 스크립트 -->
		<!-- 체크인,아웃설정 -->
		<script>
			function setCheckoutMinDate() {
				var checkInDate = document
						.getElementById("reservation_checkIn").value;
				document.getElementById("reservation_checkOut").setAttribute(
						"min", checkInDate);
			}

			window.onload = function() {
				var today = new Date().toISOString().split("T")[0];
				document.getElementById("reservation_checkIn").setAttribute(
						"min", today);
			};
		</script>
		<!-- 라디오 버튼태그  -->
		<script>
    document.addEventListener("DOMContentLoaded", function () {
        var radioButtons = document.querySelectorAll('input[name="customRadio"]');
        var submitButton = document.getElementById("reservation_submit");

        // 객실 타입 선택 여부 확인 함수
        function checkSelection() {
            var isChecked = false;
            radioButtons.forEach(function (radio) {
                if (radio.checked) {
                    isChecked = true;
                }
            });

            // 객실이 선택되었을 때만 버튼 활성화
            submitButton.disabled = !isChecked;
        }

        // 모든 라디오 버튼에 이벤트 추가
        radioButtons.forEach(function (radio) {
            radio.addEventListener("change", checkSelection);
        });

        // 폼 제출 시 체크 (혹시라도 JS가 작동하지 않을 경우 대비)
        document.querySelector("form").addEventListener("submit", function (event) {
            var isChecked = false;
            radioButtons.forEach(function (radio) {
                if (radio.checked) {
                    isChecked = true;
                }
            });

            if (!isChecked) {
                event.preventDefault(); // 폼 제출 방지
                alert("객실 타입을 선택해주세요!");
            }
        });
    });
</script>
		

		<jsp:include page="footer.jsp" />
</body>
</html>
