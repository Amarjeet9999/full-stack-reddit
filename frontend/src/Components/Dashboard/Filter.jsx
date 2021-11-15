import React from "react";
import styled from "styled-components";

export const Filter = () => {
  return (
    <Main>
      <div className="first">
        <span className="firstSpan pop">
          <i className="firstId material-icons">
            offline_bolt
            <span> BEST</span>
          </i>
        </span>
        <span className="firstSpan">
          <i className="firstId material-icons">
            local_fire_department
            <span> HOT</span>
          </i>
        </span>
        <span className="firstSpan">
          <i className="firstId material-icons">
            brightness_low
            <span> NEW</span>
          </i>
        </span>
        <span className="firstSpan">
          <i className="firstId material-icons">
            trending_up
            <span> TOP</span>
          </i>
        </span>
        <i className="firstId last material-icons">more_horiz</i>
      </div>
      <div className="second">
        <div className="innerSecond">
          <button className="btnSecond">
            <span className="firstBtnSpan">
              <span className="material-icons">view_agenda</span>
            </span>
            <span className="secondBtnSpan material-icons">expand_more</span>
          </button>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  align-items: center;
  border: 1px solid white;
  border-radius: 4px;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 10px 12px;
  background-color: white;

  & .first {
    align-items: center;
    cursor: pointer;
    display: flex;
  }

  & #pop {
    background: #ebe7e7;
  }

  & .firstSpan {
    margin-right: 10px;
    color: #0079d3;
    cursor: default;
    fill: #0079d3;
    display: inline-flex;
    text-transform: capitalize;
    margin-right: 8 px;
    position: relative;
    border: 1px solid transparent;
    font-family: Noto Sans, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    min-height: unset;
    min-width: unset;
    padding: 6px 8px;
    border-radius: 20px;
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;

    & :active,
    :hover {
      background: #f3efef;
      cursor: pointer;
    }
  }
  & .firstId {
    font-size: 14px;
    font-weight: 800;
    line-height: 0 !important;
  }
  & .firstId span {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    max-height: 54px;
    display: -webkit-inline-box;
    -webkit-line-clamp: 3;
    white-space: normal;
    -webkit-box-orient: vertical;
    text-align: left;
    margin-left: 5px;
  }

  & .last {
    margin-left: 10px;
  }
  & .second {
    margin-left: auto;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
  }

  & .innerSecond {
    display: flex;
    height: 32px;
    padding: 0 8px;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
  }

  & .btnSecond {
    background: transparent;
    border: none;
    display: flex;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    cursor: pointer;
  }

  & .firstSpan {
    display: inline-flex;
    margin-right: 0;
    background: transparent;
  }
  & .firstBtnSpan span {
    display: block;
    height: 10px;
    width: 20px;
    background: transparent;
    color: #a09595;
  }

  & .secondBtnSpan {
    background: transparent;
  }
`;
