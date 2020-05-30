import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

const Landing = ({ title }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading>Cards Against Strange Dudes</Heading>
      <Button>Join Game</Button>
      <Button>Create Game</Button>
      <AltButton>Create Deck</AltButton>
      <AltButton>Edit Deck</AltButton>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`
const Heading = styled.h1`
`;
const Button = styled.button`
  display: block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: .7em 1em;
  border-radius: 8px;
  margin: 1em auto;
  font-weight: bold;

  &:hover,
  &:focus,
  &:disabled {
    opacity: .5;
    outline:0;
  }
`;
const AltButton = styled.button`
  display: block;
  appearance: none;
  background: #000;
  color: #2cce9f;
  font-size: 1em;
  border: 0;
  padding: .7em 1em;
  border-radius: 8px;
  margin: 1em auto;
  font-weight: bold;

  &:hover,
  &:focus,
  &:disabled {
    opacity: .5;
    outline:0;
  }
`;

export default Landing;