import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { SERVER_URL } from "./constants";
import { LogoIcon } from "./icons";
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
        <LogoIcon />
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
        <JoinGameLabel htmlFor="joingame">GOT THE GAME CODE?</JoinGameLabel>
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
        <BlueButton type="button" to="/games">
          Public Games
        </BlueButton>
      </Form>
      <OrangeButton to="/create-game">Create Game</OrangeButton>
      <PinkButton to="/how-to-play">How To Play</PinkButton>
      <WhiteButton to="/create-deck">
        Create Deck <BETAText>BETA</BETAText>
      </WhiteButton>
      {/* <AltButton onClick={() => history.push('/create-deck')}>Create Deck</AltButton>
      <AltButton onClick={() => history.push('/edit-deck')}>Edit Deck</AltButton> */}
      <footer>
        <FooterText>
          Completely free and <InlineLink href="https://github.com/sdennett55/cards-of-personality-frontend" target="_blank" rel="noopener noreferrer">open sourced</InlineLink>. No ads, accounts, or
          subscriptions. If you enjoyed the game and want to say thanks you can{" "}
          <InlineLink href="https://www.buymeacoffee.com/steved" target="_blank" rel="noopener noreferrer">buy me a beer!</InlineLink>
        </FooterText>
      </footer>
    </LandingWrapper>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    border: 1em solid;
    border-image: linear-gradient(90deg, rgb(64,224,208), rgb(255,140,0), rgb(255,0,128) ) 1;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`;
const FooterText = styled.p`
  color: #fff;
  font-size: .8em;
  font-style: italic;
  margin: 2em 0 0;
  max-width: 360px;
  line-height: 1.3;
`
const InlineLink = styled.a`
  color: #2cce9f;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
const BETAText = styled.sup`
  color: #2cce9f;
  font-size: 0.7em;
  font-weight: bold;
`;
const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #000;
  padding: 2em;
`;
const Heading = styled.h1`
  width: 100%;
  position: relative;
  margin: 0 0 1rem;
  padding: 0 1rem;
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

const OrangeButton = styled(Link)`
  display: block;
  background: rgb(255, 140, 0);
  appearance: none;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: .75em 0;
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
const PinkButton = styled(Link)`
  appearance: none;
  background: rgb(255, 0, 128);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: .75em 0;
  font-weight: bold;
  transition: opacity 0.25s;
  text-decoration: none;

  @media screen and (max-width: 501px) and (orientation: portrait) {
    position: absolute;
    top: -16px;
    left: -140px;
    width: 360px;
    transform: rotate(-25deg);
  }

  @media screen and (max-height: 501px) {
    position: absolute;
    top: -16px;
    left: -140px;
    width: 360px;
    transform: rotate(-25deg);
  }

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
const WhiteButton = styled(Link)`
  display: block;
  appearance: none;
  background: #fff;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: .75em 0.5em;
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
const BlueButton = styled(Link)`
  display: block;
  appearance: none;
  background: rgb(64, 224, 208);
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0 .75em;
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
  padding: 0.35em 0.25em;
  border: 2px solid transparent;
  text-align: center;
  transition: border-color 0.25s;
  max-width: 120px;
  font-size: 1em;

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
