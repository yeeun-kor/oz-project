<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link rel="icon" href="./favicon/favicon.ico" type="image/x-icon" />

<title>Nostalgia</title>
<style>
.navbar-brand {
	display: flex;
	align-items: center;
}

.navbar-toggler {
	margin-right: 10px; /* 버튼과 로고 간격 */
}

.fixed-buttons {
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 1030; /* Navbar 위로 올리기 */
}

.fixed-buttons button {
	margin-left: 5px;
}
</style>
</head>
<body>

	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top p-3" style="opacity: 0.9">
			<div class="navbar-brand">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a href="index.jsp">
					<img src="images/main_logo.png" width="180" class="d-inline-block align-top" alt="Main Logo" />
				</a>
			</div>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active"><a class="nav-link" href="ourHanoks.jsp">
							OUR HANOKS <span class="sr-only">(current)</span>
						</a></li>
					<li class="nav-item"><a class="nav-link" href="offerings.jsp">OFFERINGS</a></li>
					<li class="nav-item"><a class="nav-link disabled" href="#">CONCIERGE SERVICE</a></li>

					<%
					/* 세션 갖고오기 로그인상태가 아니면 회원가입+로그인창 보이게*/
					String userID = (String) session.getAttribute("userID");
					String userName = (String) session.getAttribute("userName");
					if (userID == null) {
					%>

					<li class="nav-item"><a class="nav-link " href="join.jsp">JOIN-US</a></li>
					<li class="nav-item"><a class="nav-link" href="log_in.jsp">LOG-IN</a></li>

					<%
					}
					%>
				</ul>
			</div>
		</nav>
		<!-- 우측버튼 -->
		<form class="form-inline fixed-buttons p-3">
			<!-- 로그인 안하면 환영인사 안보이게 -->
			<%
			if (userID != null) {
			%>
			<button class="btn btn-sm btn-success" type="button">
				<a href="updateMember.jsp" class="text-light text-decoration-none"><%=userName%>님 로그인 중</a>
			</button>
			
			<button class="btn btn-sm btn-primary" type="button">
				<a href="logout.jsp" class="text-light text-decoration-none">로그아웃</a>
			</button>
			<%
			}
			%>
			<button class="btn btn-sm btn-danger" type="button">
				<a href="reservation.jsp" class="text-light text-decoration-none">예약하기</a>
			</button>
			<button class="btn btn-sm btn-secondary" type="button">
				<a href="customer_check.jsp" class="text-light text-decoration-none">예약확인</a>
			</button>
			<!--  관리자메뉴-->
			<%
			if ("admin".equals(userID)) {
			%>
			<button class="btn btn-sm btn-primary" type="button">
				<a href="roomList.jsp" class="text-light text-decoration-none">관리자 객실관리</a>
			</button>
			<%
			}
			%>
		</form>
	</div>


</body>
</html>
