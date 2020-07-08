import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SERVER_URL } from "./helpers";
import axios from "axios";
import PrivacyCheck from "./PrivacyCheck";
import ChooseADeck from "./ChooseADeck";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const handleKeyUp = ({ e, setNameOfDeck }) => {
  const val = e.target.value.trim().replace(/\s+/g, "-");
  setNameOfDeck(val);
};

const handleSubmit = ({
  e,
  nameOfDeck,
  setError,
  isPrivate,
  deck,
  setSecret,
  reactGA,
  setLoading,
}) => {
  e.preventDefault();
  setLoading(true);
  if (nameOfDeck.trim().length === 0) {
    return setError("Error: Please enter the name of your deck.");
  }
  axios
    .post(`${SERVER_URL}/api/createDeck`, {
      deckName: nameOfDeck,
      isPrivate,
      hasSFWCards: deck === "safe-for-work",
      hasNSFWCards: deck === "not-safe-for-work",
    })
    .then((res) => {
      setLoading(false);
      if (res.data.includes("Error")) {
        return setError(res.data);
      }

      reactGA.event({
        category: "Deck",
        action: "Created a new deck",
        label: nameOfDeck,
      });

      // redirect on success
      setSecret(res.data);
      setError("");
    });
};

const CreateADeck = ({ title, reactGA }) => {
  const [nameOfDeck, setNameOfDeck] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [deck, setDeck] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (secret) {
      setSuccess(true);
    }
  }, [secret]);

  return (
    <Page>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Form
        onSubmit={(e) =>
          handleSubmit({
            e,
            setSuccess,
            nameOfDeck,
            setError,
            isPrivate,
            deck,
            setSecret,
            reactGA,
            setLoading,
          })
        }
      >
        <Wrapper>
          <MainHeading>Create a deck</MainHeading>
          <Label htmlFor="nameOfDeck">Name of your deck</Label>
          <Input
            id="nameOfDeck"
            type="text"
            onKeyUp={(e) => handleKeyUp({ e, setNameOfDeck })}
            maxLength="20"
          />
          <ErrorText>{error}</ErrorText>
        </Wrapper>
        <ChooseADeck
          title="Add the default SFW or NSFW cards"
          setDeck={setDeck}
          loading={loading}
          deck={deck}
          toggle
        />
        <PrivacyCheck
          setIsPrivate={setIsPrivate}
          title="deck"
          toastText="If checked, this deck will not be listed under community decks."
        />
        <Flex>
          <WhiteButton to="/">Back</WhiteButton>
          <Button type="submit" disabled={loading}>Create Deck</Button>
        </Flex>
      </Form>
      {isSuccess && (
        <Redirect to={`edit-deck/${nameOfDeck}?secret=${secret}`} push />
      )}
    </Page>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding: 2em;
    background: #000;
    color: #fff;
    border: 1em solid;
    border-image: linear-gradient(90deg, rgb(64,224,208), rgb(255,140,0), rgb(255,0,128) ) 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`;
const MainHeading = styled.h1`
  color: #fff;
  margin: 0;
  font-weight: normal;
  font-size: 2em;
  margin-bottom: 1em;
`;
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
  font-size: 0.8rem;
`;
const Input = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0;
  padding: 0.5em 0 0.3em;
  background: transparent;
  border-bottom: 1px solid #fff;
  transition: border-color 0.25s;
  border-radius: 0;
  color: #fff;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

const Label = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
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
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  margin-top: 1em;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
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

const Flex = styled.div`
  display: flex;
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

export default CreateADeck;
