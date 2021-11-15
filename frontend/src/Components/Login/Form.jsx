import React from "react";
import styled from "styled-components";
import { GoogleBtn } from "../Register/GoogleSignIn";
import { UserAgreement } from "../Register/UserAgreement";
import axios from "axios";
import { ShowContext } from "../../Context/Login.Register";
import { useDispatch } from "react-redux";

import {
  loginLoading,
  loginSuccess,
  loginError,
} from "../Redux/Auth/action.js";

export const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setShow } = React.useContext(ShowContext);
  const dispatch = useDispatch();

  //Login Function Using Redux
  const handleLogin = async () => {
    try {
      dispatch(loginLoading());
      await axios
        .post("http://localhost:5000/login", {
          email: email,
          password: password,
        })

        .then((res) => {
          const action = loginSuccess(res.data);
          dispatch(action);
          setShow(false);
          localStorage.setItem("user", JSON.stringify(res.data));
        });
    } catch (err) {
      const action = loginError("wrong credentials");
      dispatch(action);
    }
  };

  return (
    <MainForm onSubmit={(e) => e.preventDefault()}>
      <h1>Login</h1>
      <UserAgreement label="By continuing, you agree to our"></UserAgreement>
      <div className="google-btn">
        <GoogleBtn
          source={
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          }
          label="Continue With Google"
        ></GoogleBtn>
        <GoogleBtn
          source={
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          }
          label="Continue With Apple"
        ></GoogleBtn>
      </div>
      <div className="divider">
        <span className="dividerLine"></span>
        <span className="dividerText">or</span>
        <span className="dividerLine"></span>
      </div>
      <div className="input-field">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button onClick={handleLogin} className="btn-email">
          Continue
        </button>
        <p className="smallP">
          Forgot your <a href="/login">username</a> or <a href="/">password</a>
        </p>
        <p>
          New to Reddit?{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              setShow("showRegister");
            }}
            href="/login"
          >
            Signup
          </a>
        </p>
      </div>
    </MainForm>
  );
};

const MainForm = styled.form`
  padding: 24px;
  width: 280px;
  margin-top: 20px;

  & h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin: 0;
  }
  & .google-btn {
    height: 130px;
    display: grid;
    margin-top: 40px;
  }

  & .divider {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin: 28px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  & .divider .dividerLine {
    border-top: 1px solid rgb(237, 239, 241);
    width: 40%;
  }
  & .divider .dividerText {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgb(135, 138, 140);
    text-transform: uppercase;
  }

  & .input-field input {
    height: 48px;
    width: 240px;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #fcfcfb;
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    padding: 0px 20px;
    margin-bottom: 8px;
    border: 1px solid #0079d3;
    outline: none;
  }

  & .input-field button {
    margin-top: 12px;
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 18px;
    text-transform: unset;
    background: #0079d3;
    border-radius: 50px;
    color: #fff;
    height: 40px;
    padding: 0 16px;
    height: 48px;
    width: 280px;
    cursor: pointer;
    :hover {
      background-color: #168ae2;
    }
  }
  & .input-field p a {
    margin-top: 24px;
    font-family: Noto Sans, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 20px;
  }
  & .input-field p a {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
  }

  & .smallP {
    font-size: 10px;
    a {
      font-size: 10px !important;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;
