<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");

	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	


	// Database connection
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	String dbUser = "C##dbexam";
	String dbPassword = "m1234";
    Class.forName("oracle.jdbc.driver.OracleDriver");
    System.out.println("✅ 드라이버 등록 연결 성공!");
    conn = DriverManager.getConnection(url, dbUser, dbPassword);
    System.out.println("✅ 데이터베이스  연결 성공!");


	%>
</body>
</html>