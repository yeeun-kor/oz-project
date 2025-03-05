<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.File"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ include file="dbconn.jsp"%>

<%
request.setCharacterEncoding("UTF-8"); // POST 요청 한글 깨짐 방지
response.setContentType("text/html; charset=UTF-8"); // 응답 한글 깨짐 방지

String uploadPath = application.getRealPath("/") + "images"; // ./img 경로
out.println("파일 저장 경로: " + uploadPath); // 경로 확인
File uploadDir = new File(uploadPath);
if (!uploadDir.exists()) {
	uploadDir.mkdir();
}

boolean isMultipart = ServletFileUpload.isMultipartContent(request);
if (isMultipart) {
	FileItemFactory factory = new DiskFileItemFactory();
	ServletFileUpload upload = new ServletFileUpload(factory);
	try {
		java.util.List<FileItem> items = upload.parseRequest(request);
		String roomName = null;
		String description = null;
		String price = null;
		String roomSize = null;
		String maxPax = null;
		String bedType = null;
		String imagePath = null;

		for (FileItem item : items) {
	if (item.isFormField()) {
		// 일반 폼 필드 처리
		if ("room_name".equals(item.getFieldName())) {
			roomName = item.getString("UTF-8"); // 한글 입력을 UTF-8로 처리
		} else if ("description".equals(item.getFieldName())) {
			description = item.getString("UTF-8"); // 한글 입력을 UTF-8로 처리
		} else if ("price".equals(item.getFieldName())) {
			price = item.getString();
		} else if ("room_size".equals(item.getFieldName())) {
			roomSize = item.getString();
		} else if ("max_pax".equals(item.getFieldName())) {
			maxPax = item.getString();
		} else if ("bed_type".equals(item.getFieldName())) {
			bedType = item.getString("UTF-8"); // 한글 입력을 UTF-8로 처리
		}
	} else {
		// 파일 업로드 처리
		if ("room_image".equals(item.getFieldName())) {
			String fileName = new File(item.getName()).getName();
			String extension = fileName.substring(fileName.lastIndexOf(".") + 1);
			if (!extension.equalsIgnoreCase("jpg") && !extension.equalsIgnoreCase("png")) {
				out.println("**지원하지 않는 파일 형식입니다**.");
			}
			String filePath = uploadPath + File.separator + fileName;
			File storeFile = new File(filePath);
			item.write(storeFile); // 파일 저장
			imagePath = "images/" + fileName; // 이미지 경로 설정
			if (storeFile.exists()) {
				out.println("**파일이 성공적으로 저장되었습니다: " + storeFile.getAbsolutePath());
			} else {
				out.println("**파일 저장에 실패했습니다.");
			}
		}
	}
		}

		// DB에 데이터 삽입
		String sql = "INSERT INTO room_type (room_name, description, price, room_size, max_pax, bed_type, image_url) "
		+ "VALUES (?, ?, ?, ?, ?, ?, ?)";

		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, roomName);
		pstmt.setString(2, description);
		pstmt.setDouble(3, Double.parseDouble(price)); // 가격은 Double로 변환
		pstmt.setString(4, roomSize);
		pstmt.setInt(5, Integer.parseInt(maxPax)); // 최대 인원은 Integer로 변환
		pstmt.setString(6, bedType);
		pstmt.setString(7, imagePath);

		int result = pstmt.executeUpdate();

		if (result > 0) {
	out.println("***객실 등록 성공!");
		} else {
	out.println("****객실 등록 실패!");
		}
	} catch (Exception e) {
		e.printStackTrace();
		out.println("에러 발생: " + e.getMessage());
	} finally {
		try {
	if (pstmt != null)
		pstmt.close();
	if (conn != null)
		conn.close();
		} catch (Exception e) {
	e.printStackTrace();
		}
	}
	response.sendRedirect("reservation.jsp");
}
%>
<%
out.println("파일 저장 경로: " + uploadPath);
%>



