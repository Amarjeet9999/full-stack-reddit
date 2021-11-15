import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Dashboard } from "../Pages/Dashboard";
import { PostPage } from "../Pages/PostPage";
import { SinglePost } from "../Pages/SinglePostPage";
import { useDispatch } from "react-redux";
import { loginLoading, loginSuccess } from "../Components/Redux/Auth/action";

export const Routes = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loginLoading());
    const data = localStorage.getItem("user");
    if (data !== null) {
      const action = loginSuccess(JSON.parse(data));
      dispatch(action);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/app">
          <Dashboard />
        </Route>
        <Route path="/submit">
          <PostPage />
        </Route>
        <Route path="/post/:id">
          <SinglePost />
        </Route>
      </Switch>
    </>
  );
};
