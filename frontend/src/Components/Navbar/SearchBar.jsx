import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export default function Searchbar() {
  const { auth } = useSelector((state) => state.auth);

  return (
    <Main>
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
      {!auth && <input className="searchbar" placeholder="Search Reddit" />}
      {auth && <input className="searchbarAuth" placeholder="Search Reddit" />}
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  & input {
    padding: 10px;
    padding-left: 40px;
    border-radius: var(--border-radius);
    border: 1px solid rgb(230, 230, 230);
    background-color: var(--light-grey);
    outline: none;
  }
  & .searchbar {
    width: 600px;
  }
  & .searchbarAuth {
    width: 340px;
  }
  & input:hover {
    border-color: var(--primary-color);
    background-color: white;
  }
  & label {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 15px;
  }
  & svg {
    color: rgb(130, 130, 130);
  }
`;
