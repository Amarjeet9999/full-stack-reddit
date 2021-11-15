import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import { ShowContext } from "../../Context/Login.Register";

export const Login = () => {
  const { show, setShow } = React.useContext(ShowContext);

  return (
    <Main show={show}>
      <MainRegister>
        <div className="first">
          <div className="mainFirst">
            <div className="firstmain"></div>
            <div className="second_form">
              <img
                onClick={() => setShow("")}
                className="btn-close"
                src="https://svgshare.com/i/bxD.svg"
                alt=""
              />
              <Form />
            </div>
          </div>
        </div>
      </MainRegister>
    </Main>
  );
};

const Main = styled.div`
  z-index: 999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: ${(props) => (props.show === "showLogin" ? "block" : "none")};
`;

const MainRegister = styled.div`
  top: 0;
  z-index: 100;

  width: 850px;
  height: 100vh !important;
  margin: auto;
  & .first {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  & .mainFirst {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
  }

  & .firstmain {
    background-image: url("https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png");
    height: 100vh;
    min-height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 156px;
  }
  & .second_form {
    width: 100%;
    background-color: white;
  }

  & .btn-close {
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    height: 20px;
    cursor: pointer;
    width: 20px;
  }
`;
