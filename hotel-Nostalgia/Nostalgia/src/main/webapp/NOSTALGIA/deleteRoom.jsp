<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>객실 삭제</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <!-- My Style CSS -->
    <link rel="icon" href="./favicon/favicon.png" />
    <link rel="stylesheet" href="css/mystyle.css" />
</head>
<body>
    <jsp:include page="nav.jsp" />
    <div class="container" style="margin-top: 150px;">
        <h2 class="text-center mb-4">객실 삭제</h2>
        <form action="deleteRoomProcess.jsp" method="post">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>객실 선택</th>
                        <th>객실명</th>
                        <th>설명</th>
                        <th>가격 (KRW)</th>
                    </tr>
                </thead>
                <tbody>
                    <%
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
                        <td><input type="radio" name="room_id" value="<%= rs.getInt("room_id") %>" required></td>
                        <td><%= rs.getString("room_name") %></td>
                        <td><%= rs.getString("description") %></td>
                        <td><%= rs.getInt("price") %></td>
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
            <button type="submit" class="btn btn-danger">삭제</button>
        </form>
    </div>
    <jsp:include page="footer.jsp" />
</body>
</html>
