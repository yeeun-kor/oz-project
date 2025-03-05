package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import dto.RoomDTO;

public class RoomDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;

	// 데이터베이스 연결
	public RoomDAO() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver"); // 드라이버 로딩
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "C##dbexam", "m1234"); // DB 연결
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 객실 타입 조회
	public List<RoomDTO> getAllRooms() {
		List<RoomDTO> rooms = new ArrayList<>();
		String sql = "SELECT * FROM room_type"; // 실제 테이블 명으로 수정

		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				RoomDTO room = new RoomDTO();
				room.setRoomName(rs.getString("room_name"));
				room.setDescription(rs.getString("description"));
				room.setImage(rs.getString("image_url")); // 웹에서 접근할 수 있는 경로 저장
				room.setRoomSize(rs.getString("room_size"));
				room.setMaxPax(rs.getString("max_pax"));
				room.setBedType(rs.getString("bed_type"));

				room.setPrice(rs.getInt("price"));
				rooms.add(room);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (pstmt != null)
					pstmt.close();
				if (conn != null)
					conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return rooms;
	}
}
