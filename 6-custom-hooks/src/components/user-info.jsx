import React from "react";
import useLocalStorage from "../hooks/use-local-storage";

const UserInfo = () => {
  const [value, set, remove] = useLocalStorage("username", "Guest");
  //this will take 2 parameter 1. key and 2. value because localstorage store value in a key-value pair
  //this will return value, a setter function and a remove function

  const handleLogout = () => {
    remove();
    // set("");
  };
  return (
    <div>
      <h3>Hello {value}</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => set(e.target.value)}
      />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserInfo;
