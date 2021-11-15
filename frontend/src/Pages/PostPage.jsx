import React from "react";
import CreatePost from "../Components/post/CreatePost";
import { NavbarAuth } from "../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const PostPage = () => {
  const { auth } = useSelector((state) => state.auth);
  if (!auth) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <NavbarAuth />
      <CreatePost></CreatePost>
    </>
  );
};
