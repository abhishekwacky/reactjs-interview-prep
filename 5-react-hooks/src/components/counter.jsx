//useEffect Polyfill

import React, { useEffect, useState } from "react";
import { useCustomEffect } from "./use-custom-effect";

const Counter = () => {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered", count);
  }, [count]);

  console.log("rendered");

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
