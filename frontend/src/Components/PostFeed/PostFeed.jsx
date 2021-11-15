import React, { useState, useEffect } from "react";
import "./Post.styles.css";
import axios from "axios";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "../Button/Button";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";
// import posts from "./PostDummyData.json";

export const FeedPosts = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data.posts);
        setPosts([...res.data.posts]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
    return () => {
      setPosts([]);
    };
  }, []);

  const handleVotes = async (id, val) => {
    await axios
      .patch(`http://localhost:5000/posts/${id}/vote`, { val })
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="posts-wrapper">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <div className="post-sidebar">
            <ArrowUpwardIcon
              onClick={() => handleVotes(post._id, 1)}
              className="upvote"
            />
            <span>{post.votes}</span>
            <ArrowDownwardIcon
              onClick={() => handleVotes(post._id, -1)}
              className="downvote"
            />
          </div>
          <div className="post-title">
            {/* <img src={post.subreddit.image_src} alt="" /> */}
            <span className="subreddit-name">r/{post.community}</span>
            <span className="post-user">Posted by</span>
            <span className="post-user underline">
              u/{post.postedBy.username}
            </span>
            <div className="spacer"></div>
            <Button label="+ JOIN" />
          </div>
          <div className="post-body">
            <span
              onClick={() => history.push(`post/${post._id}`)}
              className="title"
            >
              {post.title}
            </span>
            {post.video_src && (
              <Video src={post.video_src} duration={post.duration} />
            )}
            {post.img && <img src={post.img} alt="posiImage" />}
            {post.text && <span className="description">{post.text}</span>}
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
      ))}
    </div>
  );
};
