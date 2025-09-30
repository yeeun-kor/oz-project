<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*, javax.sql.*, java.util.*"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>예약 확인 결과</title>
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
				<h1>예약 확인 결과</h1>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<%
						request.setCharacterEncoding("utf-8");
						String name = request.getParameter("reservation_name");
						String phoneNum = request.getParameter("reservation_phone_num");

						if (name != null && phoneNum != null) {
							Connection conn = null;
							PreparedStatement ps = null;
							ResultSet rs = null;

							try {
								// JDBC 드라이버 로드
								Class.forName("oracle.jdbc.driver.OracleDriver");

								// DB 연결
								String dbURL = "jdbc:oracle:thin:@localhost:1521:xe";
								String dbUsername = "C##dbexam";
								String dbPassword = "m1234";
								conn = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
								String sql = "SELECT * FROM reservation WHERE name = ? AND phone = ?";
								ps = conn.prepareStatement(sql);
								ps.setString(1, name);
								ps.setString(2, phoneNum);

								rs = ps.executeQuery();

								if (rs.next()) {
						%>
						<h3 class="text-success"><%=rs.getString("NAME")%>
							고객님, 예약 정보 확인되었습니다!
						</h3>
						<ul class="list-group mt-3">
							<li class="list-group-item"><strong>이름:</strong> <%=rs.getString("NAME")%></li>
							<li class="list-group-item"><strong>연락처:</strong> <%=rs.getString("PHONE")%></li>
							<li class="list-group-item"><strong>체크인 날짜:</strong> <%=rs.getDate("CHECK_IN_DATE")%></li>
							<li class="list-group-item"><strong>체크아웃 날짜:</strong> <%=rs.getDate("CHECK_OUT_DATE")%></li>
							<li class="list-group-item"><strong>숙박 인원:</strong> <%=rs.getInt("NUM_GUESTS")%></li>
							<li class="list-group-item"><strong>객실 타입:</strong> <%=rs.getString("ROOM_TYPE")%></li>

							
						</ul>
						<%
						} else {
						%>
						<p class="text-danger">해당 예약 정보가 없습니다. 다시 확인해주세요.</p>
						<%
						}
						} catch (Exception e) {
						e.printStackTrace();
						%>
						<p class="text-danger">오류가 발생했습니다. 관리자에게 문의해주세요.</p>
						<%
						} finally {
						try {
							if (rs != null)
								rs.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						try {
							if (ps != null)
								ps.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						try {
							if (conn != null)
								conn.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						}
						}
						%>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="footer.jsp" />
</body>
</html>
