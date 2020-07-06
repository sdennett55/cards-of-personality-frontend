import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SERVER_URL } from './helpers';
import axios from 'axios';
import PrivacyCheck from './PrivacyCheck';
import ChooseADeck from './ChooseADeck';
import styled, { createGlobalStyle } from 'styled-components';

const handleKeyUp = ({ e, setNameOfDeck }) => {
  const val = e.target.value.trim().replace(/\s+/g, '-');
  setNameOfDeck(val);
}

const handleSubmit = ({ e, setSuccess, nameOfDeck, setError, isPrivate, deck, }) => {
  e.preventDefault();
  if (nameOfDeck.trim().length === 0) {
    return setError('Error: Please enter the name of your deck.')
  }
  axios.post(`${SERVER_URL}/api/createDeck`, { deckName: nameOfDeck, isPrivate, hasSFWCards: deck === 'safe-for-work', hasNSFWCards: deck === 'not-safe-for-work', })
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
  const [isPrivate, setIsPrivate] = useState(false);
  const [deck, setDeck] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Page>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Form onSubmit={e => handleSubmit({ e, setSuccess, nameOfDeck, setError, isPrivate, deck })}>
        <Wrapper>
          <Label htmlFor="nameOfDeck">Name of your deck</Label>
          <Input id="nameOfDeck" type="text" onKeyUp={e => handleKeyUp({ e, setNameOfDeck })} />
          <ErrorText>{error}</ErrorText>
        </Wrapper>
        <ChooseADeck title="Add the default SFW or NSFW cards" setDeck={setDeck} loading={loading} deck={deck} toggle />
        <PrivacyCheck setIsPrivate={setIsPrivate} title="deck" toastText="If checked, this game will not be listed under public games." />
        <Button type="submit">Create Deck</Button>
      </Form>
      {isSuccess && (
        <Redirect to={`edit-deck/${nameOfDeck}`} push />
      )}
    </Page>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding: 0;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`
const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #000;
  min-height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border-bottom: 1px solid #fff;
  transition: border-color .25s;
  border-radius: 0;
  color: #fff;

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
  color: #fff;
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
  margin-top: 1em;

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
  margin: auto;
`;

export default CreateADeck;