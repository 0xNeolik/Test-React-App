import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App" data-test="component-app">
      <h1>App counter Testing</h1>
      <h2 data-test="component-counter-display">The count is {counter}</h2>
      <button onClick={increaseCounter} data-test="component-counter-button">
        Click me to increase
      </button>
    </div>
  );
}

export default App;
