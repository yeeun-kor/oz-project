<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>객실 관리</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
</head>
<body>
    <jsp:include page="nav.jsp" />
    <div class="container" style="margin-top: 150px;">
        <h2 class="text-center mb-4">관리자 전용 객실 관리</h2>

        <!-- 객실 등록 버튼 -->
        <div class="text-end mb-3">
            <a href="registerRoom.jsp" class="btn btn-primary">+ 객실 등록</a>
        </div>

        <table class="table table-bordered text-center">
            <thead class="table-dark">
                <tr>
                    <th>객실명</th>
                    <th>설명</th>
                    <th>가격 (KRW)</th>
                    <th>객실 크기</th>
                    <th>기준인원/최대인원</th>
                    <th>침대 유형</th>
                    <th>관리</th>  
                </tr>
            </thead>
            <tbody>
                <%
                request.setCharacterEncoding("utf-8");
                    Connection conn = null;
                    PreparedStatement pstmt = null;
                    ResultSet rs = null;
                    try {
                        Class.forName("oracle.jdbc.driver.OracleDriver");
                        conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "C##dbexam", "m1234");
                        String sql = "SELECT * FROM room_type";
                        pstmt = conn.prepareStatement(sql);
                        rs = pstmt.executeQuery();

                        while (rs.next()) {
                %>
                <tr>
                    <td><%= rs.getString("room_name") %></td>
                    <td><%= rs.getString("description") %></td>
                  <td><%= String.format("%,d", rs.getInt("price")) %>원</td>

                    <td><%= rs.getInt("room_size") %>㎡</td>
                    <td><%= rs.getInt("max_pax") %>인</td>
                 <td><%= rs.getString("bed_type") %></td>
   <td>
                        <!-- 객실 삭제 버튼 -->
                        <form action="deleteRoomProcess.jsp" method="post" style="display:inline;">
                            <input type="hidden" name="room_id" value="<%= rs.getInt("room_id") %>">
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('정말 삭제하시겠습니까?');">삭제</button>
                        </form>

                  
                    <!--  객실 수정 버튼 -->
                     <a href="updateRoom.jsp?room_id=<%= rs.getInt("room_id") %>" class="btn btn-warning btn-sm">수정</a>
                    </td>
                </tr>
                <%
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    } finally {
                        if (rs != null) rs.close();
                        if (pstmt != null) pstmt.close();
                        if (conn != null) conn.close();
                    }
                %>
            </tbody>
        </table>
    </div>
    <jsp:include page="footer.jsp" />
</body>
</html>
