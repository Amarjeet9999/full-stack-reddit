import React from "react";
import styled from "styled-components";
import { PostCard } from "./PostCard";
import { ImageCard } from "./ImageCard";

export const Browse = () => {
  return (
    <Main>
      <First>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </First>
      <ImageCard />
    </Main>
  );
};

const Main = styled.div`
  align-items: center;
  height: 100%;
  min-height: 380px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  display: flex;
  border: 1px solid rgb(205, 207, 209);
`;

const First = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  background: none;
  opacity: 0.4;
`;
