<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<!-- 제이쿼리 및 부트스트랩 CDN -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
<link rel="stylesheet" href="css/mystyle.css" />
<title>객실 등록</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
</head>
<body>
	<jsp:include page="nav.jsp" />
	<div class="container" style="margin-top: 150px; margin-bottom: 350px;">
		<h2 class="text-center mb-4">객실 등록</h2>
		<form action="registerRoomProcess.jsp" method="post" enctype="multipart/form-data">
			<div class="mb-3">
				<label class="form-label">객실명</label> <input type="text" name="room_name" class="form-control" required>
			</div>
			<div class="mb-3">
				<label class="form-label">설명</label>
				<textarea name="description" class="form-control" rows="3"></textarea>
			</div>
			<div class="mb-3">
				<label class="form-label">가격 (KRW)</label> <input type="number" name="price" class="form-control" required>
			</div>
			<div class="mb-3">
				<label class="form-label">객실 크기</label> <input type="text" name="room_size" class="form-control">
			</div>
			<div class="mb-3">
				<label class="form-label">최대 인원</label> <input type="text" name="max_pax" class="form-control">
			</div>
			<div class="mb-3">
				<label class="form-label">침대 유형</label> <input type="text" name="bed_type" class="form-control">
			</div>
			<div class="mb-3">
				<label class="form-label">이미지 파일</label> <input type="file" name="room_image" class="form-control" accept=".jpg, .jpeg, .png" required>
			</div>
			<button type="submit" class="btn btn-primary w-100">등록</button>
		</form>
	</div>
	<jsp:include page="footer.jsp" />


	<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

</body>
</html>
