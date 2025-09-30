import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({ name: 'John', age: 25 });

  const handleClick = () => {
    person.age += 1; // 상태를 직접 변경
    console.log(person); // 콘솔에서는 변경된 값이 보이지만, 화면에는 반영되지 않음
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleClick}>Increase Age</button>
    </div>
  );
}

export default App;
