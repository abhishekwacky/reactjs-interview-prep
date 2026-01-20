import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0); // value of ref will not get lost even if component re-render
  const inputRef = useRef(null);
  //   console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleIncrement = () => {
    ref.current = ref.current + 1;
  };

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <h5>Ques-1 What is useRef Hook?</h5>
      {/* 
        - useRef is a hook used to create a mutable reference that persists across renders.
        - It return a mutable object with .current property.
        - It does not re-render the component and updated value still reflects in the UI when components 
          get rendered on UI
      */}
      <p>Ref Value - {ref.current}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>State Value - {count}</p>
      <button onClick={handleCounter}>Increment</button>

      <h5>Ques-2 When would you use useRef?</h5>
      {/* 
          - Accessing DOM elements or managing focus 
          - Storing mutable values that persist without causing re-renders
          - Caching values to avoid re-initialization on re-renders
          - In every single jsx element by default we have ref properties (i.e <Input>)
      */}
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
      >
        Set Focus
      </button>

      <h5>Ques-3 How do you access a DOM element using useRef?</h5>
      <input ref={inputRef} />

      <h5>Ques-4 Difference between useState and useRef ?</h5>

      {/* 
        useState:
          - Manages state and triggers re-renders when its value changes. When you update it using seStateValue,
          the component re-renders, and the updated value is reflected in UI.
          
        useRef:
          - Holds a mutable value (current) that persist across render without causing re-render.
          - When you update it (refValue.current = ...), the component doesn't re-render, but the updated
            value is stored and ccessible across the renders.
      */}
    </div>
  );
};

export default UseRefHook;
