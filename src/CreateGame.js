import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "./helpers";
import PrivacyCheck from './PrivacyCheck';
import ChooseADeck from './ChooseADeck';
import styled, { createGlobalStyle } from "styled-components";

function handleCreateGame({ history, deck, setError, setLoading, isPrivate }) {
  setLoading("createGame");
  createRandomRoom({ history, deck, setError, setLoading, isPrivate });
}

function getQueries({deck, isPrivate}) {
  let queryString = '';

  if (deck === 'not-safe-for-work') {
    queryString += `?deck=${deck}`;
  }
  if (isPrivate) {
    if (deck === 'safe-for-work') {
      queryString += '?private=1'
    } else if (deck === 'not-safe-for-work') {
      queryString += '&private=1';
    }
  }

  return queryString;
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
          `/g/${random}${getQueries({deck, isPrivate})}`
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
    <Wrapper>
      <GlobalStyle />
      <ChooseADeck title="Choose a deck" setDeck={setDeck} loading={loading} deck={deck} />
      <PrivacyCheck setIsPrivate={setIsPrivate} title="game" toastText="If checked, this game will not be listed under public games." />
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
    </Wrapper>
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

const Wrapper = styled.div`
  min-height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default CreateGame;
