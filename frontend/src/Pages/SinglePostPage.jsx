import React from "react";
import styled from "styled-components";
import { Navbar, NavbarAuth } from "../Components/Navbar/Navbar";
import { Register } from "../Components/Register/Register";
import { Login } from "../Components/Login/Login";
import { useSelector } from "react-redux";
import { SinglePostData } from "../Components/SinglePostPage/SinglePost";
export const SinglePost = () => {
  const { user, auth } = useSelector((state) => state.auth);
  console.log(auth);
  console.log(user);
  return (
    <>
      {!auth && <Navbar />}
      {auth && <NavbarAuth />}
      <Register />
      <Login />
      <Main />
      <SinglePostData />
    </>
  );
};

const Main = styled.div`
  background: rgba(28, 28, 28, 0.9);
  height: 100%;
  position: fixed;
  width: 100%;
`;
