import { lazy, Suspense } from "react";
import "./App.css";
const TestComponent = lazy(() => import("./TestComponent"));

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <Suspense fallback={<h1>로딩중!!!!</h1>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
