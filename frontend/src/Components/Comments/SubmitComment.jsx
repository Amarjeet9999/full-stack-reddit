import React from "react";
import styled from "styled-components";

export const SubmitComment = () => {
  return (
    <Main>
      <div className="userName">
        <span>Comment as</span>
        <a href="." onClick={(e) => e.preventDefault()}>
          {"amarjeet"}
        </a>
      </div>
      <div className="editor">
        <div className="editorSpace">
          <input placeholder="What are your thoughts?"></input>
        </div>

        <Editor>
          <div className="firstEditor">
            <div className="first">
              <span className="material-icons">format_bold</span>
              <span className="material-icons">format_italic</span>
              <span className="material-icons">link</span>
              <span className="material-icons">strikethrough_s</span>
              <span className="material-icons">code</span>
              <span className="material-icons">superscript</span>
              {/* <span>
                <div className="divider"></div>
              </span> */}
              <span className="material-icons">text_fields</span>
              <span className="material-icons">format_list_bulleted</span>
              <span className="material-icons">format_list_numbered</span>
              <span className="material-icons">format_quote</span>

              <span className="material-icons more">more_horiz</span>
            </div>
            <div className="second">
              <button>Markdown Mode</button>
            </div>
          </div>
          <div className="secondEditor">
            <button>
              <span>Comment</span>
            </button>
          </div>
        </Editor>
      </div>
    </Main>
  );
};

const Main = styled.div`
  margin: 24px 40px 24px 48px;

  & .userName {
    margin-bottom: 4px;
    font-size: 12px;
  }
  & .userName span {
    font-weight: 400;
    line-height: 18px;
    color: black;
    margin-right: 4px;
  }

  & .editor {
    left: 33px;
    border: 1px solid #131212;
    border-radius: 4px;
  }

  & .editorSpace {
    border-radius: 4px;
    position: relative;
    min-height: 140px;
    width: 680px;
    color: #746a6a;
    & input {
      width: 90%;
      border: none;
      outline: none;
      min-height: 50px;
      padding-left: 15px;
      font-size: 16px;
      border-radius: 4px;
    }
  }
`;

const Editor = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(214, 225, 235);
  border-radius: 4px;

  & .firstEditor {
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    word-break: break-word;
  }
  & .first {
    display: flex;
    justify-content: center;
  }
  & .first span {
    color: #6b6969;
    cursor: pointer;
    margin: 0 8px;
  }

  & .firstEditor .second button {
    white-space: pre-wrap;
    word-break: keep-all;
    margin: 4px 0;
    min-width: 120px;
    position: relative;
    border: 1px solid transparent;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 16px;
    text-transform: unset;
    min-height: 24px;
    min-width: 24px;
    padding: 4px 8px;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    color: #0079d3;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent;
    margin-left: 35px;
    :hover {
      background-color: #ececec;
    }
  }

  & .secondEditor {
    & button {
      white-space: pre;
      word-break: keep-all;
      color: white;
      padding-left: 20px;
      padding-right: 20px;
      margin: 4px 8px;
      background-color: #0079d3;
      border: none;
      font-size: 12px;
      font-weight: 700;
      min-height: 24px;
      min-width: 24px;
      padding: 4px 8px;
      align-items: center;
      border-radius: 9999px;
      box-sizing: border-box;
      cursor: pointer;
    }

    & .divider {
      border-right: 1px solid transparent;
      box-sizing: border-box;
      height: 100%;
      margin: 0 6px;
      width: 1px;
    }

    & .more {
      margin: 0 10px;
    }
  }
`;
