import React from "react";

import data from "../data.json";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import Button from "react-bootstrap/Button";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="community-section">
        <div className="title">
          <span className="howarable">Top Sports Communities</span>
        </div>
        <div className="communities-wrapper">
          {data.map((data, index) => {
            return (
              <div className="community howarable">
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
            <Button variant="outline-primary" size="sm">
              Top
            </Button>
            <Button variant="outline-primary" size="sm">
              Near You
            </Button>
            <Button variant="outline-primary" size="sm">
              Gaming
            </Button>
            <Button variant="outline-primary" size="sm">
              News
            </Button>
          </div>
        </div>
      </div>

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
    </div>
  );
}
