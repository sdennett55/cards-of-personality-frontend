import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import queryString from "query-string";
import { SERVER_URL } from './helpers';
import InputWithLabel from './InputWithLabel';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast, Slide } from "react-toastify";

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
  .Toastify__toast--info {
    background: #2cce9f;
    border-radius: 8px;
    color: #000;
    margin: 2em;
    font: inherit;
  }
  .Toastify__close-button {
    color: #000;
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
    return <GreenText>0</GreenText>;
  }

  const cardLength = deckTable.filter(card => card.type === type).length;
  return (
    <>
      <GreenText>{cardLength}</GreenText>
      {` ${type} card${cardLength !== 1 ? 's' : ''}`}
    </>
  )
}

const addCard = ({ e, setIsLoading, deckTable, type, text, setDeckTable, location, setError, setWhiteCard, setBlackCard, defaultLocation, reactGA }) => {
  e.preventDefault();

  if (!text.trim().length) {
    return setError('Please enter something, you know, more than 0 characters.');
  }

  // if text already exists in the deck, return error
  if (deckTable.find(card => card.type === type && card.text.toLowerCase() === text.toLowerCase())) {
    return setError(`This same ${type} card has already been submitted. Please try again.`);
  }

  setIsLoading(true);
  const deckName = location.replace('/', '');
  const secret = queryString.parse(defaultLocation.search).secret;
  axios.post(`${SERVER_URL}/api/addCard/`, { type, text, deckName, secret })
    .then(res => {
      // if successful, update state
      // const data = cleanUpData(res.data);
      // setDeckTable(data);
      if (res.data.includes('Error')) {
        return setError(res.data);
      }

      setDeckTable(deckTable => [...deckTable, { type, text }])
      setError('');

      reactGA.event({
        category: "Deck",
        action: `Added a ${type} card to the ${deckName} deck`,
        label: text,
      });

      if (type === 'black') {
        setBlackCard('');
      } else {
        setWhiteCard('');
      }
    })
    .catch(err => setError(err))
    .finally(info => {
      setIsLoading(false);
    })
};

const Title = ({ location }) => {
  if (location && location !== '/') {
    return (
      <MainHeading>Add cards to the <NameOfDeck>{location.replace(/\/|-/g, ' ')}</NameOfDeck> deck</MainHeading>
    )
  } else {
    return (
      <MainHeading>Edit a deck</MainHeading>
    )
  }
}

const EditADeck = ({ title, reactGA }) => {
  const [whiteCard, setWhiteCard] = useState('');
  const [blackCard, setBlackCard] = useState('');
  const [initialDecks, setInitialDecks] = useState([]);
  const [filteredDecks, setFilteredDecks] = useState([]);
  const [deckTable, setDeckTable] = useState([]);
  const [deckExists, setDeckExists] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [publicDecksInputVal, setPublicDecksInputVal] = useState(false);
  const defaultLocation = useLocation();
  const location = defaultLocation.pathname.replace('/edit-deck', '');

  useEffect(() => {
    // If we haven't chosen a deck and are just hitting the "/edit-deck" page
    if (!location || location === '/') {
      axios.get(`${SERVER_URL}/api/getPublicDecks`)
        .then(res => {
          console.log(res.data);
          setInitialDecks(res.data);
        })
    } else {
      const secret = queryString.parse(defaultLocation.search).secret;
      async function checkSecret() {
        try {
          // check for the deck secret first
          await axios.post(`${SERVER_URL}/api/getDeckSecret`, { secret, deckName: location.replace('/', '') });
          // if secret is legit, keep going and get cards from the deck
          axios.get(`${SERVER_URL}/api/getCardsFromDeck${location}`)
            .then(res => {
              if (res.data === 'no result') {
                return setDeckExists('no result');
              }
              if (!secret) {
                return setError('You don\'t have permissions to edit this deck.');
              }
              if (res.data.includes('Error')) {
                return setError(res.data);
              }
              setDeckTable(res.data);
              setDeckExists('result found');
              // Pop a success toast
              toast.info("Note: Bookmark or save this page. You can only update this deck with this exact link. Only send to people you trust.", {
                toastId: "copy-link-info",
                position: toast.POSITION.TOP_CENTER,
              });
            })
        } catch (err) {
          return setError(err.response.data);
        }
      }
      checkSecret();
    }

  }, [location, defaultLocation])
  return (
    <Page>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Title location={location} />

      {location && location !== '/' ? (
        <>
          {deckExists === 'result found' ? (
            <>
              <p><em>This deck has {getCardsLength({ type: 'white', deckTable })} and {getCardsLength({ type: 'black', deckTable })}</em></p>

              <Form onSubmit={e => addCard({ e, setIsLoading, deckTable, type: 'white', text: whiteCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setWhiteCard, defaultLocation, reactGA })}>
                <InputWithLabel
                  type="white"
                  whiteCard={whiteCard}
                  buttonText="ADD WHITE CARD"
                  labelText="Add a White Card"
                  onChange={setWhiteCard}
                  placeholderText="e.g. Spontaneous combustion"
                  isLoading={isLoading}
                />
              </Form>
              {error && error.includes('white') && <ErrorText>{error}</ErrorText>}

              <Form onSubmit={e => addCard({ e, setIsLoading, deckTable, type: 'black', text: blackCard, initialDecks, setFilteredDecks, setDeckTable, location, setError, setBlackCard, defaultLocation, reactGA })}>
                <InputWithLabel
                  type="black"
                  blackCard={blackCard}
                  buttonText="ADD BLACK CARD"
                  labelText="Add a Black Card"
                  onChange={setBlackCard}
                  placeholderText="e.g. Abraham Lincoln once said _______."
                  isLoading={isLoading}
                />
              </Form>
              {error && error.includes('black') && <ErrorText>{error}</ErrorText>}
            </>
          ) : deckExists === 'no result' ? (
            <>
              <p>Deck not found. Would you like to create one?</p>
              <Link to="/create-deck">Create Deck</Link>
            </>
          ) : error && (error.includes('permissions') || error.includes('exist')) ? (
            <ErrorText>{error}</ErrorText>
          ) : (
                  <p>Loading...</p>
                )}
        </>
      ) : (

          <Wrapper>
            <Label htmlFor="searchPublicDecks">Search Public Decks</Label>
            <Input type="text" onKeyUp={e => handleKeyUp({ e, initialDecks, setFilteredDecks, setPublicDecksInputVal })} />
            {filteredDecks && filteredDecks.length > 0 && (
              <ResultsList>
                {filteredDecks.map(({ name }) => (
                  <li><StyledLink to={`/edit-deck/${name}`}>{name.replace(/-/g, ' ')}</StyledLink></li>
                ))}
                {publicDecksInputVal && filteredDecks && !filteredDecks.length && (
                  <li>No results found.</li>
                )}
              </ResultsList>
            )}
          </Wrapper>

        )}
      <ToastContainer
        limit={1}
        autoClose={false}
        hideProgressBar
        closeOnClick
        transition={Slide}
        pauseOnFocusLoss={false}
      />
    </Page>
  )
}

const Page = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  max-width: 270px;
`;
const GreenText = styled.span`
  color: #2cce9f;
`
const MainHeading = styled.h1`
  color: #fff;
  margin: 0;
  font-weight: normal;
  font-size: 2em;
`;
const NameOfDeck = styled.em`
  background: linear-gradient(90deg,rgb(64,224,208),rgb(255,140,0),rgb(255,0,128) );
  border-radius: 8px;
  padding: 0 .25em 0;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: inline-block;
  vertical-align: bottom;
  text-transform: capitalize;
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
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  justify-content: center;
  margin: 2em auto;
`;
const ResultsList = styled.ul`
  list-style: none;
  padding: 1em 0;
  position: absolute;
  top: calc(100% - 1px);
  width: 100%;
  border: 1px solid #2cce9f;
  margin: 0;
  border-radius: 0 0 8px 8px;
  max-height: 139px;
  overflow: auto;
`;
const StyledLink = styled(Link)`
  display: block;
  color: #2cce9f;
  padding: .5em;
  transition: color .25s;
  text-transform: capitalize;

  &:hover,
  &:focus {
    color: #fff;
    text-decoration: none;
  }
`;

export default EditADeck;
