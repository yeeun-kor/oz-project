<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
<link rel="stylesheet" href="css/mystyle.css" />
<title>footer</title>
<style>
p {
	font-size: 15px;
}

button.btn-link {
	text-decoration: none;
}

button.btn-link:hover {
	text-decoration: none;
}
/* 모달 닫기 버튼 스타일 */
.modal-header .close {
	font-size: 2rem; /* 크기를 키움 */
	color: #fff; /* 색상을 흰색으로 변경 */
	opacity: 1; /* 버튼의 투명도 조정 (기본값은 0.5) */
}

.modal-header .close:hover {
	color: #ccc; /* 호버 시 색상 변경 (선택 사항) */
}

.modal-header .close:focus {
	outline: none; /* focus 테두리 제거 */
}
</style>
</head>
<body style="background-color: #f0ebe4">
	<!-- Option  바디 내용 적는 곳  -->
	<div class="container-fluid">
		<hr style="border: solid 0.2px rgb(97, 97, 97)" />
		<div class="row my-5">
			<div class="col align-content-center">
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-link text-dark my-3" data-toggle="modal" data-target="#staticBackdrop">Membership</button>

				<!-- Modal -->
				<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
						<div class="modal-content" style="background-color: #f0ebe4">
							<div class="modal-header text-light" style="background-color: black">
								<h5 class="modal-title" id="staticBackdropLabel">NOSTALGIA</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true" class="text-light">&times;</span>
								</button>
							</div>
							<div class="modal-body p-3">
								<p class="h4 my-5">노스텔지어 회원 제공 혜택</p>
								<p>
									1. 노스텔지어 공식 홈페이지에서 한옥을 예약하실 경우, 5% 할인 혜택을 드립니다.<br /> <br /> 2. 노스텔지어의 부대시설 이용시 상시 10% 할인 혜택을 드립니다.<br /> - KartCart Shop (전 제품)<br /> - 원카페 (음료에 한함) <br /> - 북촌막걸리 샵 (현장 체크인 시 쿠폰을 지급 드리며, 현장 구매 한함) <br /> <br /> 3. 프로모션 및 이벤트 시 회원분들에게 가장 먼저 안내 메일을 통해 이용 혜택을 드립니다.
								</p>
							</div>
							<div class="modal-footer d-flex justify-content-center align-items-center mt-5">
								<img src="images/main_logo.png" class="img-fluid" alt="Logo" style="width: 150px" />
							</div>
						</div>
					</div>
				</div>
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-link text-dark" data-toggle="modal" data-target="#staticBackdrop1">Privacy Policy</button>

				<!-- Modal -->
				<div class="modal fade" id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
					<div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
						<div class="modal-content" style="background-color: #f0ebe4">
							<div class="modal-header text-light" style="background-color: black">
								<h5 class="modal-title" id="staticBackdropLabel1">NOSTALGIA</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true" class="text-light">&times;</span>
								</button>
							</div>
							<div class="modal-body p-3">
								<p class="h4 my-3">노스텔지어 개인정보보호정책</p>

								<div class="col my-5" style="font-size: 16px">
									□ 제1조 총칙
									<div class="col" style="font-size: 14px">
										'주식회사 노스텔지어'는 (이하 '회사'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. <br />회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. <br />회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제2조 총칙
									<div class="col" style="font-size: 14px">
										회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br /> <br />1.필수항목 : 로그인ID, 비밀번호, 이름, 생년월일, 이메일, 휴대전화, 거주지역<br /> 2.선택항목 : 광고성 메일 수신여부 <br />3.개인정보 수집방법 : 홈페이지, 서면양식, 팩스, 전화<br /> 4.회사는 법령의 규정 또는 고객의 동의 없이는 사상, 신념, 과거의 병력 등 고객의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 개인정보를 수집하지 않습니다.
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제3조 개인정보의 수집 및 이용목적
									<div class="col" style="font-size: 14px">
										회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br /> <br /> 1.서비스 제공에 관한 계약 이행<br /> 2.회원 관리, 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 가입 의사 확인 , 연령확인 , 불만처리 등 민원처리, 고지사항 전달<br /> 3.마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제4조 총칙
									<div class="col" style="font-size: 14px">회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제5조 개인정보의 파기절차 및 방법
									<div class="col" style="font-size: 14px">
										회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br /> <br /> 1. 파기절차 : 고객께서 회원 아이디를 삭제하거나 회원가입해지를 요청한 경우 또는 고객께 사전에 고지한 개인정보를 제공받은 목적이 달성된 경우에 수집한 개인정보를 지체 없이 파기합니다. <br />2.파기방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제6조 개인정보 제공
									<div class="col" style="font-size: 14px">
										회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br /> <br /> 1.이용자들이 사전에 동의한 경우<br /> 2.법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제7조 개인정보 수집·이용·제공에 대한 동의철회
									<div class="col" style="font-size: 14px">
										<br /> 1.개인정보의 수집·이용·제공에 대해 고객은 동의한 내용을 언제든지 철회할 수 있습니다. 동의철회는 웹사이트 내 "회원탈퇴" 버튼을 클릭하거나 개인정보관리책임자 및 담당자에게 서면, 전화, 이메일 등으로 연락하면 하실 수 있으며 회사는 지체 없이 개인정보의 삭제 등 필요한 조치를 합니다.<br /> 2.회사는 고객이 동의철회를 하여 개인정보를 파기하는 등의 조치를 취한 경우 고객의 요청에 따라 그 사실을 고객에게 통지합니다.<br /> 3.회사는 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보를 수집하는 방법보다 쉽게 하겠습니다.
									</div>
								</div>
							</div>
							<div class="modal-footer d-flex justify-content-center align-items-center mt-5">
								<img src="images/main_logo.png" class="img-fluid" alt="Logo" style="width: 150px" />
							</div>
						</div>
					</div>
				</div>
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-link text-dark my-3" data-toggle="modal" data-target="#staticBackdrop2">Terms & Conditions</button>

				<!-- Modal -->
				<div class="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
					<div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
						<div class="modal-content" style="background-color: #f0ebe4">
							<div class="modal-header text-light" style="background-color: black">
								<h5 class="modal-title" id="staticBackdropLabel2">NOSTALGIA</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true" class="text-light">&times;</span>
								</button>
							</div>
							<div class="modal-body p-3">
								<p class="h4 my-5">노스텔지어 회원약관</p>
								<p class="my-3" style="font-size: 18px">제1장 총칙</p>
								<div class="col my-5" style="font-size: 16px">
									□ 제1조(목적)
									<div class="col" style="font-size: 14px">이 약관은 노스텔지어가 제공하는 웹사이트 회원에 대한 서비스(이하 “서비스”라 합니다) 제공 및 이용조건, 회원가입에 관련된 사항 및 절차 그리고 기타 필요한 사항의 규정을 목적으로 합니다.</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제2조 총칙
									<div class="col" style="font-size: 14px">
										회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br /> <br />1.필수항목 : 로그인ID, 비밀번호, 이름, 생년월일, 이메일, 휴대전화, 거주지역<br /> 2.선택항목 : 광고성 메일 수신여부 <br />3.개인정보 수집방법 : 홈페이지, 서면양식, 팩스, 전화<br /> 4.회사는 법령의 규정 또는 고객의 동의 없이는 사상, 신념, 과거의 병력 등 고객의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 개인정보를 수집하지 않습니다.
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제3조 개인정보의 수집 및 이용목적
									<div class="col" style="font-size: 14px">
										회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br /> <br /> 1.서비스 제공에 관한 계약 이행<br /> 2.회원 관리, 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 가입 의사 확인 , 연령확인 , 불만처리 등 민원처리, 고지사항 전달<br /> 3.마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제4조 총칙
									<div class="col" style="font-size: 14px">회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제5조 개인정보의 파기절차 및 방법
									<div class="col" style="font-size: 14px">
										회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br /> <br /> 1. 파기절차 : 고객께서 회원 아이디를 삭제하거나 회원가입해지를 요청한 경우 또는 고객께 사전에 고지한 개인정보를 제공받은 목적이 달성된 경우에 수집한 개인정보를 지체 없이 파기합니다. <br />2.파기방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제6조 개인정보 제공
									<div class="col" style="font-size: 14px">
										회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br /> <br /> 1.이용자들이 사전에 동의한 경우<br /> 2.법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
									</div>
								</div>
								<div class="col my-5" style="font-size: 16px">
									□ 제7조 개인정보 수집·이용·제공에 대한 동의철회
									<div class="col" style="font-size: 14px">
										<br /> 1.개인정보의 수집·이용·제공에 대해 고객은 동의한 내용을 언제든지 철회할 수 있습니다. 동의철회는 웹사이트 내 "회원탈퇴" 버튼을 클릭하거나 개인정보관리책임자 및 담당자에게 서면, 전화, 이메일 등으로 연락하면 하실 수 있으며 회사는 지체 없이 개인정보의 삭제 등 필요한 조치를 합니다.<br /> 2.회사는 고객이 동의철회를 하여 개인정보를 파기하는 등의 조치를 취한 경우 고객의 요청에 따라 그 사실을 고객에게 통지합니다.<br /> 3.회사는 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보를 수집하는 방법보다 쉽게 하겠습니다.
									</div>
								</div>
							</div>
							<!-- footer 상단 부분분 -->
							<div class="modal-footer d-flex justify-content-center align-items-center mt-5">
								<img src="images/main_logo.png" class="img-fluid" alt="Logo" style="width: 150px" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col text-right">
				<p>
					법인명 : 주식회사 노스텔지어<br /> 대표자명 : 박현구 <br /> 사업자번호 : 879-81-02553 <br /> 대표번호 : 02-3673-3666 <br /> 통신판매업신고번호 제2022-서울종로 (사업자정보확인)<br /> 주소 : 서울시 종로구 북촌로8길 1, 노스텔지어 웰컴센터<br /> 개인정보보호책임자 : 정성영 (jsy@nostalgiaseoul.com)
				</p>
			</div>
		</div>

		<hr style="border: solid 0.2px rgb(97, 97, 97)" />

		<div class="row my-5">
			<div class="col-12 col-md-8 d-flex justify-content-md-around">
				<p class="mr-3">Contact Us</p>
				<p class="mr-3">+82-2-3673-3666 master@nostalgiaseoul.com</p>
				<p>1, Bukchon-ro 8-gil, Jongno-gu, Seoul, Republic of Korea</p>
			</div>
			<div class="col-12 col-md-4 d-flex justify-content-md-end text-center">
				<a href="https://www.instagram.com/nostalgia_hanokhotel">
					<img src="images/insta.png" alt="" class="img-fluid mr-5" style="width: 40px" />
				</a>
				<p>
					Copyright 2024, <br />Nostalgia Inc.
				</p>
			</div>
		</div>
	</div>
	<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
	<script>
		$(document).on("hidden.bs.modal", function() {
			$("button").blur(); // 버튼의 focus 제거
		});
	</script>
</body>
</html>
