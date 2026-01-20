import React, { useEffect, useLayoutEffect, useState } from "react";

const useEffectHook = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () => {
      //side effect code goes here
      fetchUser();
      return () => {
        //clean-up code (optional)
        //Runs on component unmount or before component re-runs
      };
    },
    [
      //ependencies
    ],
  );

  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  //Cleanup example

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecond) => prevSecond + 1);
    }, 1000);

    // return () => {
    //   clearInterval(interval);
    //   console.log("Interval Cleared");
    // };
  }, []);

  useEffect(() => {
    console.log("useEffect here");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect here");
  }, []);

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h5>Ques-1 What is useEffect in react</h5>
      {/* -useEffect is a hook used in functional components to perform side effects after rendering 
          such as data fetching, subscriptions, or manual DOM Manipulation. */}
      <h5>Ques-2 Why is dependency array used in useEffect?</h5>
      {/* 
      -when it is empty then the callback function inside useEffect runs only once
      -when the value inside it changes, the effect re-runs
      -If removed, the effect runs after every render 
      - Handling dependencies ensure that the effect runs only when necessary and prevents un-necessary
       re-execution of the effect, optimizing performance and avoiding potential bugs
      */}
      <h5>Ques-3 Example of useEffect in data fetching</h5>
      {users.map((user, index) => {
        return <li>{user.name}</li>;
      })}
      {/* <li>{users.name}</li> */}
      <h5>Ques-4 Convert Major lifecycle methods to useEffect and explain</h5>
      {/* Explain in 4th Lecture */}
      <h5>Ques-5 How to perform cleanup in useEffect? Explain with example</h5>
      {/* - you can return the a cleanup function inside useEffect, which runs before the effect re-runs
        or when the component unmount 
        - This is useful for cleaning up subscription or event-listners.
      */}
      {seconds}
      <h5>
        Ques-6 Explain useLayoutEffect Hook nd how it is different from
        useEffect hook?
        {/* useEffect:
          - Asynchronous: Runs after the render cycle s
            committed to the screen.
          - Good for performance: Does not block the
            browser from painting changes on the screen.
        
        useLayoutEffect: -
          - Synchronous: Runs synchronously immediately after the DOM is updated but
            before the browser paint anything on the screen.
          - Potentially Blocking: Can potentially cause delays in the rendering process if the operations
            are heavy. 
        */}
      </h5>
      -
    </div>
  );
};

export default useEffectHook;
