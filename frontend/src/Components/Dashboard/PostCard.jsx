import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const PostCard = () => {
  return (
    <FirstInner>
      <div className="firstInnerFirst">
        <div className="innerDiv">
          <span className="spanFirstInner">
            <ArrowUpwardIcon />
          </span>
          <div className="firstSpanSpan"></div>
          <span className="spanSecondInner">
            <ArrowDownwardIcon />
          </span>
        </div>
      </div>
      <div className="firstInnerSecond"></div>
    </FirstInner>
  );
};

const FirstInner = styled.div`
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
  transform: translateZ(0);
  border: thin solid grey;
  margin-bottom: -1px;
  background-color: rgb(230, 234, 238);
  height: 90px;

  & .firstInnerFirst {
    height: 100%;
    width: 40px;
    border-left: 4px solid transparent;
    align-items: center;
    box-sizing: border-box;
    left: 0;
    padding: 8px 4px 8px 0;
    position: absolute;
    top: 0;
  }

  & .firstInnerSecond {
    display: flex;
    margin: 8px 0;
  }

  & .innerDiv {
    margin-top: 3px;
    line-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    fill: inherit;
    flex-direction: column;
    text-align: center;
  }

  & .spanFirstInner {
    display: inline-block;
    overflow: hidden;
    height: 24px;
    width: 24px;
    font-size: 16px;
    line-height: 24px;
    & span {
    }
  }
`;
