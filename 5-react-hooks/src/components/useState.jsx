import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(" ");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  console.log(userData);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Learn useStateHook</h3>
      {/* useState is hook in react that allows functional components to manage state by declaring
          state variables and providing a function to update them */}

      <span>Count: {count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <p>Que-2 What's the output</p>
      <button onClick={handleIncrement}>Increment By 3</button>

      <p>Ques-3 What is 2 ways data binding and how you can achive in react</p>

      {/* - It is a concept that allows the synchronization of data between the model (or state) and
          the view in both the direction
            - you can achieve it by combining state management with controlled components.
          */}
      <p>Input Value : {value} </p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <p>
        Ques-4 Build a form containing first name, last name and email. Use only
        one state to manage all fields
      </p>
      <form onSubmit={() => {}}>
        <input
          placeholder="Enter First Name"
          type="text"
          name="first Name"
          onChange={handleInputChange}
        />
        <input
          placeholder="Enter Last Name"
          type="text"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          placeholder="Enter Email Id"
          type="email"
          name="email"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default UseStateHook;
