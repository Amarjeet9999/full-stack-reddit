import React from "react";
import styled from "styled-components";
import { ShowContext } from "../../Context/Login.Register";

export const NextPage = ({
  setNext,
  setUsername,
  setPassword,
  handleLogin,
  username,
}) => {
  const { show, setShow } = React.useContext(ShowContext);
  const data = ["guru", "energy", "oldAnd", "romanReigns", "roaster"];

  const handleSubmit = () => {
    setShow(false);
    handleLogin();
  };

  return (
    <Main show={show}>
      <MainDiv>
        <div className="first">
          <div>
            <h1>Choose your username</h1>
            <p>
              Your username is how other community members will see you. This
              name will be used to credit you for things you share on Reddit.
              What should we call you?
            </p>
          </div>
          <img
            onClick={() => setShow("")}
            className="btn-close"
            src="./Images/close.svg"
            alt=""
          />
        </div>
        <div className="second">
          <div className="secondInner">
            <form action="">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="CHOOSE A USERNAME"
                value={username}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="PASSWORD"
              />
            </form>
          </div>
          <div className="secondInner2">
            <div className="forFlex">
              <p>Here are some username suggestions </p>
              <a className="thisA" onClick={(e) => e.preventDefault()} href="/">
                .
              </a>
            </div>
            <div>
              <div className="suggestions">
                <a
                  onClick={(e) => {
                    setUsername(data[0]);
                    e.preventDefault();
                  }}
                  href="/"
                >
                  {data[0]}
                </a>
                <a
                  onClick={(e) => {
                    setUsername(data[1]);
                    e.preventDefault();
                  }}
                  href="/"
                >
                  {data[1]}
                </a>
                <a
                  onClick={(e) => {
                    setUsername(data[2]);
                    e.preventDefault();
                  }}
                  href="/"
                >
                  {data[2]}
                </a>
                <a
                  onClick={(e) => {
                    setUsername(data[3]);
                    e.preventDefault();
                  }}
                  href="/"
                >
                  {data[3]}
                </a>
                <a
                  onClick={(e) => {
                    setUsername(data[4]);
                    e.preventDefault();
                  }}
                  href="/"
                >
                  {data[4]}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="third">
          <a
            onClick={(e) => {
              setNext((e) => !e);
              e.preventDefault();
            }}
            href="/"
          >
            Back
          </a>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
      </MainDiv>
    </Main>
  );
};

const Main = styled.div`
  z-index: 999;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show === "showRegister" ? "block" : "none")};
`;

const MainDiv = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 850px;
  height: 100vh !important;
  margin: auto;
  background-color: white;

  & .btn-close {
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    height: 20px;
    cursor: pointer;
    width: 20px;
    top: 0;
  }

  & .first {
    border-bottom: 1px solid hsla(195, 2%, 65%, 0.36) !important;
    padding: 24px 24px 12px;
    display: flex;

    & h1 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
    & p {
      font-family: Noto Sans, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
  }

  & .second {
    display: flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 24px;

    & .secondInner {
      form {
        display: flex;
        flex-direction: column;
      }

      & form input {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        outline: 0;
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        transition: all 0.2s ease-in-out;
        height: 48px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        background-color: #fcfcfb;
        font-family: Noto Sans, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        height: 48px;
        width: 350px;
        margin-top: 15px;
        padding: 0 10px;
      }

      & form input:hover {
        border: 1px solid #0079d3;
      }
    }
    & .secondInner2 {
      & .thisA {
        background: url("https://www.redditstatic.com/accountmanager/25f30c472d0243a2d874451a240fe08a.svg")
          no-repeat 50%;
        background-size: contain;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-left: 8px;
        color: #24a0ed;
        vertical-align: text-top;
      }
    }
  }
  & .forFlex {
    display: flex;
  }
  & .third {
    background-color: #fcfcfb;
    border-top: 1px solid hsla(195, 2%, 65%, 0.36);
    padding: 8px 16px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    min-height: 55px;

    & button {
      font-family: Noto Sans, sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: unset;
      line-height: 18px;
      text-transform: unset;
      background: #0079d3;
      border-radius: 999px;
      color: #fff;
      height: 40px;
      padding: 0 16px;
      cursor: pointer;
    }
    & a {
      text-decoration: underline;
    }
  }

  & .suggestions a {
    display: block;
    padding-bottom: 8px;
  }
`;
