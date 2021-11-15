import React from "react";
import styled from "styled-components";
import { GoogleBtn } from "./GoogleSignIn";
import { UserAgreement } from "./UserAgreement";
import { ShowContext } from "../../Context/Login.Register";

export const Form = ({ setNext, setEmail }) => {
  const { setShow } = React.useContext(ShowContext);
  return (
    <MainForm onSubmit={(e) => e.preventDefault()}>
      <h1>Sign Up</h1>
      <UserAgreement label="By continuing, you are setting up a Reddit account and agree to our"></UserAgreement>
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
        <button onClick={() => setNext((el) => !el)} className="btn-email">
          Continue
        </button>
        <p>
          Already a redditor?{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              setShow("showLogin");
            }}
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </MainForm>
  );
};

const MainForm = styled.form`
  padding: 24px;
  width: 280px;
  margin-top: 35px;

  & h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin: 0;
  }
  & .google-btn {
    height: 130px;
    display: grid;
    margin-top: 50px;
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
    border: 1px solid #0079d3;
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
`;
