//버튼 추가, input, ul 요소 설정
const todoInput = document.querySelector("input");
const todoList = document.querySelector("#todo-list");
const createButton = document.querySelector("button");

//서버와의 CRUD작업 진행
//생성, 읽기, 업데이트, 삭제
const createTodo = (input) => {
  //input의 입력값
  const inputVal = todoInput.value;
  //서버에 POST Promise로 리턴하기
  return fetch("http://localhost:3000", {
    method: "POST",
    body: inputVal,
  });
};

//- 서버에서 데이터 가져오는 함수
const readTodo = async () => {
  const res = await fetch("http://localhost:3000");
  const data = await res.json();
  return data; //PROMISE 객체타입으로
};

//- 서버에서 업데이트값을 업데이팅하는 함수
const updateTodo = (newTodo) => {
  return fetch("http://localhost:3000", {
    method: "PUT",
    body: JSON.stringify(newTodo),
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
};

//- 서버에서 id값을 토대로 삭제하는 함수
const deleteTodo = (id) => {
  return fetch("http://localhost:3000", {
    method: "DELETE",
    body: id,
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
};

//- http 랜더링 되는 함수
const displayTodo = (data) => {
  //서버에서 redTodo 함수로 가져온 data객체 뿌려야함
  for (let el of data) {
    const list = document.createElement("li");
    list.textContent = el.content;

    //- 업데이트기능
    const updateInput = document.createElement("input");
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => {
      //서버에 업데이트된 값 받아서 화면에 뿌려주기
      updateTodo({ id: el.id, content: updateInput.value })
        .then(() => readTodo())
        .then((res) => {
          removeDisplay();
          displayTodo(res);
        });
    };

    //- 삭제 기능
    const deleteBtn = document.createElement("Button");
    deleteBtn.textContent = "삭제";
    deleteBtn.onclick = () => {
      deleteTodo(el.id)
        .then(() => readTodo())
        .then((res) => {
          removeDisplay();
          displayTodo(res);
        });
    };

    list.append(updateBtn, updateInput, deleteBtn);
    todoList.append(list);
  }
};
const removeDisplay = () => {
  //화면의 li가 있다면?
  while (todoList.children.length) {
    todoList.removeChild(todoList.children[0]);
  }
};

//! 추가하기 버트
createButton.addEventListener("click", () => {
  //Promise로 호출하해서 , 추가하는 기능 다음에 읽는 기능 바로 실행
  //readTodo 는 서버에서 데이터를 읽는 것 -> 이걸 http에 뿌려줘야함
  createTodo()
    .then(() => readTodo())
    .then((res) => {
      removeDisplay();
      displayTodo(res);
    });
});

//! 화면에 호출
//readTodo 까지는 Promise객체라 then메서드로 JSONdㅡ로 변환
//변환시켜서 배열객체 통째로 displayTodo의 인자로 보내서 http 뿌려주기
readTodo().then((res) => displayTodo(res));
