<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>객실 수정</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
	<jsp:include page="nav.jsp" />

	<div class="container" style="margin-top: 150px;">
		<h2 class="text-center mb-4">객실 수정</h2>

		<%
		String roomId = request.getParameter("room_id");
		if (roomId == null || roomId.isEmpty()) {
		    out.println("room_id is missing");
		} else {
		    out.println("room_id: " + roomId);
		}
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String roomName = "", description = "", bedType = "", price = "", roomSize = "", maxPax = "";

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "C##dbexam", "m1234");
			String sql = "SELECT * FROM room_type WHERE room_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, roomId);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				roomName = rs.getString("room_name");
				description = rs.getString("description");
				price = rs.getString("price");
				roomSize = rs.getString("room_size");
				maxPax = rs.getString("max_pax");
				bedType = rs.getString("bed_type");

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null)
				rs.close();
			if (pstmt != null)
				pstmt.close();
			if (conn != null)
				conn.close();
		}
		%>


		<form action="updateRoomProcess.jsp" method="post" enctype="multipart/form-data">
			<input type="hidden" name="room_id" value="<%=roomId%>">
			<%= roomId %>
			<div class="mb-3">
				<label>객실명</label> <input type="text" name="room_name" class="form-control" value="<%=roomName%>" required>
			</div>
			<div class="mb-3">
				<label>설명</label>
				<textarea name="description" class="form-control"><%=description%></textarea>
			</div>
			<div class="mb-3">
				<label>가격</label>
				<%
				String formattedPrice = "";
				if (price != null && !price.isEmpty()) {
					// 가격이 빈 문자열이 아닌 경우에만 변환
					int priceInt = Integer.parseInt(price);
					formattedPrice = String.format("%,d", priceInt);
				}
				%>
				<input type="text" name="price" class="form-control" value="<%=formattedPrice%>" required>
			</div>
			<div class="mb-3">
				<label>객실 크기</label> <input type=text name="room_size" class="form-control" value="<%=roomSize%>" required>
			</div>
			<div class="mb-3">
				<label>최대 인원</label> <input type=text name="max_pax" class="form-control" value="<%=maxPax%>" required>
			</div>
			<div class="mb-3">
				<label>침대 유형</label> <input type=text name="bed_type" class="form-control" value="<%=bedType%>" required>
			</div>

			<button type="submit" class="btn btn-primary w-100">수정 완료</button>
		</form>
	</div>

	<jsp:include page="footer.jsp" />
</body>
</html>
