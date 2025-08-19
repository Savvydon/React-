import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <p className="count">{count}</p>
      <div className="button">
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
