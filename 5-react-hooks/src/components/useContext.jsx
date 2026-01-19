import React, { createContext, useContext } from "react";

const DataContext = createContext();
const UserContext = createContext();
const data = "I am Abhishek Kumar";
const user = {
  name: "Abhishek",
  age: 26
}

const UseContextHook = () => {
  return (
    <div>
      <DataContext.Provider value={data}>
        <UserContext.Provider value={user}>
      <p>Ques-1 What is useContext in React</p>
      {/* - use to consume value (like data or functions) from a context created by createContext()  
          - It allows functional components to access context values without prop drilling.
        - In scenarios where passing props through multiple levels of components is impractical.
        - context is nothing but a global state 
          */}
      
          <GrandParents />
          </UserContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default UseContextHook;

const GrandParents = () => {
  return <Parents data={data} />;
};

const Parents = ({ data }) => {
  return <Child data={data} />;
};

const Child = ({ data }) => {
  return <GrandChild data={data} />;
};

const GrandChild = () => {
  const data = useContext(DataContext);
  const {name} = useContext(UserContext)
  
  return (<>
    <p>Data : {data}</p>
    <p>UserName : {name}</p>
  </>)
};
