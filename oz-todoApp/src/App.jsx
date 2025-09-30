import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "잠 자기" },
  ]);

  return (
    <>
      <h1>과제5일차 TodoApp</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          if (!inputValue.trim()) {
            return;
          }
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  //📊'수정' 버튼 토글 효과
  // isEditing이 true면 → <input> 박스를 보여주기.
  // isEditing이 false면 → 그냥 todo.content 보여주기.
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li className="todo-item">
      <input type="checkbox" />
      {/* 삼항연산자
      isEditing이 참이면? 편집중이니깐 input 활성화
      거짓이면 투두 내용만 보이게 .   */}
      {isEditing ? (
        <input
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      ) : (
        todo.content
      )}
      <button
        onClick={() => {
          /* 편집중이 아니면?
          편집실행 해야하니깐,참으로 상태 변화 시키고,
          input값 상태는 todo.content설정해서 수정값 동기화*/
          if (!isEditing) {
            setIsEditing(true);
            setInputValue(todo.content);
          } else {
            if (!inputValue.trim()) {
              return;
            }
            //그리고 편집중인 상태일때,이전의 배열 요소 가지고 오고, 스프레드 연산자로 이전의 배열값 그대로 복사해오면서 새로운 주소값으로 랜더링 시키기.
            setTodoList((prev) =>
              prev.map((elm) =>
                elm.id === todo.id ? { ...elm, content: inputValue } : elm
              )
            );
            //편집 끝났으니, 상태 다시 변화 시켜주기
            setIsEditing(false);
            setInputValue("");
          }
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default App;
