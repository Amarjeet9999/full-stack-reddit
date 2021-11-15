import React from "react";
import "./Post.styles.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "../Button/Button";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Video from "./Video/Video";
import { useHistory } from "react-router-dom";

export const PostComp = ({ post, index, rm }) => {
  const history = useHistory();
  return (
    <div key={index} className={rm ? "post post2" : "post"}>
      <div className={rm ? "post-sidebar post-sidebar2" : "post-sidebar"}>
        <ArrowUpwardIcon className="upvote" />
        <span>{post.upvotes}</span>
        <ArrowDownwardIcon className="downvote" />
      </div>
      <div className="post-title">
        <img src={post.subreddit.image_src} alt="" />
        <span className="subreddit-name">r/{post.subreddit.name}</span>
        <span className="post-user">Posted by</span>
        <span className="post-user underline">u/{post.username}</span>
        <div className="spacer"></div>
        <Button label="+ JOIN" />
      </div>
      <div className="post-body">
        <span
          onClick={() => history.push(`post/${post.title}`)}
          className="title"
        >
          {post.title}
        </span>
        {post.video_src && (
          <Video src={post.video_src} duration={post.duration} />
        )}
        {post.image_src && <img src={post.image_src} />}
        {post.description && (
          <span className="description">{post.description}</span>
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
