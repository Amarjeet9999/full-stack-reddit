import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ShowContext } from "../../Context/Login.Register";

export const Actions = ({ btn }) => {
  const { setDropDown } = React.useContext(ShowContext);
  return (
    <MainAction>
      {btn && <Button secondary label="LOG IN" />}
      {btn && <Button label="SIGN UP" />}
      <div onClick={() => setDropDown((el) => !el)} className="profile">
        <PersonIcon className="hoverable" />
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </MainAction>
  );
};

const MainAction = styled.div`
  display: flex;
  align-items: center;
  color: rgb(130, 130, 130);

  & div:nth-child(2) {
    margin: 0px 15px;
  }

  & .profile {
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }

  & .profile:hover {
    border: 1px solid rgb(230, 230, 230);
  }
  & .profile svg {
    margin-right: 8px;
  }
`;
