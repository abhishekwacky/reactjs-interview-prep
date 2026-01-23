import "./App.css";
import Counter from "./components/counter";
import useWindowSize from "./hooks/use-window-size";
import PostList from "./components/post-list";
import DebouncedInput from "./components/debounced-input";

function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1>Custom Hooks interview questions in react?</h1>
      <h5>Ques-1 What are custom hooks?</h5>
      {/* 
        - Custom Hooks in React are functions that allow you to extract and render from component 
        - A function that lets you extract reusable stateful logic from a component.
        - A way to reuse React logic, not UI.
      */}
      <Counter />
      <h5>
        Follow-up: Can't we just use normal function to do the same thing?
      </h5>
      {/*
        - We get access to react state and lifecycle hook
        - We can avoid prop drilling because custom hooks can access the context API, useReducer and another
          react feature without needing to pass any props.
        - Preserving state between renders, It useus react state management, custom hook ensure
          state persist between renders
        - You dont call them inside of a condition of inside a loop, same like normal other hook 
      */}
      <h5>
        Ques-2 Build a custom hook to efficiently track and update window
        dimensions dynamically ?
      </h5>
      <p>Width : {width}</p>
      <p>Height : {height}</p>

      <h5>
        Ques-3 Build a custom hook to fetch data from given URL and handle
        loading and error state as well ?
      </h5>
      <PostList />

      <h5>
        Ques-4 Build a Custom hook that delays updating a value until a
        specified time has passed after the last change ?
        <DebouncedInput />
      </h5>
    </div>
  );
}

export default App;
