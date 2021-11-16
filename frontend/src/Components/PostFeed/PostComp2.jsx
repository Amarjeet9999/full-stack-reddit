import React from "react";
import "./Post.styles.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const PostComp2 = ({ post, index, rm, handleVotes }) => {
  const history = useHistory();

  return (
    <div key={index} className={rm ? "post post2" : "post"}>
      <div className={rm ? "post-sidebar post-sidebar2" : "post-sidebar"}>
        <ArrowUpwardIcon className="upvote" onClick={() => handleVotes(1)} />
        <span>{post?.votes}</span>
        <ArrowDownwardIcon
          className="downvote"
          onClick={() => handleVotes(-1)}
        />
      </div>
      <div className="post-title">
        <img src={post?.temp?.image_src} alt="" />
        <span className="subreddit-name">r/{post?.community}</span>
        <span className="post-user">Posted by</span>
        <span className="post-user underline">u/{"name"}</span>
        <div className="spacer"></div>
        <Button>JOIN</Button>
      </div>
      <div className="post-body">
        <span
          onClick={() => history.push(`post/${post?.title}`)}
          className="title"
        >
          {post.title}
        </span>

        {post.img && <img src={post?.img} alt="" />}
        {post.description && (
          <span className="description">{post?.description}</span>
        )}
      </div>
      <div className="post-footer">
        <div className="comments footer-action">
          <ModeCommentIcon className="comment-icon" />
          <span>{post.comments} Comments</span>
        </div>
        <div className="share footer-action">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="save footer-action">
          <BookmarkIcon />
          <span>Save</span>
        </div>
        <MoreHorizIcon className="more-icon footer-action" />
      </div>
    </div>
  );
};

const Button = styled.div`
  white-space: pre;
  word-break: keep-all;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  margin: 4px 8px;
  background-color: #0079d3;
  border: none;
  font-size: 12px;
  font-weight: 700;
  min-height: 24px;
  min-width: 24px;
  padding: 4px 8px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  cursor: pointer;
`;
