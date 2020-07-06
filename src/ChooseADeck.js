import React from 'react';
import styled from "styled-components";

const ChooseADeck = ({ setDeck, title, loading, deck, toggle }) => {
  const handleSFWClick = () => {
    if (toggle) {
      setDeck(deck === 'safe-for-work' ? '' : 'safe-for-work');
      return;
    }

    setDeck('safe-for-work');
  }

  const handleNSFWClick = () => {
    if (toggle) {
      setDeck(deck === 'not-safe-for-work' ? '' : 'not-safe-for-work');
      return;
    }

    setDeck('not-safe-for-work');
  }

  return (
    <>
      <StartTitle>{title}</StartTitle>
      <Flex>
        <BlueButton
          onClick={handleSFWClick}
          disabled={loading}
          style={{ opacity: deck === "safe-for-work" ? 1 : 0.5 }}
          type="button"
        >
          Safe for Work
        </BlueButton>
        <PinkButton
          onClick={handleNSFWClick}
          disabled={loading}
          style={{ opacity: deck === "not-safe-for-work" ? 1 : 0.5 }}
          type="button"
        >
          Not Safe for Work
        </PinkButton>
      </Flex>
    </>
  )
};

const Flex = styled.div`
  display: flex;
`;
const StartTitle = styled.h2`
  color: #fff;
  margin: 0.5em 0 0;
  font-weight: normal;
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

export default ChooseADeck;