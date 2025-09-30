package com.nostalgia.servlet; // 패키지 경로에 맞게 수정

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/uploadRoom") // URL 패턴 매핑
public class RoomUploadServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 이미지 업로드 처리 및 데이터 전달
		String imagePath = "NOSTALGIA/images/rev01.jpg"; // 예시 경로

		// request에 "imagePath"라는 이름으로 전달
		request.setAttribute("imagePath", imagePath);

		// JSP로 포워드
		RequestDispatcher dispatcher = request.getRequestDispatcher("/reservation.jsp");
		dispatcher.forward(request, response);
	}
}
