import React, { useState } from "react";
//In custom hook we can use all the functionality which react gives to react component to use(e.g useState)

const useCounter = (initialCount = 0, step = 1) => {
  const [count, setCount] = useState(initialCount);

  const Increment = () => {
    setCount(count + step);
  };
  const Decrement = () => {
    setCount(count - step);
  };
  const Reset = () => {
    setCount(initialCount);
  };

  return {
    Increment,
    Decrement,
    Reset,
    count,
  };
};

export default useCounter;
