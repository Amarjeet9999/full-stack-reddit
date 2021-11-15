import React from "react";
import styled from "styled-components";

export const GoogleBtn = ({ label, source }) => {
  return (
    <MainGoogle>
      <div className="main-icon">
        <img className="google-icon" src={source} alt="" />
      </div>
      <p className="btn-text">
        <b>{label}</b>
      </p>
    </MainGoogle>
  );
};

const MainGoogle = styled.div`
  width: 280px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #4285f4;
  color: #4285f4;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);

  & .main-icon {
    position: absolute;
    margin: 1px;
    max-width: 50px;
    max-height: 50px;
    border-radius: 2px;
    background-color: white;
  }

  & .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    max-width: 24px;
    max-height: 24px;
    color: white;
  }

  & .btn-text {
    font-size: 16px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
    margin-left: 90px;
  }

  &:hover {
    box-shadow: 0 0 6px #4285f4;
    cursor: pointer;
    background: #1669f2;
    color: white;
  }
  &:active {
    background: #1669f2;
  }
`;
