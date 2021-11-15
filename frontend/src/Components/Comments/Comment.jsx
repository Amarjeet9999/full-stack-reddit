import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const CommentSec = ({ comment }) => {
  return (
    <Comments>
      <div className="comments">
        <div className="comments2">
          <CommentsComp>
            <div className="userImg">
              <img src="/Images/defaultAvatar.svg" alt="" />
            </div>
            <div className="commentActions">
              <div className="mainComment">
                <span>{comment.commentedBy.username}</span>
                <span> . </span>
                <span>3h</span>
              </div>
              <div className="commentTitle">{comment.comment}</div>

              <Actions>
                <div className="first">
                  <div className="votes">
                    <span className="btnVotes">
                      <ArrowUpwardIcon />
                    </span>
                    <div className="divVotes">21.2k</div>
                    <span className="btnVotes">
                      <ArrowDownwardIcon />
                    </span>
                  </div>
                </div>
                <div className="second">
                  <div>
                    <span className="material-icons">chat_bubble</span>
                    <span>Reply</span>
                  </div>
                  <div>Give Award</div>
                  <div>Share</div>
                  <div>Report</div>
                  <div>Save</div>
                  <div>Follow</div>
                </div>
              </Actions>
            </div>
          </CommentsComp>
        </div>
      </div>
    </Comments>
  );
};

const Comments = styled.div`
  box-sizing: border-box;
  padding-right: 16px;
  margin: 16px 16px 0 10px;
  padding-bottom: 16px;

  & .comments {
    box-sizing: border-box;
    overflow: visible;
    position: relative;
    transition: background 1s;
    width: 100%;
  }

  & .comments2 {
    margin-top: 16px;
    background: transparent;
    border-radius: 4px;
    display: flex;
    margin-left: -23px;
    position: relative;
    transition: color 0.5s, fill 0.5s, background 1s;
    align-items: center;
    padding: 0 30px;
  }
`;

const CommentsComp = styled.div`
  display: flex;
  margin-top: 0;
  .userImg {
    display: inline-block;
  }

  & .commentActions {
    margin-left: 10px;
    margin-top: 8px;
  }
  .userImg img {
    height: 28px;
    min-height: 28px;
    min-width: 28px;
    width: 28px;
    border: 0;
    margin: 6px 0 0;
    background: rgb(215, 223, 226);
    border-radius: 50%;
  }
  & .mainComment {
    border-radius: 4px;
    border: 1px solid transparent;
    box-sizing: border-box;
    max-width: 800px;
    width: 100%;
    padding: 0;
    align-self: flex-start;
  }

  & span {
    flex: 0 0 auto;
    margin: 0 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }

  & .commentTitle {
    margin-left: 5px;
    margin-top: 6px;
    min-height: 18px;
    margin-bottom: 6px;
    font-weight: 600;
    color: #3d3c3c;
  }
`;

const Actions = styled.div`
  align-items: center;
  display: flex;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;

  & .first {
    margin: 3px 4px 4px -4px;
    padding: 0;
  }

  & .votes {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0 5px;
  }
  & .btnVotes {
    height: 24px;
    width: 24px;
    color: #9fa1a3;
    cursor: pointer;
  }

  & .divVotes {
    line-height: 15px;
    margin: 0 1px;
    text-align: center;
    width: 32px;
    font-size: 12px;
    font-weight: 700;
    color: #2f2f30;
  }
  & .second {
    display: flex;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: #9fa1a3;
    align-items: center;
    margin: 0 0px;
    span {
      cursor: pointer;
    }

    div {
      align-items: center;
      display: flex;
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;
