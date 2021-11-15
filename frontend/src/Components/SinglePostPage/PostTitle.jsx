import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useHistory } from "react-router-dom";

export const PostTitle = ({ singlePost, fetchData, id, handleVotes }) => {
  const history = useHistory();
  return (
    <PostName>
      <MainData>
        <div className="firstData">
          <div className="votes">
            <span className="btnVotes" onClick={() => handleVotes(1)}>
              <ArrowUpwardIcon />
            </span>
            <div className="divVotes">{singlePost?.votes}</div>
            <span className="btnVotes" onClick={() => handleVotes(-1)}>
              <ArrowDownwardIcon />
            </span>
          </div>
          <span className="material-icons chatBox">chat</span>
          <div className="dataTitle">
            <p className="Classp">{singlePost?.title}</p>
          </div>
        </div>
        <div className="secondData">
          <button onClick={() => history.push("/")}>
            <span className="material-icons">close</span>
            <span>Close</span>
          </button>
        </div>
      </MainData>
    </PostName>
  );
};

const PostName = styled.div`
  top: 52px;
  background: #030303;
  box-sizing: border-box;
  height: 48px;
  left: 0;
  margin: 0 auto;
  max-width: 1280px;
  position: sticky;
  right: 0;
  transition: top 0.3s ease;
  width: calc(100% - 160px);
  z-index: 70;
`;

const MainData = styled.div`
  padding: 0 32px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  margin: auto;
  max-width: 1128px;
  padding: 0 12px 0 32px;
  width: 100%;

  & .firstData {
    align-items: center;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    max-width: calc(100% - 324px);
    width: 100%;
  }
  & .votes {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0 5px;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    margin-right: 10px;
  }
  & .btnVotes {
    height: 24px;
    width: 24px;
    color: #d7dadc;
    cursor: pointer;
  }

  & .divVotes {
    line-height: 15px;
    margin: 0 1px;
    text-align: center;
    width: 32px;
    font-size: 12px;
    font-weight: 700;
    color: #d7dadc;
  }

  & .chatBox {
    color: #d7dadc;
  }

  & .dataTitle {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: inline-flex;
    min-width: 0;
    color: #d7dadc;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-left: 10px;
  }

  & .Classp {
    color: #d7dadc;
    text-decoration: none;
    word-break: break-word;
    font-weight: 600;
  }
  & .secondData {
    display: flex;
    justify-content: flex-end;
    margin-left: 12px;
    width: 312px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }
  & .secondData button {
    width: 75px;
    color: #d7dadc;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }
`;
