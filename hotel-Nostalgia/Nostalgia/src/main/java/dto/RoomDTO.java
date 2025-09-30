package dto;

public class RoomDTO {
	private String roomName;
	private String description;
	private String image;
	private int price;

	public String getRoomSize() {
		return roomSize;
	}

	public void setRoomSize(String roomSize) {
		this.roomSize = roomSize;
	}

	public String getMaxPax() {
		return maxPax;
	}

	public void setMaxPax(String maxPax) {
		this.maxPax = maxPax;
	}

	public String getBedType() {
		return bedType;
	}

	public void setBedType(String bedType) {
		this.bedType = bedType;
	}

	private String roomSize; // room_size → room_size
	private String maxPax; // max_pax → max_pax
	private String bedType; // bed_type → bed_type

	// Getter, Setter 메소드
	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
