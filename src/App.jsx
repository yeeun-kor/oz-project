import React from "react";
import "./App.css";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <TestComponent />
    </div>
  );
}

export default App;
