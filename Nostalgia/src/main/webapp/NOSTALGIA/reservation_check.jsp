<%@page import="java.text.SimpleDateFormat"%>
<%@ page import="java.sql.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="dbconn.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
				<h1>감사합니다!</h1>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-8 offset-md-2">
				<div class="card">
					<div class="card-body">
						<%

						// 입력받은 값 가져오기
						String name = request.getParameter("reservation_name");
						String phone = request.getParameter("reservation_phone_num");
						String email = request.getParameter("reservation_email");
						String checkInDate = request.getParameter("checkIn_date");
						String checkOutDate = request.getParameter("checkOut_date");
						String numGuests = request.getParameter("reservation_num");
						String roomType = request.getParameter("customRadio");
						String requestNote = request.getParameter("reservation_request");
						// 요청사항이 비어있으면 없다고 처리할것.
						if (requestNote == null || requestNote.trim().isEmpty()) {
						    requestNote = "요청사항 없음";  
						}


						try {
						
							// SQL 삽입
							String sql = "INSERT INTO reservation (ID, NAME, PHONE, EMAIL, CHECK_IN_DATE, CHECK_OUT_DATE, NUM_GUESTS, ROOM_TYPE, REQUEST_NOTE) "
							+ "VALUES (reservation_seq.NEXTVAL, ?, ?, ?, TO_DATE(?, 'YYYY-MM-DD'), TO_DATE(?, 'YYYY-MM-DD'), ?, ?, ?)";
							pstmt = conn.prepareStatement(sql);
							pstmt.setString(1, name);
							pstmt.setString(2, phone);
							pstmt.setString(3, email);
							pstmt.setString(4, checkInDate);
							pstmt.setString(5, checkOutDate);
							pstmt.setInt(6, Integer.parseInt(numGuests));
							pstmt.setString(7, roomType);
							pstmt.setString(8, requestNote);

							int result = pstmt.executeUpdate();
							if (result > 0) {
								out.println("<h3>" + name + "님 예약이 완료되었습니다.</h3>");
								
								// 예약 정보 조회
								String selectSql = "SELECT STAY_DURATION FROM RESERVATION WHERE NAME = ? AND PHONE = ? ORDER BY ID DESC FETCH FIRST 1 ROWS ONLY";
								pstmt = conn.prepareStatement(selectSql);
								pstmt.setString(1, name);
								pstmt.setString(2, phone);
								rs = pstmt.executeQuery();

								if (rs.next()) {
									long stayDuration = rs.getLong("STAY_DURATION");
									out.println("<h4>숙박 기간: " + stayDuration + "박</h4>");
								}
								
							} else {
								out.println("<h3> 예약 실패! 다시 시도해주세요.</h3>");
							}
						} catch (Exception e) {
							e.printStackTrace();
							out.println("<h3>데이터베이스 오류 발생!</h3>");
						} finally {
							if (pstmt != null)
								pstmt.close();
							if (conn != null)
								conn.close();
						}
						%>

						<!-- 예약 정보 출력 -->
						<h2>예약 정보</h2>
						<ul>
							<li><strong>이름:</strong> <%=name%></li>
							<li><strong>연락처:</strong> <%=phone%></li>
							<li><strong>이메일:</strong> <%=email%></li>
							<li><strong>체크인 날짜:</strong> <%=checkInDate%></li>
							<li><strong>체크아웃 날짜:</strong> <%=checkOutDate%></li>
							<li><strong>숙박 인원:</strong> <%=numGuests%></li>
							<li><strong>객실 유형:</strong> <%=roomType%></li>
							<li><strong>요청 사항:</strong> <%=requestNote%></li>
						</ul>


					</div>
				</div>
				<div class="text-center mt-4">
					<a href="index.jsp" class="btn btn-primary">홈</a>
					<a href="reservation.jsp" class="btn btn-primary">이전으로 돌아가기</a>
					<a href="customer_check.jsp" class="btn btn-primary">예약확인</a>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="footer.jsp" />
</body>
</html>
