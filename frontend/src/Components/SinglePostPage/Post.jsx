import React from "react";
import styled from "styled-components";
import { PostDesc } from "./PostDesc";

export const PostComponent = ({ fetchData, handleVotes, singlePost }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Main>
      <First>
        <div className="firstMain">
          <PostDesc
            fetchData={fetchData}
            handleVotes={handleVotes}
            singlePost={singlePost}
          />
        </div>
      </First>
      <Second>
        <SecondFirst>
          <div className="firstSecond"></div>
          <div className="imgSecond">
            <img
              src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png?width=256&s=4e76eadc662b8155a93d4d7487a6d3acb35f4334"
              alt=""
            />
            <div>
              <span>r/AskReddit</span>
            </div>
          </div>
          <div className="askReddit">
            <div>
              r/AskReddit is the place to ask and answer thought-provoking
              questions.
            </div>
          </div>
          <div className="subRedditDetails">
            <div className="subID">
              <div>34.0m</div>
              <p>Members</p>
            </div>
            <div className="subID">
              <div>51.8k</div>
              <p>Online</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="detailsTwo">
            <span className="material-icons">cake</span>
            <span className="birthDet">Created Jan 25, 2008</span>
          </div>
          <div className="btnJoin">
            <button>Join</button>
          </div>
        </SecondFirst>
        <SecondSec>
          <div className="firstSec">
            <div className="flexFirst">
              <span>Help</span>
              <span>Reddit Coins</span>
              <span>Reddit Premium</span>
              <span>Reddit Gifts</span>
            </div>
            <div className="flexFirst">
              <span>About</span>
              <span>Careers</span>
              <span>Press</span>
              <span>Advertise</span>
              <span>Blog</span>
              <span>Terms</span>
              <span>Content Policy</span>
              <span>Privacy Policy</span>
              <span>Mod Policy</span>
            </div>
          </div>
          <div className="rights">Reddit Inc © 2021 . All rights reserved</div>
        </SecondSec>
        <ThirdSec>
          <button onClick={scrollToTop}>BACK TO TOP</button>
        </ThirdSec>
      </Second>
    </Main>
  );
};

const Main = styled.div`
  max-width: 1280px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  padding-bottom: 32px;
  position: relative;
  width: calc(100% - 160px);
  background-color: rgb(238, 238, 238);
`;

const First = styled.div`
  max-width: 740px;
  flex: 1;
  margin: 32px 12px 32px 32px;
  max-width: 100%;
  min-width: 0;
  padding-bottom: 1px;
  width: 100%;
  word-break: break-word;
  background-color: white;
  border-radius: 6px;

  & .firstMain {
    border-radius: 4px;
    word-break: break-word;
    background: rgb(238, 238, 238);
    border: rgb(238, 238, 238);
  }
`;
const Second = styled.div`
  margin: 32px 32px 32px 0;
  padding: 0;
  right: 0;
  top: 0;
  width: 312px;
  background-color: rgb(238, 238, 238);
`;

const SecondFirst = styled.div`
  padding: 12px;
  border: 1px solid #aaadaf;
  background-color: white;

  & .firstSecond {
    background-color: #646d73;
    background-size: cover;
    border-radius: 3px 3px 0 0;
    height: 34px;
    margin: -12px -12px 10px;
  }

  & .imgSecond {
    align-items: center;
    display: flex;
    margin-bottom: 8px;
  }
  & .imgSecond img {
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
    height: 54px;
    width: 54px;
    font-size: 54px;
    line-height: 54px;
    border-radius: 100%;
    box-sizing: border-box;
  }
  & .imgSecond div {
    display: inline-block;
  }
  & .imgSecond div span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: inline-block;
    color: gray;
  }

  & .askReddit {
    margin-top: 12px;
    margin-bottom: 8px;
  }
  & .askReddit div {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    word-wrap: break-word;
    color: gray;
    font-weight: 600;
  }

  & .subRedditDetails {
    display: flex;
    margin-bottom: 8px;
  }
  & .subID {
    padding-right: 4px;
    flex: auto;
  }
  & .subID div {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #474545;
  }

  & .subID p {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    display: inline-block;
    word-break: break-word;
    margin: 0;
    font-weight: 600;
    color: #474545;
  }

  & .divider {
    background-color: #c7c4c4;
    border: none;
    height: 1px;
    margin: 16px 0;
  }

  & .detailsTwo {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #616060;
  }

  & .birthDet {
    margin-top: 4px;
    margin-left: 8px;
    color: gray;
    font-weight: 600;
  }
  & .btnJoin {
    margin-top: 13px;
    margin-bottom: 16px;
  }
  & .btnJoin button {
    cursor: pointer;
    position: relative;
    background-color: #444e59;
    border: none;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    width: 100%;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    color: white;
  }
`;

const SecondSec = styled.div`
  margin-top: 16px;
  border: 1px solid #aaadaf;
  background-color: white;

  & .firstSec {
    padding: 12px 8px;
    display: flex;
  }

  & .flexFirst {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0px 4px;
  }
  & .flexFirst span {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    display: inline-block;
    text-decoration: none;
    text-transform: capitalize;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  & .rights {
    display: flex;
    padding: 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;

const ThirdSec = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translateY(-100%);
  position: sticky;

  & button {
    position: relative;
    cursor: pointer;
    background: #444e59;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
  }
`;
