import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header">
        <NavLink to={"login"}>Login</NavLink>
        <NavLink to={"signup"}>Signup</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
