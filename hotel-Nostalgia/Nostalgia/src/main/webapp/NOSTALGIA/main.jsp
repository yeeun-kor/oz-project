<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link rel="icon" href="./favicon/favicon.ico" type="image/x-icon" />

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
<link rel="stylesheet" href="css/mystyle.css" />

<title>Nostalgia</title>
</head>
<body style="padding-top: 100px">
	<div class="container-fluid">
		<div class="col embed-responsive embed-responsive-16by9">
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/hgBoYndyg4U?autoplay=1&amp;mute=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;autohide=1&amp;loop=1&amp;playlist=hgBoYndyg4U&amp;autohide=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" style="font-family: Pretendard, sans-serif, serif"></iframe>
		</div>
	</div>
	<div class="container-fluid p-5">
		<!-- 모달창 구현현 -->
		<div class="row">
			<div class="col">
				<!-- Modal -->
				<div class="modal fade" id="staticBackdrop3" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<img src="images/main_modal1.jpg" alt="" class="img-fluid" />
							</div>
							<div class="modal-footer">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 p-5 text-center mt-5 mb-5" style="border-right: solid px rgba(100, 100, 100, 0.774)">
				<h3 class="journey">Journey on an Exclusive Hanok Experience</h3>
				<p class="p-3">
					Nostalgia는 서울 도심 속 한가운데서 만나는<br /> 최고급 한옥 호텔 브랜드입니다.<br /> 한국을 방문한 모든 이들에게<br /> 가장 한국다운 거주 공간을 경험하게 하고,<br /> 한옥 공간을 통해 만나게 되는 아름답고 설레는 감동과<br /> 잊지 못할 멋진 추억들을 제공합니다.
				</p>
			</div>
			<div class="col-md-6 p-5 text-center mt-5">
				<h3>Nostalgia Artpiece</h3>
				<p class="p-3">
					한옥에서 머무르는 시간동안,<br /> 계절을 따라 한옥에 스며든 자연의 풍광과 집과<br /> 그 속에 머무르는 사람이 함께 만들어가는 주거 공간에 대한<br /> 한국인의 철학과 삶의고유한 정서를<br /> 고스란히 느껴보실 수 있습니다.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col text-center my-5">
				<h3>Exclusive Hanok Service</h3>
			</div>
		</div>
		<div class="row my-5">
			<div class="col">
				<div class="card-deck">
					<div class="card">
						<img src="images/main_card02.png" class="card-img-top img-fluid" alt="..." />

						<div class="card-body">
							<p class="card-text">
								<small class="text-muted">DISCOVERY</small>
							</p>
							<h5 class="card-title">Seoul Night Drive Tour</h5>
							<p class="card-text">노스텔지어에서 제공하는 Hangang Chimaek&Seoul Night Drive Tour는 외국 관광객들이 서울의 아름다운 한강과 도심을 즐기는 특별한 경험을 제공합니다.</p>

						</div>
					</div>
					<div class="card">
						<img src="images/main_card03.jpg" class="card-img-top img-fluid" alt="..." />
						<div class="card-body">
							<p class="card-text">
								<small class="text-muted">OFFERINGS</small>
							</p>
							<h5 class="card-title">Makgeolli Platter Service</h5>
							<p class="card-text">노스텔지어에서 선보이는 북촌막걸리와 그와 어울리는 안주를 함께 즐기실 수 있는 세트메뉴입니다.</p>

						</div>
					</div>
					<div class="card">
						<img src="images/main_card01.jpg" class="card-img-top img-fluid" alt="..." />
						<div class="card-body">
							<p class="card-text">
								<small class="text-muted">CONCIERGE SERVICE</small>
							</p>
							<h5 class="card-title">Airport Pick-up Service</h5>
							<p class="card-text">항공편을 이용하여 해외 및 국내에서 노스텔지어 한옥호텔을 방문하시는 고객분들을 위하여 공항 프리미엄 픽업 서비스를 제공합니다.</p>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h3 class="text-center my-5">Exclusive Hanok Tour</h3>
			</div>
		</div>
		<div class="row" style="margin-bottom: 130px">
			<div class="col">
				<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="images/main_carousel01.jpg" class="d-block w-100" alt="..." />
							<div class="carousel-caption">
								<h5>블루재 (Blue齋)</h5>
								<p>북촌 한옥마을에 자리잡은 고귀한 푸른 한옥</p>
								<a href="reservation.jsp" class="card-link border-bottom text-light">Reserve</a>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/main_carousel02.jpg" class="d-block w-100" alt="..." />
							<div class="carousel-caption">
								<h5>히든재 (Hidden齋)</h5>
								<p>골목 끝에서 마주치는 신비로운 공간</p>
								<a href="reservation.jsp" class="card-link border-bottom text-light">Reserve</a>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/main_carousel03.jpg" class="d-block w-100" alt="..." />
							<div class="carousel-caption">
								<h5>힐로재 (Hillo齋)</h5>
								<p>북촌팔경 중 가장 으뜸인 7경에 자리잡은 따뜻한 한옥</p>
								<a href="reservation.jsp" class="card-link border-bottom text-light">Reserve</a>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span>
					</button>
				</div>
			</div>
		</div>
		<div class="row p-3">
			<div class="col text-center">
				<h3>About Nostalgia</h3>
			</div>
		</div>
		<div class="col embed-responsive embed-responsive-16by9">
			<div id="player"></div>
		</div>

		<script>
			// YouTube IFrame API 로드
			var tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName("script")[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			// YouTube 플레이어 생성
			var player;
			function onYouTubeIframeAPIReady() {
				player = new YT.Player("player", {
					videoId : "8zNjhYtNZAM", // 영상 ID
					playerVars : {
						autoplay : 1,
						mute : 1,
						controls : 0,
						modestbranding : 1,
						rel : 0,
						showinfo : 0,
						iv_load_policy : 3, // 인터랙티브 카드 숨기기
						disablekb : 1, // 키보드 제어 비활성화
					},
				});
			}
		</script>
	</div>
	<div class="container-fluid p-5 my-5">
		<div class="row">
			<!-- 좌측 Story부분  col-6 -->
			<div class="col-md-6 my-5">
				<div class="row h-100">
					<div class="col d-flex flex-column">
						<h3 class="p-2 w-100 text-center h1">story</h3>
						<p class="p-2 w-100 text-center">Nostalgia 호텔에 관한 소식이나 뉴스를 전해드립니다.</p>
						<!-- Discover more 버튼 -->
						<button type="button" class="btn btn-primary btn-link text-dark mt-auto" data-toggle="modal" data-target="#staticBackdrop">Discover more</button>

						<!-- Modal -->
						<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
							<div class="modal-dialog modal-lg modal-dialog-scrollable">
								<div class="modal-content custom-discovery-more">
									<div class="modal-header">
										<div class="row justify-content-center w-100">
											<h5 class="modal-title" id="staticBackdropLabel">
												노스텔지어, ‘북촌 브루어리’ 플래그십 스토어 오픈
												<p class="text-center">NOSTALGIA STORY</p>
											</h5>
										</div>

										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<!-- 모달창넣어보기 -->
										<div id="carouselExampleControlsNoTouching" class="carousel slide" data-touch="false" data-interval="false">
											<div class="carousel-inner text-center">
												<div class="carousel-item active">
													<img src="images/image8.jpg" class="d-block img-fluid w-80 mx-auto my-5" alt="..." />
													<p class="px-5 mt-5">
														경복궁과 창덕궁 사이에 위치한 북촌한옥마을은 전통 양반 가문이 거주하던 곳으로, 여전히 관광객들에게 인기 있는 명소입니다. <br />이곳에서 럭셔리 호텔 브랜드 ‘노스텔지어’는 전통 한옥을 현대적인 호텔로 탈바꿈시켰습니다. <br /> <br />히든재는 방 안쪽으로 들어서면 침실로 이어지는 폐쇄적인 공간이 나타납니다. <br />원래 방공호로 사용되었던 이 곳은 벽이 두꺼워 방음 효과가 뛰어나며, 독특한 음향을 즐길 수 있습니다. <br />중정을 둘러싸듯 지어진 한옥으로, 정원 쪽은 개방된 유리창으로 되어 있어 일본의 평집처럼 통풍이 잘되는 주거의 특징을 보여줍니다. <br />옛사람들의 지혜가 담긴 건축물입니다. <br /> <br />슬로재는 한국 작가들의 작품을 배치해 공간의 아름다움과 시각적인 즐거움을 더하며, 여행의 추억을 더욱 깊고 특별하게 만들어주는 한옥입니다. <br />한옥 내부에 마련된 도예 스튜디오는 조용하고 고요한 분위기 속에서 도예 클래스를 직접 체험할 수 있는 공간으로, 창작의 즐거움을 선사합니다. <br />완성된 작품은 한 달 내로 집으로 배송되어 머물렀던 시간의 소중한 추억을 아름답게 간직할 수 있습니다. <br />더불어, 공간 속 향기와 음악은 한국 아티스트들이 세심하게 큐레이션한 것으로, 머무는 동안 감각을 일깨우는 특별한 경험을 제공합니다.<br /> <br />
													</p>
												</div>
												<div class="carousel-item">
													<img src="images/image9.jpg" class="d-block img-fluid w-80 mx-auto my-5" alt="..." />
													<p class="px-5 mt-5">
														Nostalgia Hanok은 북촌 골목 속 숨겨진 보석처럼 자리 잡고 있으며, 이곳에서의 경험은 한옥의 본질을 고스란히 만끽할 수 있는 기회를 제공합니다. <br />내부에 들어서면 자연광이 한지 창문을 통해 부드럽게 스며들어 나무 표면에 반사되며 아늑하고 마법 같은 분위기를 만듭니다. <br />세월을 거친 나무 기둥들과 정원의 따뜻한 색감, 과거와 현재를 잇는재료들의 조화는 그 자체로 이야기를 풀어냅니다.<br /> <br /> <br /> CEO Paul Park는 Nostalgia Hanok을 통해 전통 한국 건축의 미적, 문화적 가치를 극대화하는 것을 목표로 한다고 밝혔습니다.<br /> 기와 지붕, 나무 기둥과 보, 격자 창문, 중앙의 정원이 그 예시죠.. "동양과 서양, 전통과 현대의 완벽한 균형을 이루어 새로운 형태의 아름다움을 선사하고자 했다"고 그는 말합니다.<br /> 한옥의 모든 세부 사항은 진정성을 잃지 않으면서도 편안함을 제공하고 있습니다. <br />고전적인 온돌 바닥 난방은 따뜻함을 주며, 현대적이고 실용적인 가구와 최신 기술이 적용된 욕실과 주방은 과거와 현재를 잇는 이야기를 전합니다. <br /> <br /> <br />Nostalgia Hanok은 한국의 전통적인 주거 문화를 생생하게 경험할 수 있는 공간입니다. <br />창문을 열면 수백 년 된 나무의 향기와 새겨진 문양 위로 춤추는 그림자들이 보이며, 수제로 만든 막걸리 한 잔을 즐기거나 지역 예술가들과 협업한 디자인 제품들을 구매할 수 있습니다.
													</p>
												</div>
												<div class="carousel-item">
													<img src="images/image10.jpg" class="d-block img-fluid w-80 mx-auto my-5" alt="..." />
													<p class="px-5 mt-5">
														노스텔지어의 플래그십 스토어, ‘북촌 브루어리샵’이 새롭게 문을 열었습니다.<br /> <br /> 이곳은 노스텔지어에서 오랜기간 고급 만찬주로서 사랑받았던 ‘북촌 막걸리’를 중심으로, 한국의 고유한 풍미와 문화적 가치를 담은 다양한 전통주 라인업을 선보이며, 전통 문화를 현대적인 감각으로 재해석한 공간으로 나아갈 예정입니다. <br />방문객들은 한 잔의 술을 통해 한국 전통의 깊이 있는 아름다움을 경험하고, 한국을 기억하는 또다른 노스텔지어를 발견할 수 있습니다.
													</p>
												</div>
												<div class="carousel-item">
													<img src="images/image11.jpg" class="d-block img-fluid w-80 mx-auto my-5" alt="..." />
													<p class="px-5 mt-5">
														노스텔지어는 25년 전부터 브랜딩 기업을 운영하던 박현구 대표가 새롭게 시작한 럭셔리 호텔 브랜드입니다. <br />그는 "글로벌 기업들의 브랜드를 개발해온 경험을 바탕으로, 노스텔지어를 통해 새로운 이야기를 전하고 싶었습니다.<br /> K-뷰티, K-푸드, K-음악, K-드라마, K-영화 등 한류의 다양한 분야가 인기를 끌고 있는 가운데, 한국을 찾는 이들에게 더 깊은 한국 문화의 경험을 선사하고자 노스텔지어 한옥 호텔을 시작하게 되었습니다.<br /> <br /> <br />" … 가회동은 조선시대부터 이어온 100년 이상의 역사를 가진 한옥들이 모여 있는 곳으로, 주로 귀족, 학자, 그리고 정부 관리들의 거주해 보존 상태가 매우 우수합니다.<br /> 이러한 한옥들중 많은 곳이 식당, 카페, 찻집 등으로 개조되었지만, 일부는 여전히 개인 주택으로 사용되며, 전통적인 삶의 흔적을 간직하고 있습니다.<br /> <br /> 이러한 한옥의 전통성을 그대로 재현하려는 다른 한옥 호텔들과 달리, 노스텔지어는 단순한 한옥의 보존에 그치지 않습니다. <br />이곳은 전통 한옥의 가치와 아름다움을 유지하는 동시에, 현대적인 감각과 혁신적인 편의 시설을 더해 새로운 차원의 경험을 선사합니다. <br />이를 위해 서울의 가장 창의적이고 진보적인 디자이너들과 협업하며, 전통과 현대가 조화롭게 결합된 공간을 만들어가고 있습니다. <br /> <br />각각의 한옥은, 하나의 독특한 이야기와 정체성을 가진 공간으로 탄생하였습니다. <br />'노스텔지어의 모든 한옥은 저마다의 고유한 이야기를 품고 있으며, 그 어떤 것도 동일하지 않습니다.'<br />라고 박현구 대표는 말했습니다.
													</p>
												</div>
											</div>
											<button class="carousel-control-prev" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="prev">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-arrow-left-circle-fill custom-btn" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                          </svg>
											</button>
											<button class="carousel-control-next" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="next">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-arrow-right-circle-fill custom-btn" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                          </svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 우측 캐로셀 col-6 -->
			<div class="col-md-6 my-5">
				<div id="carouselExampleIndicators" class="carousel carousel-fade" data-ride="carousel">
					<div class="carousel-inner w-100">
						<div class="carousel-item active d-flex justify-content-center" data-interval="2000">
							<img src="images/image1.jpg" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image2.jpg" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image3.jpg" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image4.jpg" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image5.png" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image6.png" class="d-block img-fluid h-100" alt="..." />
						</div>
						<div class="carousel-item d-flex justify-content-center" data-interval="2000">
							<img src="images/image7.jpg" class="d-block img-fluid h-100" alt="..." />
						</div>
					</div>
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
					</ol>
				</div>
			</div>
		</div>

		<!-- 인스타 follow 버튼 컨테이너 -->
		<div class="container mt-5">
			<div class="row">
				<div class="col text-center">
					<button type="button" class="btn btn-lg btn-block" style="background-color: #717545">
						<a href="https://www.instagram.com/nostalgia_hanokhotel?igsh=MTB0OHQ3ZXI5ZTQ2OA%3D%3D" target="_blank" class="text-light"> FOLLOW US @ NOSTALGIA_HANOKHOTEL </a>
					</button>
				</div>
			</div>
		</div>
		<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
		<script>
			$(".carousel").carousel({
				interval : 2200,
				wrap : true,
				pause : false,
			});
			$("#staticBackdrop3").modal({
				keyboard : false,
			});
		</script>
	</div>
</body>
</html>
