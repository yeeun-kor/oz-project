<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="java.io.*"%>
<%@ page import="javax.sql.DataSource"%>
<%@ include file="dbconn.jsp" %>

<%
request.setCharacterEncoding("UTF-8"); // POST 요청 한글 깨짐 방지
try {

    // 사용자 입력 값 받기
    String id = request.getParameter("ID");
    String password = request.getParameter("password");
    String birth = request.getParameter("birth");
    String name = request.getParameter("name");
    String address = request.getParameter("address");
    String phone = request.getParameter("phone");
    System.out.println("ID: " + id);
    System.out.println("Password: " + password);
    System.out.println("Birth: " + birth);
    System.out.println("Name: " + name);
    System.out.println("Address: " + address);
    System.out.println("Phone: " + phone);

    // INSERT 쿼리 준비
    String sql = "INSERT INTO nos_member (id, password, birth, name, address, phone) VALUES (?, ?, ?, ?, ?, ?)";
    pstmt = conn.prepareStatement(sql);

    // 사용자 입력값을 PreparedStatement에 바인딩
    pstmt.setString(1, id);
    pstmt.setString(2, password); 
    pstmt.setString(3, birth);
    pstmt.setString(4, name);
    pstmt.setString(5, address);
    pstmt.setString(6, phone);

    // 쿼리 실행
    int rowsAffected = pstmt.executeUpdate();

    if (rowsAffected > 0) {

    
        // 가입 완료 후 메인 페이지로 이동
        out.println("<script>alert('가입이 완료되었습니다.'); window.location='index.jsp';</script>");
    } else {
        // 가입 실패 시 다시 가입 페이지로 이동
        out.println("<script>alert('가입 실패. 다시 시도해 주세요.'); window.location='join.jsp';</script>");
    }
} catch (Exception e) {
    e.printStackTrace();
    out.println("<script>alert('모두 입력해주세요'); window.location='join.jsp';</script>");
} finally {
    try {
        if (pstmt != null) pstmt.close();
        if (conn != null) conn.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
%>
