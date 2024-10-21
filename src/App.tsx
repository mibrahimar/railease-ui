import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => ++c);
  }

  function decrement() {
    setCount((c) => --c);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Hello World</h1>
        <div className="counter-container">
          <button onClick={decrement}>-</button>
          <h1>Count: {count}</h1>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
