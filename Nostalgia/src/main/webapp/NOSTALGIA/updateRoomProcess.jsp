<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%
String roomId = request.getParameter("room_id");
String roomName = request.getParameter("room_name");
String description = request.getParameter("description");
String price = request.getParameter("price");
String roomSize = request.getParameter("room_size");
String maxPax = request.getParameter("max_pax");
String bedType = request.getParameter("bed_type");

Connection conn = null;
PreparedStatement pstmt = null;
int result = 0;

try {
    // JDBC 연결
    Class.forName("oracle.jdbc.driver.OracleDriver");
    conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "C##dbexam", "m1234");

    // 가격이 null이 아니고 빈 문자열이 아닌 경우에만 쉼표 제거 후 정수로 변환
    if (price != null && !price.trim().isEmpty()) {
        price = price.replaceAll(",", ""); // 가격에서 쉼표 제거
    } else {
        price = "0"; // 가격이 입력되지 않은 경우 0으로 처리
    }

    // SQL 쿼리문
    String sql = "UPDATE room_type SET room_name = ?, description = ?, price = ?, room_size = ?, max_pax = ?, bed_type = ? WHERE room_id = ?";

    // PreparedStatement 준비
    pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, roomName);
	pstmt.setString(2, description);
	pstmt.setDouble(3, Double.parseDouble(price)); // 가격은 Double로 변환
	pstmt.setString(4, roomSize);
	pstmt.setInt(5, Integer.parseInt(maxPax)); // 최대 인원은 Integer로 변환
	pstmt.setString(6, bedType);
    pstmt.setInt(7, Integer.parseInt(roomId));

    // 실행
    result = pstmt.executeUpdate();

} catch (Exception e) {
    e.printStackTrace();
} finally {
    if (pstmt != null) pstmt.close();
    if (conn != null) conn.close();
}

// 수정 결과에 따른 메시지 출력
if (result > 0) {
%>
    <div class="alert alert-success text-center">
        객실 정보가 성공적으로 수정되었습니다.
    </div>
<%
} else {
%>
    <div class="alert alert-danger text-center">
        객실 정보 수정에 실패했습니다. 다시 시도해주세요.
    </div>
<%
}
%>

<a href="roomList.jsp" class="btn btn-primary w-100">객실 목록으로 돌아가기</a>
