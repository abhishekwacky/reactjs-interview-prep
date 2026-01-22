import React, { useMemo, useState } from "react";
import { useCustomMemo } from "./use-custom-memo";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive Calculation...", counter2);
    return counter * counter;
  };

  const memoizedSquareValue = useCustomMemo(squaredValue, [counter]);
  //The console.log is being printed on the first render because useMemo always executes its callback function on the initial render.
  //First render: useMemo has no previous value to compare against, so it must run the squaredValue function to calculate the initial memoized value.
  return (
    <div>
      <h1>Custom useMemo</h1>
      <h2>Counter : {counter}</h2>
      <h3>SquaredValue = {memoizedSquareValue}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr />
      <h2>Counter : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
};

export default UseMemo;
