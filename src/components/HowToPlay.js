import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const HowToPlay = ({ isPage, setIsVisible }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Title>How to play</Title>
      <Note>Note: This game works best with friends on audio/video chat.</Note>
      <TLDR>
        <TLDRText>TL;DR:</TLDRText> Drag white cards to bottom bar. Tapping
        bottom bar advances screens.
      </TLDR>
      <List style={{ textAlign: "left" }}>
        <li>
          The first player to enter the room is the judge. They flip the big
          black card and read it out loud to start the round.
        </li>
        <li>
          Tap the bottom bar to view your deck. Everyone but the judge submits a
          single white card that fits the black card the best.
        </li>
        <li>
          Once everyone has submitted a card, everyone goes to the "Submitted
          Cards" screen by tapping the bottom bar within their deck where the
          judge proceeds to re-read the black card and then taps on each
          submitted card one at a time for all to admire or condemn.{" "}
        </li>
        <li>
          The judge announces a winner whereby all submitted white cards should
          be discarded and the winner can drag the big black card on the main
          screen to their player slot{" "}
        </li>
        <li>
          Each player that submitted a card must may another white card. Players
          can have 7 white cards in their deck at all times.
        </li>
        <li>
          The next judge then flips the black card to start the next round.
          First player to have 7 black cards in their player slot wins!{" "}
        </li>
      </List>
      {isPage ? (
        <LinkButton to="/">Got it!</LinkButton>
      ) : (
        <Button type="button" onClick={() => setIsVisible(false)}>
          Got it!
        </Button>
      )}
    </Wrapper>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    background: #000;
    color: #fff;
    border: 1em solid;
    border-image: linear-gradient(90deg,rgb(64,224,208),rgb(255,140,0),rgb(255,0,128) ) 1;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TLDR = styled.p`
  margin: 2rem auto;
  font-size: 1.25rem;
  max-width: 350px;
`;

const Note = styled.p`
  margin: 1em 2em 0;
  font-style: italic;
  font-size: 1rem;
`;

const TLDRText = styled.span`
  color: rgb(255, 0, 128);
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  overflow: auto;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
  color: rgb(255, 0, 128);
  font-size: 2em;
`;

const List = styled.ol`
  text-align: left;
  padding-left: 1.25em;
  margin-top: 0;

  li {
    margin: 1em 0;
    &:first-child {
      margin-top: 0;
    }
  }
`;
const Button = styled.button`
  appearance: none;
  font-weight: bold;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 0 auto;
  transition: opacity 0.25s;
  margin-top: 1em;
  background-color: rgb(255, 0, 128);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;
const LinkButton = styled(Link)`
  display: inline-block;
  font-weight: bold;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  transition: opacity 0.25s;
  margin: 1em 0 0;
  background-color: rgb(255, 0, 128);
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

export default HowToPlay;
