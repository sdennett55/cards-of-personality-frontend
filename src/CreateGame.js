import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "./helpers";
import { HelpIcon } from "./icons";
import { ToastContainer, toast, Slide } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";

function handleCreateGame({ history, deck, setError, setLoading, isPrivate }) {
  setLoading("createGame");
  createRandomRoom({ history, deck, setError, setLoading, isPrivate });
}

function createRandomRoom({ history, deck, setError, setLoading, isPrivate }) {
  const random = (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  ).substr(0, 5);

  // check server to make sure random room doesn't already exist
  axios
    .post(`${SERVER_URL}/api/checkAvailableRooms`, { roomName: random })
    .then((res) => {
      setLoading(false);
      setError("");
      if (!res.data) {
        history.push(
          `/g/${random}${deck === 'not-safe-for-work' ? `?deck=${deck}` : ''}${isPrivate ? "&private=1" : ""}`
        );
      } else {
        createRandomRoom({ history, deck, setError, setLoading, isPrivate });
      }
    })
    .catch((err) => {
      setError("There was an error on the server. Please try again.");
      console.error(err);
    });
}

const CreateGame = () => {
  const history = useHistory();
  const [deck, setDeck] = useState("safe-for-work");
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <Modal>
      <GlobalStyle />
      <StartTitle>Choose a Deck</StartTitle>
      <Flex>
        <BlueButton
          onClick={() => setDeck("safe-for-work")}
          disabled={loading}
          style={{ opacity: deck === "safe-for-work" ? 1 : 0.5 }}
        >
          Safe for Work
        </BlueButton>
        <PinkButton
          onClick={() => setDeck("not-safe-for-work")}
          disabled={loading}
          style={{ opacity: deck === "not-safe-for-work" ? 1 : 0.5 }}
        >
          Not Safe for Work
        </PinkButton>
      </Flex>
      <Divider>
        <Flex>
          <PublicCheckbox
            id="checkbox"
            type="checkbox"
            onChange={() => setIsPrivate((bool) => !bool)}
          />
          <PublicLabel htmlFor="checkbox">
            Make game private{" "}
            <IconWrap
              onClick={() =>
                toast.info(
                  "If checked, this game will not be listed under public games.",
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
      <Flex>
        <WhiteButton to="/">Back</WhiteButton>
        <GreenButton
          onClick={() =>
            handleCreateGame({
              history,
              deck,
              setError,
              setLoading,
              isPrivate,
            })
          }
        >
          Create
        </GreenButton>
      </Flex>
      {error && <ErrorText>{error}</ErrorText>}
      <ToastContainer
        limit={1}
        autoClose={5000}
        hideProgressBar
        closeOnClick
        transition={Slide}
        pauseOnFocusLoss={false}
      />
    </Modal>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
  .Toastify__toast--info {
    background: #2cce9f;
    border-radius: 8px;
    color: #000;
    margin: 1em;
    font: inherit;
  }
  .Toastify__close-button {
    color: #000;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
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

const Divider = styled.div`
  margin: 1em 0;
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  background: #000;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const WhiteButton = styled(Link)`
  display: block;
  appearance: none;
  background: #fff;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  transition: opacity 0.25s;
  text-decoration: none;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;
const PinkButton = styled.button`
  display: block;
  appearance: none;
  background: rgb(255, 0, 128);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  transition: opacity 0.25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 1;
    outline: 0;
  }
`;
const BlueButton = styled.button`
  display: block;
  appearance: none;
  background: rgb(64, 224, 208);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  transition: opacity 0.25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 1;
    outline: 0;
  }
`;
const GreenButton = styled.button`
  display: block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  transition: opacity 0.25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;

const Flex = styled.div`
  display: flex;
`;
const StartTitle = styled.h2`
  color: #fff;
  margin: 0.5em 0 0;
  font-weight: normal;
`;

export default CreateGame;
