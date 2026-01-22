import React from "react";
import useCounter from "../hooks/use-counter";
const Counter = () => {
  const { count, Increment, Decrement, Reset } = useCounter(0, 2);
  // this custom hook will return whatever we are returning from this custome hook.
  //  In this we are returing an object which contains count variable and some function so it is returning the same.
  //  If we would have returned the varibale or string then it would have return the same variable or string value

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
