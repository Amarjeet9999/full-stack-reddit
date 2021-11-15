import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavbarAuth } from "../Components/Navbar/Navbar";
import { DAshboardApp } from "../Components/Dashboard/DashboardApp";
import { ShowContext } from "../Context/Login.Register";

export const Dashboard = () => {
  const { auth } = useSelector((state) => state.auth);
  const { browse } = React.useContext(ShowContext);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ marginBottom: "100px" }}>
      <NavbarAuth />
      <DAshboardApp browse={!browse} post={browse} feedPost={browse} />
    </div>
  );
};
