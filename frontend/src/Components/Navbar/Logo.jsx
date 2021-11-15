import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Logo = () => {
  const history = useHistory();
  const handleSubmit = () => {
    return history.push("/");
  };

  return (
    <Main>
      <img onClick={handleSubmit} src="https://svgshare.com/i/bwc.svg" alt="" />
      <span onClick={handleSubmit}>
        <img id="redditImg" src="https://svgshare.com/i/byk.svg" alt="" />
      </span>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 32px;
    padding: 8px 8px 8px 0;
    width: 32px;
    cursor: pointer;
  }
  & span {
    font-size: 21px;
    font-weight: 600;
    cursor: pointer;
  }

  & span #redditImg {
    height: 18px;
    margin-right: 5px;
    width: auto;
  }
`;
