import React, { useCallback, useMemo, useState } from "react";

const UseMemoUseCallbackHook = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const SquaredValue = useMemo(() => {
    console.log("Expensive Calculation ...", counter2);
    //without useMemo(memoizing) this function is being called even after changing the value of counter2
    return counter * counter;
  }, [counter]); //After useMemo this will only be called when its dependency will be changed(counter)

  const SquaredValue2 = useCallback(() => {
    console.log("Expensive Calculation ...", counter2);
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <h1>UseMemoUseCallbackHook</h1>
      <h5>Ques-1 What is useMemo in React?</h5>

      {/*
           - It is a hook used to memoize the result of a function and cache it recalculating it only 
            if the dependencies changes. 
           - It takes the callback function and dependency array. 
           - It does not return a function insted it returns a memoized (value).
           - In useMemo every time the dependency changes it re-initializes the function and
             show us the latest value
        */}
      <h2>Squared Counter : {SquaredValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2 Value : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Increment</button>

      <h5>Ques-2 When should you use useMemo hook ?</h5>

      {/* 
            - When computing a value is expensive and time-consuming. 
            - When you want to prevent unnecessary re-computation of values across re-renders.
         */}

      <h5>Ques-3 How does useMemo differ from useState ?</h5>
      {/* 
          - useMemo memoizes a computed value and returns the cached value.
            while useState manages state and triggers re-renders when the state changes. 
        */}

      <h5>Ques-4 What is useCallback in react ?</h5>

      {/* 
          - It is a hook used to memoize a provided callback function, returning the memoized version 
            of that function. 
        */}
      <h2>Squared Counter : {SquaredValue2()}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2 Value : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Increment</button>

      <h5>
        Ques-5 What happens when you use useCallbacks with empty dependencies ?
      </h5>

      {/*
           - It will return the same memoized function on every render, hich might be useful for 
            performance optimmization. 
        */}

      <h5>Ques-6 When should you not use useCallback or useMemo ?</h5>

      {/* 
            - Event handlers or inline functions 
            - Excessive memory consumption if you over use it. because memoized functions are stored in memory.
            - Garbage Collection concerns - If not handled properly then it can lead us to memory leak
          */}
    </div>
  );
};

export default UseMemoUseCallbackHook;
