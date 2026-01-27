import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);
    if (e.target.email.value && e.target.password.value) {
      localStorage.setItem("loggedIn", true);
      navigate("/posts/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email Id"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
