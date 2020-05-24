import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CopyIcon } from './icons';
import {SERVER_URL} from './helpers';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import InputWithLabel from './InputWithLabel';

const handleKeyUp = ({ e, setNameOfDeck }) => {
  const val = e.target.value.trim().replace(/\s+/g, '-');
  setNameOfDeck(val);
}

const handleSubmit = ({ e, setSuccess, nameOfDeck, setError }) => {
  e.preventDefault();
  if (nameOfDeck.trim().length === 0) {
    return setError('Error: Please enter the name of your deck.')
  }
  axios.post(`${SERVER_URL}/api/createDeck`, { deckName: nameOfDeck })
    .then(res => {
      if (res.data.includes('Error')) {
        return setError(res.data);
      }
      setSuccess(true);
      setError('');
    })
}

const CreateADeck = ({ title }) => {
  const [nameOfDeck, setNameOfDeck] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState('');
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading>Create A Deck</Heading>
      <form onSubmit={e => handleSubmit({ e, setSuccess, nameOfDeck, setError })}>
        <Wrapper>
        <Label htmlFor="nameOfDeck">Name of your deck</Label>
        <Input id="nameOfDeck" type="text" onKeyUp={e => handleKeyUp({ e, setNameOfDeck })} />
        <ErrorText>{error}</ErrorText>
        <Button type="submit">Create</Button>
        </Wrapper>
      </form>
      {isSuccess && (
        <Redirect to={`edit-deck/${nameOfDeck}`} push />
      )}
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
const CopyInput = styled.input`
  display: block;
  margin: 1em 0;
  direction: rtl;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
`;

const ErrorText = styled.p`
  color: red;
  font-size: .8rem;
`;
const Input = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0;
  padding: .5em 0 .3em;
  background: transparent;
  border-bottom: 1px solid black;
  transition: border-color .25s;
  border-radius: 0;

  &:hover,
  &:focus {
    outline: 0;
    border-color:#2cce9f;
  }
`;

const Label = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: .813em;
  display: block;
  font-weight: bold;
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
  margin: 0 auto;
  font-weight: bold;

  &:hover,
  &:focus,
  &:disabled {
    opacity: .5;
    outline:0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  justify-content: center;
  margin: 2em auto;
`;

export default CreateADeck;