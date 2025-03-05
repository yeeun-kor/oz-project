<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="./favicon/favicon.png" />
<meta charset="UTF-8">
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
<link rel="stylesheet" href="css/mystyle.css" />

<title>로그인</title>
</head>
<body>
	<jsp:include page="nav.jsp" />
	<div class="container" style="margin-top: 150px;margin-bottom: 350px;">
		<div class="row my-5">
			<div class="col text-center">
				<h2>LOG IN</h2>
			</div>
			<p>*필수 입력 사항</p>
		</div>
		<!-- form입력값 -->

		<form action="processLogin.jsp" method="post" class="needs-validation" novalidate>
			<div class="form-row">
				<div class="col mb-3">
					<label for="ID">아이디 : </label>
					<div class="d-flex align-items-center">
						<input type="text" class="form-control" id="ID" name="j_username" required placeholder="아이디" />
					</div>

				</div>
			</div>
			<div class="form-row">
				<div class="col">
					<label for="PASSWORD">비밀번호 : </label>
					<div class="d-flex align-items-center">
						<input type="text" class="form-control" id="PASSWORD" name="j_password" required placeholder="비밀번호" />
					</div>
				</div>

			</div>
			<div class="form-row">
				<div class="col-12 mt-3">
					<button type="submit" class="btn btn-primary">로그인</button>
				</div>
			</div>
		</form>


	</div>

	<jsp:include page="footer.jsp" />
</body>
</html>