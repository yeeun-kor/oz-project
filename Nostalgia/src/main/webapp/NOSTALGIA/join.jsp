<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" href="./favicon/favicon.png" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title>노스텔지아 회원가입</title>
<script>
function checkIdAvailability() {
    var id = document.getElementById("ID").value;
    if (id === "") {
        alert("아이디를 입력해주세요.");
        return;
    }

    fetch("checkId.jsp?ID=" + encodeURIComponent(id))
        .then(response => response.text())
        .then(data => {
            console.log("서버 응답값:", `"${data}"`);  // 디버깅을 위해 출력 (앞뒤 공백 확인)

            let trimmedData = data.trim(); // 공백 제거

            if (trimmedData === "available") { 
                alert("사용 가능한 아이디입니다.");
            } else if (trimmedData === "taken") {
                alert("이미 존재하는 아이디입니다.");
            } else {
                alert("서버 오류 발생: " + trimmedData);
            }
        })
        .catch(error => {
            alert("오류가 발생했습니다.");
            console.error("Error:", error);
        });
}



</script>

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" crossorigin="anonymous" />
    <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
</head>
<body style="background-color: #f0ebe4;">

	<jsp:include page="nav.jsp" />

	<div class="container" style="margin-top: 150px;">
		<div class="row my-5">
			<div class="col text-center">
				<h2>INSERT MEMBER INFO</h2>
			</div>
			<p>*필수 입력 사항</p>
		</div>

		<form action="processJoin.jsp" method="post" class="needs-validation" novalidate>
			<div class="form-row">
				<div class="col">
					<label for="ID">ID or E-MAIL*</label>
					<div class="d-flex align-items-center">
						<input type="text" class="form-control col-9 mr-2" id="ID" name="ID" required placeholder="이메일 형식이어야 합니다." /> <input type="button" class="form-control col-3" id="check" value="중복확인" onclick="checkIdAvailability()" />
					</div>
				</div>
			</div>

			<div class="form-row mt-3">
				<div class="col-12">
					<label for="password">PASSWORD*</label>
					<div class="form-row">
						<div class="col-md-6">
							<input type="password" class="form-control" id="password" name="password" placeholder="8-16자: 영문, 숫자, 특수문자" required />
						</div>
						<div class="col-md-6">
							<input type="password" class="form-control" id="pw_check" name="password_check" placeholder="비밀번호 확인" required />
						</div>
					</div>
				</div>
			</div>

			<div class="form-row mt-3">
				<div class="col">
					<label for="birth">생년월일*</label> <input type="text" class="form-control" id="birth" name="birth" required placeholder="예: 980501" />
				</div>
			</div>

			<div class="form-row mt-3">
				<div class="col">
					<label for="name">이름*</label> <input type="text" class="form-control" id="name" name="name" required placeholder="이름을 입력하세요" />
				</div>
			</div>

			<div class="form-row mt-3">
				<div class="col">
					<label for="address">주소*</label> <input type="text" class="form-control" id="address" name="address" required placeholder="주소를 입력하세요" />
				</div>
			</div>

			<div class="form-row mt-3">
				<div class="col">
					<label for="phone">연락처*</label> <input type="text" class="form-control" id="phone" name="phone" required placeholder="예: 01012345678" />
				</div>
			</div>

			<div class="form-row mt-4">
				<div class="col">
					<button type="submit" class="btn btn-primary">가입하기</button>
				</div>
			</div>
		</form>
	</div>

	<jsp:include page="footer.jsp" />

	<!-- JavaScript -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>