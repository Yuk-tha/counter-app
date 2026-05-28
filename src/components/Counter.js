import React, { useState } from 'react';
import './Counter.css';

function Counter() {

  // State creation
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {

    // Prevent negative values
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">

      <h1 className="title">
        Counter Application
      </h1>

      <h2 className="count-value">
        {count}
      </h2>

      {/* Conditional Rendering */}
      {count === 0 && (
        <p className="message">
          Minimum limit reached
        </p>
      )}

      <div className="button-group">

        <button
          className="btn increment-btn"
          onClick={increment}
        >
          Increment
        </button>

        <button
          className="btn decrement-btn"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="btn reset-btn"
          onClick={reset}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Counter;