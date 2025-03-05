<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="dbconn.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	// 한글 인코딩 처리
	request.setCharacterEncoding("UTF-8");

	// 파라미터 수집
	String id = request.getParameter("id"); // 아이디 (수정 불가)
	String password = request.getParameter("password"); // 새 비밀번호 (옵션)
	String name = request.getParameter("name");
	String birth = request.getParameter("birth");
	String address = request.getParameter("address");
	String phone = request.getParameter("phone");

	if (id == null || name == null || address == null || phone == null) {
		out.println("<script>alert('필수 입력 항목이 누락되었습니다.'); history.back();</script>");
		return;
	}

	try {

		// 비밀번호가 입력된 경우에만 비밀번호 포함 업데이트
		String sql;
		if (password != null && !password.trim().isEmpty()) {
			sql = "UPDATE nos_member SET password = ?, name = ?, birth = ?, address = ?, phone = ? WHERE id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, password);
			pstmt.setString(2, name);
			pstmt.setString(3, birth);
			pstmt.setString(4, address);
			pstmt.setString(5, phone);
			pstmt.setString(6, id);
		} else {
			sql = "UPDATE nos_member SET name = ?, birth = ?, address = ?, phone = ? WHERE id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, name);
			pstmt.setString(2, birth);
			pstmt.setString(3, address);
			pstmt.setString(4, phone);
			pstmt.setString(5, id);
		}

		int result = pstmt.executeUpdate();

		if (result > 0) {
			out.println("<script>alert('회원 정보가 성공적으로 수정되었습니다.'); location.href='updateMember.jsp';</script>");
		} else {
			out.println("<script>alert('회원 정보 수정에 실패했습니다. 다시 시도해 주세요.'); history.back();</script>");
		}
	} catch (Exception e) {
		e.printStackTrace();
		out.println("<script>alert('오류가 발생했습니다.'); history.back();</script>");
	} finally {
		// 자원 해제
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
	%>

</body>
</html>