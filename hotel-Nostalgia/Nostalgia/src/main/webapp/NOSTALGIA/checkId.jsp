<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*, javax.naming.*, javax.sql.*, java.io.*"%>
<%@ include file="dbconn.jsp"%>

<%
String id = request.getParameter("ID");
String result = "available"; // 기본값: 사용 가능

try {

	// 아이디 중복 검사 쿼리
	String sql = "SELECT COUNT(*) FROM nos_member WHERE id = ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, id);
	rs = pstmt.executeQuery();

	if (rs.next() && rs.getInt(1) > 0) {
		result = "taken"; // 이미 존재하는 아이디
	}
} catch (Exception e) {
	e.printStackTrace();
	result = "error"; // 오류 발생
} finally {
	if (rs != null)
		try {
	rs.close();
		} catch (Exception e) {
		}
	if (pstmt != null)
		try {
	pstmt.close();
		} catch (Exception e) {
		}
	if (conn != null)
		try {
	conn.close();
		} catch (Exception e) {
		}
}

out.print(result); // 결과 출력
%>
