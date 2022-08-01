import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>App counter Testing</h1>
      <h2>The count is {counter}</h2>
      <button onClick={increaseCounter}>Click me to increase</button>
    </div>
  );
}

export default App;
