import React from "react";
import { TrendingToday } from "../Components/TrendingToday/Trending";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Register } from "../Components/Register/Register";
import { Login } from "../Components/Login/Login";
import { DAshboardApp } from "../Components/Dashboard/DashboardApp";

export const HomePage = () => {
  const { auth } = useSelector((state) => state.auth);

  if (auth) {
    return <Redirect to="/app" />;
  }
  return (
    <>
      <Navbar />
      <Register />
      <Login />
      <TrendingToday />
      <DAshboardApp browse={false} feedPost={true} />
    </>
  );
};
