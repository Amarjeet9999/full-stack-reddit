import React from "react";
import styled from "styled-components";
import { ShowContext } from "../../Context/Login.Register";

export const ImageCard = () => {
  const { setBrowse } = React.useContext(ShowContext);
  return (
    <Main>
      <div className="first">
        <img
          src="https://www.redditstatic.com/desktop2x/img/snoo_discovery@1x.png"
          alt=""
        />
        <div className="textDiv">
          Reddit gets better when you join communities, so find some that you’ll
          love!
        </div>
        <div onClick={() => setBrowse((e) => !e)} className="btnDivBrowse">
          Browse Popular Posts
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & .first {
    width: 80%;
    margin: 80px auto;
  }

  & .first img {
    height: 147px;
    width: 140px;
  }

  & .textDiv {
    color: black;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 18px;
  }
  & .btnDivBrowse {
    background-color: #0079d3;
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    min-height: 32px;
    min-width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    margin: 16px auto;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
