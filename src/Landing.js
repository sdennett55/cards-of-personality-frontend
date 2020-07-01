import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { SERVER_URL } from "./helpers";
import styled, { createGlobalStyle } from "styled-components";

const MIN_ROOM_NAME_CHARS = 2;
const MAX_ROOM_NAME_CHARS = 16;

function handleJoinGame({
  e,
  setLoading,
  joinGameInputRef,
  history,
  setErrorMsg,
}) {
  e.preventDefault();
  if (joinGameInputRef.current.value.length < MIN_ROOM_NAME_CHARS) {
    setErrorMsg({
      type: "join",
      message: `Room name must be at least ${MIN_ROOM_NAME_CHARS} characters long.`,
    });
    return;
  }
  if (joinGameInputRef.current.value.length > MAX_ROOM_NAME_CHARS) {
    setErrorMsg({
      type: "join",
      message: `Room name must be no longer than ${MAX_ROOM_NAME_CHARS} characters.`,
    });
    return;
  }
  setLoading("join");
  axios
    .post(`${SERVER_URL}/api/checkAvailableRooms`, {
      roomName: joinGameInputRef.current.value,
    })
    .then((res) => {
      setLoading("");

      // if no response, game doesn't exist, so ask if they want to create it
      if (!res.data) {
        setErrorMsg({ type: "join" });
      } else {
        history.push(`/g/${joinGameInputRef.current.value}`);
      }
    })
    .catch((err) => {
      setErrorMsg({
        type: "join",
        message: "There was an error on the server. Please try again.",
      });
      console.error(err);
    });
}

const Landing = ({ title }) => {
  const history = useHistory();
  const joinGameInputRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState("");
  return (
    <LandingWrapper>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading>
        <HeadingText>Cards of</HeadingText>{" "}
        <Personality>
          <LetterP>P</LetterP>ersonalit<LetterY>y</LetterY>
        </Personality>
      </Heading>
      <Form
        onSubmit={(e) =>
          handleJoinGame({
            e,
            setLoading,
            joinGameInputRef,
            history,
            setErrorMsg,
          })
        }
      >
        <JoinGameLabel htmlFor="joingame">ENTER GAME CODE</JoinGameLabel>
        <JoinGameInput
          ref={joinGameInputRef}
          id="joingame"
          minLength={MIN_ROOM_NAME_CHARS}
          maxLength={MAX_ROOM_NAME_CHARS}
          text="text"
          required
        />
        <GreenButton type="submit" disabled={loading === "join"}>
          Join Game
        </GreenButton>
        {errorMsg.type === "join" && !errorMsg.message ? (
          <GameExistsMessage>
            Game doesn't exist. Would you like to{" "}
            <Link to={`/g/${joinGameInputRef.current.value}`}>create it?</Link>
          </GameExistsMessage>
        ) : (
          errorMsg.type === "join" &&
          errorMsg.message && <ErrorText>{errorMsg.message}</ErrorText>
        )}
        <OrTextWrap>
          <OrText>OR</OrText>
        </OrTextWrap>
        <PublicGamesButton
          type="button"
          to="/games"
        >
          Public Games
        </PublicGamesButton>
      </Form>
      <CreateGameButton to="/create-game">
        Create Game
      </CreateGameButton>
      {/* <AltButton onClick={() => history.push('/create-deck')}>Create Deck</AltButton>
      <AltButton onClick={() => history.push('/edit-deck')}>Edit Deck</AltButton> */}
    </LandingWrapper>
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
`;
const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #000;
`;
const Heading = styled.h1`
  position: relative;
  margin: 0 0 1rem;
  padding: 0 1rem;
  font-size: 4em;

  @media (min-width: 560px) {
    font-size: 7em;
  }
`;
const Personality = styled.span`
  background: linear-gradient(
    to right,
    rgb(64, 224, 208),
    rgb(255, 140, 0),
    rgb(255, 0, 128)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  letter-spacing: -1.2px;
  text-shadow: 1px 1px 1xp rgba(0, 0, 0, 0);
`;

const HeadingText = styled.span`
  position: absolute;
  top: -0.05em;
  left: 2.3em;
  text-transform: uppercase;
  font-size: 0.37em;
  letter-spacing: 0.1em;
  font-weight: normal;
  color: #fff;

  @media (min-width: 560px) {
    left: 2em;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
`;

const GameExistsMessage = styled.p`
  color: #fff;

  a {
    color: #2cce9f;
  }
`;

const CreateGameButton = styled(Link)`
  display: block;
  appearance: none;
  background: rgb(255, 0, 128);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0;
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
const LetterP = styled.span`
  margin-right: -0.04em;
`;
const LetterY = styled.span`
  margin-left: 0.02em;
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
const PublicGamesButton = styled(Link)`
  display: block;
  appearance: none;
  background: rgb(64, 224, 208);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0;
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
const OrTextWrap = styled.p`
  position: relative;
  font-style: italic;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 1px solid #fff;
    width: 70px;
    height: 1px;
  }
`;

const OrText = styled.span`
  position: relative;
  background: #000;
  padding: 0 0.5em;
`;

const JoinGameInput = styled.input`
  appearance: none;
  border-radius: 8px;
  padding: 0.5em 0.5em;
  border: 2px solid transparent;
  text-align: center;

  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;
const JoinGameLabel = styled.label`
  display: block;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #fff;
  margin-bottom: 0.5em;
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Landing;
