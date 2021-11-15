import React from "react";
import styled from "styled-components";

export const UserAgreement = ({ label }) => {
  return (
    <PElem>
      {label}{" "}
      <Atag
        href="https://www.redditinc.com/policies/user-agreement"
        target="_blank"
      >
        User Agreement
      </Atag>{" "}
      and{" "}
      <Atag
        href="https://www.redditinc.com/policies/privacy-policy"
        target="_blank"
      >
        Privacy Policy.
      </Atag>
    </PElem>
  );
};

const PElem = styled.p`
  font-family: Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
  word-wrap: none;
  white-space: nowrap;
`;

const Atag = styled.a``;
