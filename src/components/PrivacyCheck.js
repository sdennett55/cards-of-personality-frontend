import React from 'react';
import { ToastContainer, toast, Slide } from "react-toastify";
import { HelpIcon } from "../icons";
import styled, { createGlobalStyle } from "styled-components";

const PrivacyCheck = ({ setIsPrivate, title, toastText }) => {
  return (
    <>
      <GlobalStyle />
      <Divider>
        <Flex>
          <PublicCheckbox
            id="checkbox"
            type="checkbox"
            onChange={() => setIsPrivate((bool) => !bool)}
          />
          <PublicLabel htmlFor="checkbox">
            Make {title} private{" "}
            <IconWrap
              type="button"
              onClick={() =>
                toast.info(
                  toastText,
                  {
                    toastId: "private-toast",
                    position: toast.POSITION.TOP_CENTER,
                  }
                )
              }
            >
              <HelpIcon />
            </IconWrap>
          </PublicLabel>
        </Flex>
      </Divider>
      <ToastContainer
        limit={1}
        autoClose={5000}
        hideProgressBar
        closeOnClick
        transition={Slide}
        pauseOnFocusLoss={false}
      />
    </>
  )
};

const GlobalStyle = createGlobalStyle`
  .Toastify__toast--info {
    background: #2cce9f;
    border-radius: 8px;
    color: #000;
    margin: 2em;
    font: inherit;
  }
  .Toastify__close-button {
    color: #000;
  }
`;

const Divider = styled.div`
  margin: 1em 0;
`;

const Flex = styled.div`
  display: flex;
`;

const PublicLabel = styled.label`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5em;
`;

const PublicCheckbox = styled.input`
  display: block;
  background: #fff;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #fff;
  transition: background 0.25s;
  margin-right: 0.5em;

  &:focus {
    outline: 0;
  }
  &:checked {
    background: #2cce9f;
  }
`;

const IconWrap = styled.button`
  appearance: none;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 0 0 0 0.25em;
  transition: opacity 0.25s, color 0.25s;
  padding: 0;

  &:hover,
  &:focus,
  &:disabled {
    color: #2cce9f;
    opacity: 0.5;
    outline: 0;
  }
`;

export default PrivacyCheck;
