import React from "react";
import styled from "styled-components";

const HowToPlay = ({ setIsVisible }) => {
  return (
    <Wrapper>
      <Title>How To Play</Title>
      <Note>Note: This game works best with friends on audio/video chat.</Note>
      <TLDR>
        <TLDRText>TL;DR:</TLDRText> Drag white cards to bottom bar. Tapping
        bottom bar advances screens.
      </TLDR>
      <List style={{ textAlign: "left" }}>
        <li>
          Drag 7 white cards to the bottom bar. Each player can have 7 white
          cards at all times.
        </li>
        <li>
          The first player to enter the room is the judge; they flip the big
          black card and read it out loud to start the round.
        </li>
        <li>
          Tap the bottom bar to view your deck. Everyone but the judge can
          submit a single white card that they think fits the black card the
          best.
        </li>
        <li>
          Once everyone has submitted a card, everyone including the judge goes
          to the "Submitted Cards" screen by tapping the bottom bar within their
          deck where the judge proceeds to re-read the black card and then taps
          on each submitted card one at a time for all to admire or condemn.{" "}
        </li>
        <li>
          The judge announces a winner whereby all submitted white cards should
          be discarded and the winner can drag the big black card on the main
          screen to their player slot{" "}
        </li>
        <li>
          The next judge then flips the black card to start the next round.
          First player to have 7 black cards in their player slot wins.{" "}
        </li>
      </List>
      <Button type="button" onClick={() => setIsVisible(false)}>
        Got it!
      </Button>
    </Wrapper>
  );
};

const TLDR = styled.p`
  margin: 2rem auto;
  font-size: 1.25rem;
  max-width: 350px;
`;

const Note = styled.p`
  margin: 1rem 2rem 2em;
  font-style: italic;
  font-size: 1rem;
`;

const TLDRText = styled.span`
  color: rgb(255, 0, 128);
  font-weight: bold;
`;

const Wrapper = styled.div`
  max-height: 100vh;
  max-width: 600px;
  overflow: auto;
  padding: 2em 0;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-style: italic;
  font-weight: bold;
  color: rgb(255, 0, 128);
  font-size: 2em;
  text-transform: uppercase;
`;

const List = styled.ol`
  text-align: left;
  margin: 0 2em;
  padding-left: 1em;

  li {
    margin: 0.5em 0;
  }
`;
const Button = styled.button`
  appearance: none;
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

export default HowToPlay;
