import "./App.css";

function App() {
  return (
    <div>
      <h2>Redux Interview Questions in React</h2>
      <h4>Ques-1 What is Redux ?</h4>
      <p>
        Redux is a state management library often used with react. It helps in
        managing the application state in predicatble way by centralizing the
        state in a single store, enabling easy debugging and testing.
      </p>
      <h4>Ques-2 How does the redux state management works ?</h4>
      {/* 
       #Store
        - The single source of truth
        - Holds the entire application state as a plain JS object
        {
          user: {...},
          cart: [...],
          theme: "dark"
        }
       #Actions
        - Actions describe what happened (not how).
        - Think of actions as events.
        {
          type: "ADD_TODO",
          payload: "Learn Redux"
        }
       #Reducers
          - Reducers decide how the state changes.
          - It is a Pure functions
          - It Take (state + action)
          - Return a new state (never mutate!)
      
        function todoReducer(state = [], action) {
          switch (action.type) {
            case "ADD_TODO":
                  return [...state, action.payload]
            default:
                  return state
          }
        }     
       #Dispatch
          - You dispatch an actions to tell Redux something happened.
            dispatch({ type: "ADD_TODO", payload: "Learn Redux" })
      ------------------------------------------------------------
      #Flow - 
              UI → dispatch(action)
                  ↓
              Redux Store
                  ↓
              Reducer(action, oldState)
                  ↓
              New State
                  ↓
              UI re-renders 
        One-way data flow (very predictable)
      */}
      <h4>Ques-4 What is redux thunk middleware ?</h4>
      <p>
        - it allows an action to be a function instead of a plain object, so you
        can do things like API calls before updating the store.
        {/*  By default, Redux actions must look like this:
        { type: "ADD_TODO", payload: "Learn Redux" } 
          That’s great for sync stuff, but not for:
            - fetching data from an API
            - waiting on a timeout
            - conditional dispatching
            - chaining actions Redux
          Thunk fixes that. 
        */}
        {/* 
            # A thunk is just a function that delays work.
            - With Redux Thunk, instead of returning an object, you return a function:

            Example(without thunk)-
            const fetchUsers = () => {
              const users = await api.getUsers(); // ❌ async not allowed here
                  return { type: "SET_USERS", payload: users };
            };
            
            Example(with redux thunk)
            const fetchUsers = () => {
              return async (dispatch, getState) => {
                dispatch({ type: "FETCH_USERS_START" });

                try {
                  const users = await api.getUsers();
                  dispatch({ type: "FETCH_USERS_SUCCESS", payload: users });
                } catch (error) {
                  dispatch({ type: "FETCH_USERS_ERROR", payload: error });
                }
              };
            }; 
        */}
      </p>
    </div>
  );
}

export default App;
