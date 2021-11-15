import React from "react";
import styled from "styled-components";
import { SwitchDiv } from "./Switch";
import { ShowContext } from "../../Context/Login.Register";

export const DropDown = ({ data }) => {
  const { setShow, setDropDown } = React.useContext(ShowContext);

  const handleLogin = () => {
    setShow("showLogin");
    setDropDown(false);
  };

  return (
    <MainDiv>
      <h3 className="h3tag">View Options</h3>
      <button className="btnDiv">
        <span className="material-icons icon">brightness_2</span>
        <div className="nightmode">Night Mode</div>
        <SwitchDiv />
      </button>
      <h3 className="h3Tag2">More Stuff</h3>
      <span className="aTag" href=".">
        <i className="material-icons">monetization_on</i>
        <div>
          <div className="coins">Coins</div>
          <div className="noOfCoins">O Coins</div>
        </div>
      </span>
      <span href="." className="aDiv">
        <span className="material-icons">workspace_premium</span>
        <div className="multiple-div">Premium</div>
      </span>
      <span href="." className="aDiv">
        <span className="material-icons">bolt</span>
        <div className="multiple-div">Powerups</div>
      </span>
      <span href="." className="aDiv">
        <span className="material-icons">question_answer</span>
        <div className="multiple-div">Talk</div>
      </span>
      <span href="." className="aDiv">
        <span className="material-icons">batch_prediction</span>
        <div className="multiple-div">Predictions</div>
      </span>
      <span href="." className="aDiv">
        <span className="material-icons">help_center</span>
        <div className="multiple-div">Help Center</div>
      </span>
      <span className="aDiv">
        <span className="material-icons">logout</span>
        <div onClick={handleLogin} className="multiple-div">
          {data}
        </div>
      </span>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  border: 2px solid red;
  position: fixed;
  left: 1153px;
  top: 39.5px;
  border-radius: 0 0 4px 4px;
  border: 1px solid grey;
  border-top: none;
  box-shadow: none;
  margin-top: -2px;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 6px;
  position: fixed;
  width: 211px;
  z-index: 80;
  background-color: white;

  & .h3tag {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    color: grey;
    margin: 8px 0 4px 12px;
  }

  & .btnDiv {
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    width: 100%;
    background-color: transparent;
    border: none;
  }

  & .nightmode {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }
  & .icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    padding-left: 5px;
    color: grey;
  }

  & .h3Tag2 {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    color: grey;
    margin: 8px 0 4px 12px;
  }

  & .aTag {
    box-sizing: border-box;
    color: grey;
    cursor: pointer;
    display: flex;
    padding: 10px 16px 10px 10px;
    position: relative;
  }

  & .coins {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: black;
    margin-left: 15px;
  }

  & .noOfCoins {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: grey;
    margin-left: 15px;
  }

  & .aDiv {
    display: flex;
    padding: 10px 16px 10px 10px;
    color: grey;
    cursor: pointer;
  }

  & .multiple {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }

  & .multiple-div {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    color: black;
  }
`;
