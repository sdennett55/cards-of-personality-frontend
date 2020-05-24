import React, { useState, useEffect } from 'react';
import { Redirect, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CopyIcon } from './icons';
import {SERVER_URL} from './helpers';
import InputWithLabel from './InputWithLabel';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding: 0 1em;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: .8rem;
`;

const handleKeyUp = ({ e, initialDecks, setFilteredDecks, setPublicDecksInputVal }) => {
  if (initialDecks.length) {
    if (e.target.value.trim() === '') {
      setFilteredDecks([]);
      setPublicDecksInputVal(false);
      return;
    }
    if (e.target.value !== '') {
      setPublicDecksInputVal(true);
    }
    const result = initialDecks.filter(({ name }) => name.startsWith(e.target.value.toLowerCase().trim()));

    setFilteredDecks(result);
  }
};

const getCardsLength = ({ type, deckTable }) => {
  if (!deckTable && !deckTable.length) {
    return 0;
  }

  const cardLength = deckTable.filter(card => card.type === type).length;
  return `${cardLength} ${type} card${cardLength !== 1 ? 's' : ''}`;
}

const addCard = ({ e, setIsLoading, deckTable, type, text, setDeckTable, location, setError, setWhiteCard, setBlackCard }) => {
  e.preventDefault();

  // if text already exists in the deck, return error
  if (deckTable.find(card => card.type === type && card.text.toLowerCase() === text.toLowerCase())) {
    return setError(`This same ${type} card has already been submitted. Please try again.`);
  }

  setIsLoading(true);
  const deckName = location.replace('/', '');
  axios.post(`${SERVER_URL}/api/addCard/`, { type, text, deckName })
    .then(res => {
      // if successful, update state
      // const data = cleanUpData(res.data);
      // setDeckTable(data);
      console.log(res);
      setDeckTable(deckTable => [...deckTable, { type, text }])
      setError('');

      if (type === 'black') {
        setBlackCard('');
      } else {
        setWhiteCard('');
      }
    })
    .catch(err => console.log(`There was an error broooo: ${err}`))
    .finally(info => {
      setIsLoading(false);
      console.log('finally ', info);
    })
};

const Title = ({location}) => {
  if (location && location !== '/') {
    return (
      <MainHeading>Add Cards to the <NameOfDeck>{location.replace(/\/|-/g, ' ')}</NameOfDeck> Deck</MainHeading>
    )
  } else {
    return (
      <MainHeading>Add Cards to a Deck</MainHeading>
    )
  }
}

const EditADeck = ({ title }) => {
  const [whiteCard, setWhiteCard] = useState('');
  const [blackCard, setBlackCard] = useState('');
  const [initialDecks, setInitialDecks] = useState([]);
  const [filteredDecks, setFilteredDecks] = useState([]);
  const [deckTable, setDeckTable] = useState([]);
  const [deckExists, setDeckExists] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [publicDecksInputVal, setPublicDecksInputVal] = useState(false);
  const location = useLocation().pathname.replace('/edit-deck', '');
  useEffect(() => {
    // If we haven't chosen a deck and are just hitting the "/edit-deck" page
    if (!location || location === '/') {
      axios.get(`${SERVER_URL}/api/getPublicDecks`)
        .then(res => {
          console.log(res.data);
          setInitialDecks(res.data);
        })
    } else {
      axios.get(`${SERVER_URL}/api/getTable${location}`)
        .then(res => {
          if (res.data === 'no result') {
            return setDeckExists('no result');
          }
          console.log('asdf', res.data);
          setDeckTable(res.data);
          setDeckExists('result found');
        })
    }

  }, [location])
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Title location={location} />

      {location && location !== '/' ? (
        <>
          {deckExists === 'result found' ? (
            <>
              <p>This deck has {getCardsLength({ type: 'white', deckTable })} and {getCardsLength({ type: 'black', deckTable })}.</p>

              <form onSubmit={e => addCard({ e, setIsLoading, deckTable, type: 'white', text: whiteCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setWhiteCard })}>
                <InputWithLabel
                  type="white"
                  whiteCard={whiteCard}
                  buttonText="ADD"
                  labelText="Add a White Card"
                  onChange={setWhiteCard}
                  placeholderText="e.g. Spontaneous combustion"
                  isLoading={isLoading}
                />
              </form>
              {error && error.includes('white') && <ErrorText>{error}</ErrorText>}

              <form onSubmit={e => addCard({ e, setIsLoading, deckTable, type: 'black', text: blackCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setBlackCard })}>
                <InputWithLabel
                  type="black"
                  blackCard={blackCard}
                  buttonText="ADD"
                  labelText="Add a Black Card"
                  onChange={setBlackCard}
                  placeholderText="e.g. Abraham Lincoln once said _______."
                  isLoading={isLoading}
                />
              </form>
              {error && error.includes('black') && <ErrorText>{error}</ErrorText>}
            </>
          ) : deckExists === 'no result' ? (
            <>
              <p>Deck not found. Would you like to create one?</p>
              <Link to="/create-deck">Create Deck</Link>
            </>
          ) : (
                <p>Loading...</p>
              )}
        </>
      ) : (
          <>
            <p>Are you looking to edit a specific deck?</p>
            <Wrapper>
              <Label htmlFor="searchPublicDecks">Search Public Decks</Label>
              <Input type="text" onKeyUp={e => handleKeyUp({ e, initialDecks, setFilteredDecks, setPublicDecksInputVal })} />
              <ResultsList>
                {filteredDecks && filteredDecks.map(({ name }) => (
                  <li><StyledLink to={`/edit-deck/${name}`}>{name}</StyledLink></li>
                ))}
                {publicDecksInputVal && filteredDecks && !filteredDecks.length && (
                  <li>No results found.</li>
                )}
              </ResultsList>
            </Wrapper>
          </>
        )}
    </>
  )
}

const MainHeading = styled.h1`
  text-transform: capitalize;
`;
const NameOfDeck = styled.em`
  background: rgba(44, 206, 159, 1);
  border-radius: 8px;
  padding: 0 .25em 0;
  text-shadow: 1px 1px 1px #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: inline-block;
  vertical-align: bottom;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  justify-content: center;
  margin: 2em auto;
`;
const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledLink = styled(Link)`
  display: block;
  color: #2cce9f;
  padding: .5em;
  transition: color .25s;

  &:hover,
  &:focus {
    color: #000;
  }
`;

export default EditADeck;