import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);
  return (
    <div>
      <h1>UseImperativeHandleHook</h1>

      <h5>
        Ques-1 How do you call a function of child component from parent
        component?
      </h5>
      <button onClick={() => childRef.current.handleFocus()}>
        Focus on Input
      </button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  // here this ref holds the reference of this complete component (ChildComponent)
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      handleFocus,
    };
  });
  return <input type="text" ref={inputRef} />;
});
export default UseImperativeHandleHook;

// Notes -
//     - useImperativeHandle Hook takes 2 arguments 1. ref 2. callback
//     - It return an object and here inside cb we can send whatever we want to send to parent component
