import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Post = () => {
  const history = useHistory();

  const handleSubmit = () => {
    return history.push("/submit");
  };

  return (
    <Main>
      <span className="firstSpan">
        <div>
          <img src="/Images/defaultAvatar.svg" alt="" />
        </div>
      </span>
      <input
        onClick={handleSubmit}
        className="inputTag"
        type="text"
        placeholder="Create Post"
      />
      <span onClick={handleSubmit} className="material-icons iconTr">
        perm_media
      </span>
      <span onClick={handleSubmit} className="material-icons iconTr">
        attach_file
      </span>
    </Main>
  );
};

const Main = styled.div`
  border-radius: 4px;
  border: 1px solid white;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  background-color: white;

  & .firstSpan {
    -ms-flex-preferred-size: 38px;
    flex-basis: 38px;
    margin-right: 8px;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    background: rgb(215, 223, 226);
  }

  & .inputTag {
    background-color: rgb(246, 247, 248);
    border-radius: 4px;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    color: grey;
    display: block;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 38px;
    margin-right: 8px;
    outline: none;
    padding: 0 16px;
    border: 1px solid #e9e3e3;
  }

  & .iconTr {
    border-radius: 4px;
    position: relative;
    border: 1px solid transparent;
    color: #9e9d9d;
    padding: 0;
    font-weight: 700;
    letter-spacing: unset;
    text-transform: unset;
    padding: 4px 10px;
  }
`;
