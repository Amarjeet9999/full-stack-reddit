import React from "react";
import styled from "styled-components";
import { Post } from "./CreatePost";
import { Filter } from "./Filter";
import { Browse } from "./Browse";
import { FeedPosts } from "../PostFeed/PostFeed";
import Mainfeed from "../Mainfeed/Mainfeed";
import { useSelector } from "react-redux";
import { TrendingToday } from "../TrendingToday/Trending";

export const DAshboardApp = ({ browse, post, feedPost }) => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <Main post={post}>
      {post && <TrendingToday />}
      <MainDiv post={post}>
        <First>
          {!post && auth && <Post />}
          <Filter />
          {browse && <Browse />}
          {feedPost && <FeedPosts />}
        </First>
        <Second>
          <Mainfeed />
        </Second>
      </MainDiv>
    </Main>
  );
};

const Main = styled.div`
  padding: ${(props) => (!props.post ? "20px 0px" : "0")};
  width: 100%;
`;

const MainDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-top: ${(props) => (props.post ? "30px" : 0)};
`;

const First = styled.div`
  width: 660px;
`;

const Second = styled.div`
  margin-left: 24px;
  margin-top: 0;
  flex: 0 0 312px;
  width: 312px;
`;
