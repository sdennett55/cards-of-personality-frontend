import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CopyIcon } from './icons';
import {SERVER_URL} from './helpers';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

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
const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  display: block;
  margin: 1em auto;
`;
const CopyInput = styled.input`
  display: block;
  margin: 1em 0;
  direction: rtl;
`;
const Heading = styled.h1`
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;
`;
const CopyButton = styled.button`

`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const handleKeyUp = ({ e, setNameOfDeck }) => {
  const val = e.target.value.trim().replace(/\s+/g, '-');
  setNameOfDeck(val);
}

const handleSubmit = ({ e, setSuccess, nameOfDeck }) => {
  e.preventDefault();
  axios.post(`${SERVER_URL}/api/createDeck`, { deckName: nameOfDeck })
    .then(res => {
      console.log(res);
      setSuccess(true);
    })
}

const CreateADeck = ({ title }) => {
  const [nameOfDeck, setNameOfDeck] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading>Create A Deck</Heading>
      <form onSubmit={e => handleSubmit({ e, setSuccess, nameOfDeck })}>
        <Label htmlFor="nameOfDeck">Name of your deck</Label>
        <Input id="nameOfDeck" type="text" onKeyUp={e => handleKeyUp({ e, setNameOfDeck })} />
        <Button type="submit">Create</Button>
      </form>
      {isSuccess && (
        <Redirect to={`edit-deck/${nameOfDeck}`} push />
      )}
    </>
  )
}

export default CreateADeck;