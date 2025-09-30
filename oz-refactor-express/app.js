// app.js
document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchMessage");
  const updateButton = document.getElementById("updateMessage");
  const deleteButton = document.getElementById("deleteMessage");
  const messageDisplay = document.getElementById("messageDisplay");

  // 서버로부터 메시지 가져오기
  fetchButton.addEventListener("click", () => {
    return axios
      .get("http://localhost:3000")
      .then((res) => {
        messageDisplay.textContent = res.data.message || "메시지가 없습니다";
      })
      .catch((err) => {
        console.log("메시지 가져오기 오류:", error);
      });
  });

  // 서버에 메시지 업데이트 요청 보내기
  updateButton.addEventListener("click", () => {
    const newMessage = prompt("새로운 메시지를 입력하세요:");
    return axios
      .put("http://localhost:3000", newMessage, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((res) => {
        console.log(res);
        messageDisplay.textContent = res.data;
      })
      .catch((error) => {
        console.error("메시지 업데이트 오류:", error);
      });
  });

  // 서버에 메시지 삭제 요청 보내기
  deleteButton.addEventListener("click", () => {
    return axios
      .delete("http://localhost:3000")
      .then((res) => {
        messageDisplay.textContent = res.data;
      })
      .catch((error) => {
        console.error("메시지 삭제 오류:", error);
      });
  });
});
