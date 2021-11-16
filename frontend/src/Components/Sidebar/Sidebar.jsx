import React from "react";
import data from "../data.json";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Sidebar.css";
import styled from "styled-components";

export default function Sidebar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="side-bar">
      <div className="community-section">
        <div className="title">
          <span className="howarable">Today's Top Growing Communities</span>
        </div>
        <div className="communities-wrapper">
          {data.map((data, index) => {
            return (
              <div key={index} className="community howarable">
                <span>{index + 1}</span>
                <ArrowDropUp />
                <img src={data.image_src} alt="" />
                <span className="name">r/{data.name}</span>
              </div>
            );
          })}
        </div>
        <div className="action-buttons">
          <Button variant="primary" size="sm" className="bootstrap">
            View All
          </Button>
          <div className="secondary-buttons">
            <Button2 variant="outline-primary" size="sm">
              Top
            </Button2>
            <Button2 variant="outline-primary" size="sm">
              Near You
            </Button2>
            <Button2 variant="outline-primary" size="sm">
              Gaming
            </Button2>
            <Button2 variant="outline-primary" size="sm">
              News
            </Button2>
          </div>
        </div>
      </div>
      <Advertise>
        <div className="advertise">
          <img
            src="https://www.redditstatic.com/desktop2x/img/house-ads/castiron.png"
            alt=""
          />
        </div>
      </Advertise>
      <div className="under-community">
        <div className="under-community-wrapper">
          <span className="howarable">POPULAR COMMUNITIES</span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">GAMING </span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">SPORTS </span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">TV</span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">TRAVEL</span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">HEALTH AND FITNESS</span>
          <ExpandMoreIcon />
        </div>
        <div className="under-community-wrapper">
          <span className="howarable">FASHION</span>
          <ExpandMoreIcon />
        </div>
      </div>

      <ThirdSec>
        <button onClick={scrollToTop}>BACK TO TOP</button>
      </ThirdSec>
    </div>
  );
}

const Advertise = styled.div`
  margin-top: 16px;
  width: 310px;
  cursor: pointer;

  & .advertise {
    min-height: 270px;
    min-width: 298px;
  }
  & .advertise img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
`;

const ThirdSec = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: sticky;

  & button {
    position: relative;
    cursor: pointer;
    background: rgb(0, 120, 210);
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

const Button = styled.button`
  background-color: rgb(0, 120, 210);
  border: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  color: white;
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #1d85ad;
  }
`;
const Button2 = styled.button`
  background-color: rgb(227, 237, 246);
  border: none;
  font-weight: 700;
  min-height: 32px;
  min-width: 32px;
  color: rgb(0, 120, 210);
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;
  padding: 0 11px;
  margin-bottom: 10px;
  &:hover {
    background-color: #a9d7ec;
  }
`;
