<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="dbconn.jsp"%>


<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>회원 정보 수정</title>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
    <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
</head>
  <body style="padding-top:150px">
	<jsp:include page="nav.jsp"></jsp:include>
	<%
	// 세션에서 로그인한 사용자 ID 가져오기 (로그인 구현이 되어있다고 가정)
	String userId = (String) session.getAttribute("userID");

	if (userId == null) {
		response.sendRedirect("log_in.jsp");
		return;
	}

	// 사용자 정보 조회
	String sql = "SELECT * FROM nos_member WHERE id = ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, userId);
	rs = pstmt.executeQuery();

	String name = "", birth = "", address = "", phone = "";
	if (rs.next()) {
		name = rs.getString("name");
		birth = rs.getString("birth");
		address = rs.getString("address");
		phone = rs.getString("phone");
	}
	%>
	<div class="container"  style="margin-bottom: 300px">
		<div class="row my-5">
			<div class="col text-center">
				<h1>My Page</h2>
			</div>
			<p>*필수 입력 사항</p>
		</div>
		<form action="processUpdateMember.jsp" method="post">
			<div class="form-group">
				<label for="id">아이디</label> <input type="text" class="form-control" readonly="readonly" id="id" name="id" value="<%=userId%>">
			</div>
			<div class="form-group">
				<label for="password">비밀번호 변경</label> <input type="password" class="form-control" id="password" name="password" placeholder="새 비밀번호를 입력하세요">
			</div>

			<div class="form-group">
				<label for="name">이름</label> <input type="text" class="form-control" id="name" name="name" value="<%=name%>" required>
			</div>

			<div class="form-group">
				<label for="birth">생년월일 (6자리)</label> <input type="text" class="form-control" id="birth" name="birth" value="<%=birth%>" maxlength="6">
			</div>

			<div class="form-group">
				<label for="address">주소</label> <input type="text" class="form-control" id="address" name="address" value="<%=address%>" required>
			</div>

			<div class="form-group">
				<label for="phone">연락처</label> <input type="text" class="form-control" id="phone" name="phone" value="<%=phone%>" required>
			</div>

			<button type="submit" class="btn btn-primary">수정하기</button>
			<a href="index.jsp" class="btn btn-secondary">취소</a>
		</form>
	</div>

	<%
	if (rs != null)
		rs.close();
	if (pstmt != null)
		pstmt.close();
	if (conn != null)
		conn.close();
	%>
	<jsp:include page="footer.jsp" />
</body>
</html>
