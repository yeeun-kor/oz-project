<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>
<%
    request.setCharacterEncoding("UTF-8");
    String roomId = request.getParameter("room_id");

    Connection conn = null;
    PreparedStatement pstmt = null;

    try {
        Class.forName("oracle.jdbc.driver.OracleDriver");
        conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "C##dbexam", "m1234");
        
        String sql = "DELETE FROM room_type WHERE room_id = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1, Integer.parseInt(roomId));

        int result = pstmt.executeUpdate();
        if (result > 0) {
%>
<script>
    alert("삭제되었습니다!");
    window.location.href = "roomList.jsp";
</script>
<%
        } else {
%>
<script>
    alert("삭제할 객실을 찾을 수 없습니다.");
    history.back();
</script>
<%
        }
    } catch (Exception e) {
        e.printStackTrace();
%>
<script>
    alert("삭제 중 오류가 발생했습니다.");
    history.back();
</script>
<%
    } finally {
        if (pstmt != null) pstmt.close();
        if (conn != null) conn.close();
    }
%>
