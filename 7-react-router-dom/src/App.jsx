import "./App.css";
import AppLayout from "./layouts/app-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PostList, { postLoader } from "./pages/PostList";
import PostComments from "./pages/PostComments";
import Error from "./components/error";
import Login from "./components/login";
import Signup from "./components/signup";
import RequireAuth from "./components/require-auth";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequireAuth>
            <PostList />
          </RequireAuth>
        ),
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//ques 1 - Create a login form and onSubmit route them to a different page
//ques 2 - Design a error / 404 Not Found Route
//ques 3 - give the example of a nested route in react-router-dom
//Ques 4 - Create a protected route which redirects to a login page
//Ques 5 - How will you design a product page where user selects the specs and shares the link to other user, it open exact way as it was for original user?
