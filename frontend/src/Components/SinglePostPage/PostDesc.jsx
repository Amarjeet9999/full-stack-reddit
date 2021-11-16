import React, { useState } from "react";
import styled from "styled-components";
import { PostComp2 } from "../PostFeed/PostComp2";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ShowContext } from "../../Context/Login.Register";
import { CommentSec } from "../Comments/Comment";
import { SubmitComment } from "../Comments/SubmitComment";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PostDesc = ({ fetchData, handleVotes, singlePost }) => {
  // console.log("singlePost:", singlePost._id);
  const [comments, setComments] = useState([]);

  const { setShow } = React.useContext(ShowContext);
  const { auth } = useSelector((state) => state.auth);

  React.useEffect(() => {
    fetchData();
    axios
      .get(`http://localhost:8000/comments/${"618b8a70c72fd6ff4bdc2075"}`)
      .then((res) => setComments([...res.data.comments]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <PostComp2
        post={singlePost}
        index={0}
        rm={true}
        style={{ margin: 0, padding: 0 }}
        fetchData={fetchData}
        handleVotes={handleVotes}
      />
      {!auth && (
        <CommentDisabled>
          <span>Log in or sign up to leave a comment</span>
          <div className="commentDiv">
            <button onClick={() => setShow("showLogin")}>Log In</button>
            <button onClick={() => setShow("showRegister")} className="scdBtn">
              Sign Up
            </button>
          </div>
        </CommentDisabled>
      )}
      {auth && <SubmitComment />}
      <FilterComments>
        <div className="fcInner">
          <div className="fcInternal">
            <button>
              <span>Sort by: best</span>
            </button>
            <ArrowDropDownIcon className="hoverable" />
          </div>
        </div>
      </FilterComments>
      {comments.map((comment) => (
        <CommentSec key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

const CommentDisabled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 26px 0 48px;
  padding: 12px 8px;
  background-color: white;

  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #878a8c;
  }
  & .commentDiv {
    display: flex;
    align-items: center;
  }
  & .commentDiv button {
    position: relative;
    border: 1px solid rgb(0, 120, 210);
    color: rgb(0, 120, 210);
    margin-bottom: 0;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    border-radius: 999px;
    cursor: pointer;
  }

  & .scdBtn {
    background-color: rgb(0, 121, 211);
    color: white !important;
  }
`;

const FilterComments = styled.div`
  border-bottom: 1px solid #dfd9d9;
  color: #dfd9d9;
  display: flex;
  flex-direction: column;
  margin: 16px 40px 0 48px;
  padding: 0 16px 4px 0;

  & .fcInner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & .fcInternal {
    display: flex;
    align-items: center;
  }
  & .fcInternal button {
    border: none;
    padding: 4px 8px 4px 0;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    display: flex;
    width: auto;
    background-color: transparent;
  }
  & .fcInternal button span {
    font-size: 12px;
    line-height: 16px;
    color: #3f3e3e;
  }
`;
