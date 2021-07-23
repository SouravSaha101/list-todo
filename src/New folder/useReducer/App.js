import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

const initialCount = 0;

const reducer = (state = initialCount, action) => {
  if (action.type === "INCREMENT") {
    return (state = state + 1);
  }
  if (action.type === "DECREMENT") {
    return (state = state - 1);
  }
  if (action.type === "RESET") {
    return 0;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <header className="App-header">
        Count: {count}
        <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
        <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      </header>
    </div>
  );
}

export default App;
