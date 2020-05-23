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

const handleKeyUp = ({ e, initialDecks, setFilteredDecks }) => {
  if (initialDecks.length) {
    if (e.target.value.trim() === '') {
      setFilteredDecks([]);
      return;
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

const addCard = ({ e, deckTable, type, text, setDeckTable, location, setError, setWhiteCard, setBlackCard }) => {
  e.preventDefault();

  // if text already exists in the deck, return error
  if (deckTable.find(card => card.type === type && card.text.toLowerCase() === text.toLowerCase())) {
    return setError(`This same ${type} card has already been submitted. Please try again.`);
  }
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
  const location = useLocation().pathname.replace('/edit-deck', '');
  useEffect(() => {
    // If we haven't chosen a deck and are just hitting the "/create-deck" page
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

              <form onSubmit={e => addCard({ e, deckTable, type: 'white', text: whiteCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setWhiteCard })}>
                <InputWithLabel
                  type="white"
                  whiteCard={whiteCard}
                  buttonText="ADD"
                  labelText="Add a White Card"
                  onChange={setWhiteCard}
                  placeholderText="e.g. Spontaneous combustion"
                />
              </form>
              {error && error.includes('white') && <ErrorText>{error}</ErrorText>}

              <form onSubmit={e => addCard({ e, deckTable, type: 'black', text: blackCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setBlackCard })}>
                <InputWithLabel
                  type="black"
                  blackCard={blackCard}
                  buttonText="ADD"
                  labelText="Add a Black Card"
                  onChange={setBlackCard}
                  placeholderText="e.g. Abraham Lincoln once said _______."
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
            <label htmlFor="searchPublicDecks" style={{display: 'block'}}>Search Public Decks</label>
            <input type="text" onKeyUp={e => handleKeyUp({ e, initialDecks, setFilteredDecks })} />
            <ul>
              {filteredDecks && filteredDecks.map(({ name }) => (
                <li><Link to={`/edit-deck/${name}`}>{name}</Link></li>
              ))}
            </ul>
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
`

export default EditADeck;