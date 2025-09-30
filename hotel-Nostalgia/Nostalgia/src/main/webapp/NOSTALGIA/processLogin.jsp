<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ include file="dbconn.jsp" %>

<%
    request.setCharacterEncoding("UTF-8");

    // 사용자가 입력한 아이디와 비밀번호 수집
    String userId = request.getParameter("j_username");
    String userPw = request.getParameter("j_password");


    try {
   
        // 사용자 정보 조회 (비밀번호 일치 여부 확인)
        String sql = "SELECT * FROM nos_member WHERE id = ? AND password = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, userId);
        pstmt.setString(2, userPw);

        rs = pstmt.executeQuery();

        // 로그인 성공 시 세션에 사용자 정보 저장
        if (rs.next()) {
            session.setAttribute("userID", rs.getString("id"));
            session.setAttribute("userName", rs.getString("name"));
            session.setAttribute("userAddress", rs.getString("address"));
            session.setAttribute("userPhone", rs.getString("phone"));

            // 로그인 성공 시 메인 페이지로 이동
            response.sendRedirect("index.jsp");
        } else {
            // 로그인 실패 시 다시 로그인 페이지로 이동
            out.println("<script>alert('아이디 또는 비밀번호가 올바르지 않습니다.'); window.location='log_in.jsp';</script>");
        }

    } catch (Exception e) {
        e.printStackTrace();
        out.println("<script>alert('서버 오류가 발생했습니다. 다시 시도해 주세요.'); window.location='log_in.jsp';</script>");
    } finally {
        try {
            if (rs != null) rs.close();
            if (pstmt != null) pstmt.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
%>
