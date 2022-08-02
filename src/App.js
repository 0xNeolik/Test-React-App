import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    counter !== 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <div className="App" data-test="component-app">
      <h1>App counter Testing</h1>
      <h2 data-test="component-counter-display">The count is {counter}</h2>
      <button
        onClick={increaseCounter}
        data-test="component-counter-button-increase"
      >
        Click me to increase
      </button>
      <button
        onClick={decreaseCounter}
        data-test="component-counter-button-decrease"
      >
        Click me to decrease
      </button>
    </div>
  );
}

export default App;
