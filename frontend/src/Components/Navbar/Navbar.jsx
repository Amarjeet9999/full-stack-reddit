import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import Searchbar from "./SearchBar";
import { Actions } from "./Action";
import { DropDown } from "./DropDown";
import { ShowContext } from "../../Context/Login.Register";
import { AuthDropDown } from "./DropDownAuth";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { dropDown } = React.useContext(ShowContext);
  return (
    <NavbarMain>
      <Logo />
      <Searchbar />
      <Actions btn={true} />
      {dropDown && <DropDown data={"Login / SignUp"} />}
    </NavbarMain>
  );
};

export const NavbarAuth = () => {
  const history = useHistory();
  const { auth } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (!auth) return false;
    return history.push("/submit");
  };
  return (
    <NavbarMain>
      <Logo />
      <MainAction>
        <span className="material-icons">home</span>
        <span>Home</span>
        <div className="profile">
          <ArrowDropDownIcon className="hoverable" />
        </div>
      </MainAction>
      <Searchbar />
      <Options>
        <div>
          <span class="material-icons">dashboard_customize</span>
        </div>
        <div>
          <span class="material-icons">trending_up</span>
        </div>
        <div>
          <span className="material-icons third">videocam</span>
        </div>
        <div>
          <span className="material-icons fourth">sms</span>
        </div>
        <div>
          <span className="material-icons">notifications_none</span>
        </div>
        <div>
          <span onClick={handleClick} className="material-icons">
            add
          </span>
        </div>
        <div className="coin">
          <div>
            <span className="material-icons coinImg">monetization_on</span>
          </div>
          <span>Free</span>
        </div>
      </Options>
      {<AuthDropDown data={"Logout"} />}
    </NavbarMain>
  );
};

export const NavbarMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 8px 25px;
  background-color: white;
  max-height: 35px !important;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: 0;
`;

const MainAction = styled.div`
  display: flex;
  align-items: center;
  color: rgb(130, 130, 130);
  width: auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid transparent;
  margin: 0 10px;
  padding: 5px 2px;

  &:hover {
    border: 1px solid rgb(230, 230, 230);
    border-radius: 5px;
  }

  & .profile {
    border: 1px solid transparent;
    margin-left: 140px;
  }
  & .profile svg {
    margin-right: 8px;
  }
  & span {
    color: black;
    font-weight: 500;
  }
`;

const Options = styled.div`
  width: 200px;
  display: flex;
  width: 328px;
  padding: 10px 12px;
  max-height: 48px;
  justify-content: space-evenly;

  & .material-icons {
    color: #727070;
    cursor: pointer;
  }
  & .third {
    margin-right: 10px;
  }
  & .fourth {
    border-left: 1px solid grey;
    padding: 0 5px;
  }
  & .coin {
    background-color: rgb(255, 234, 90);
    height: auto;
    width: 72px;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
  }
  & .coin div {
    display: flex;
    align-items: center;
  }
  & .coin span {
    margin-bottom: 3px;
  }
  & .coinImg {
    margin-top: 2px;
  }
`;
