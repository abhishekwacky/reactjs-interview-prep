import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <h1>This is how our app will lok like</h1>
      {/* header */}
      <Header />
      {/* Loading... */}
      {isLoading && <div>Loading...</div>}
      {/* body */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
