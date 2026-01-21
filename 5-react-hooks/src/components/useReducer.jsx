import React, { useReducer } from "react";

const UseReducerHook = () => {
  const countReducer = (state, action) => {
    console.log("Wacky ", state, action);
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const initialCount = {
    count: 0,
  };
  const [state, disptach] = useReducer(countReducer, initialCount);
  console.log("Abhishek", state);
  return (
    <div>
      <h1>UseReducerHook</h1>
      <h5>Ques-1 What is useReducer in react ?</h5>

      {/* 
          - It is a hook used for managing complex state logic by utilizing a reducer function.
          - Alternative to useState and provides a way to update state based on defined actions.
          Extra Notes :
          - It takes 2 things as a parameter 1. reducer function 2. initial state
          - It gives us back two things 1. updated state 2. disptach function
          - dispatch function takes two thing inside an action object 1. Type (from Switch case) 2. Payload
      */}
      <p>Count: {state.count}</p>
      <button onClick={() => disptach({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => disptach({ type: "DECREMENT" })}>Decrement</button>

      <h5>Ques-2 When should you use useReducer insted of useState</h5>

      {/* 
          - When managing complex state transitions or logic that involves multiple sub-values.
          - When state logic follows a pattern or when multiple actions need to update the state in
            predictable ways. 
      */}

      <h5>
        Quest-3 Give an example of useReducer for Shopping Cart State
        Management?
      </h5>
      <ShoppingCart />
    </div>
  );
};

const initialCartState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        cart: [],
      };
    default:
      return state;
  }
};

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            >
              Remove Product
            </button>
          </li>
        ))}
      </ul>
      <hr />
      {products.map((prod) => {
        return (
          <button
            key={prod.id}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: prod })}
          >
            {prod.name}
          </button>
        );
      })}
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default UseReducerHook;
