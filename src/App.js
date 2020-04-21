import React from 'react';
// import PropTypes from 'prop-types';
import DraggableCard from './draggable_card';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd';
import MyCardsDropZone from './my_cards_drop_zone';
import PlayerDrop from './player_drop';
import CardWrap from './card_wrap';
import BlankPlayerCard from './blank_player_card';
import GeneratePreview from './generate_preview';
import { blackCards, whiteCards } from './data';
import styled from 'styled-components';
import io from 'socket.io-client';
import './App.css';

var socket = io('http://10.0.0.208:3001');

export const BlackCard = React.memo(({ updateRoundStarted, text, setUserIsDragging }) => {
  return (
    <DraggableCard setUserIsDragging={setUserIsDragging} socket={socket} updateRoundStarted={updateRoundStarted} type="blackCard" bgColor="#000" color="#fff" text={text} />
  )
})

const PickUpPile = React.memo(({ id, text, setUserIsDragging }) => {
  return (
    <DraggableCard setUserIsDragging={setUserIsDragging} socket={socket} id={id} type="whiteCard" bgColor="#fff" color="#000" text={text} />
  )
})

class App extends React.PureComponent {
  componentDidMount() {
    if (localStorage.getItem('cardsAgainstSteve-name')) {
      this.setState({
        myName: localStorage.getItem('cardsAgainstSteve-name'),
        showNamePopup: false,
      });

      // can't reliably access the "socket" variable until it connects
      socket.on('connect', () => {
        const players = [...this.state.players].map(player => {
          if (player.id === socket.id) {
            return { ...player, name: localStorage.getItem('cardsAgainstSteve-name') }
          }
          return player;
        });
        this.setState({
          players,
        });

        socket.emit('name change', { id: socket.id, name: localStorage.getItem('cardsAgainstSteve-name'), poop: 'poop' });

      });
    }

    const newPlayers = [...this.state.players, { socket: socket.io }];

    this.setState({
      cardDimensions: {
        width: this.blackCardRef.current.offsetWidth,
        height: this.blackCardRef.current.offsetHeight
      },
      players: newPlayers,
    });

    // when a player changes their name, update players state with new name
    socket.on('name change', players => {
      this.setState({ players });
    });

    // when a player disconnects from the server, remove them from state
    socket.on('user disconnected', players => {
      console.log('user disconnected');
      this.setState({ players });
    });

    // when a new user connects
    // send that specific user the latest server states
    socket.on('new connection', ({ players, blackCards, whiteCards }) => {
      if (whiteCards && whiteCards.length > 0) {
        this.setState({ whiteCards });
      }

      console.log({players});
      if (blackCards && blackCards.length > 0) {
        this.setState({ blackCards });
      }

      console.log('neww userrr connectedddd', players)
      this.setState(() => ({ players }));
    });

    // when a new user connects, let every client know.
    socket.on('user connected', players => {
      this.setState({ players });
    });

    socket.on('dropped in my cards', ({ text }) => {
      const droppedCardIndex = this.state.whiteCards.findIndex(whiteCard => whiteCard === text);
      const newWhiteCards = [...this.state.whiteCards];
      newWhiteCards.splice(droppedCardIndex, 1);

      // send the server the new whiteCards
      socket.emit('update whiteCards', newWhiteCards);

      this.setState({ whiteCards: newWhiteCards });
    });

    socket.on('dropped in player drop', ({ players, blackCards }) => {
      // socket.emit('update players and blackCards', newWhiteCards);
      this.setState({ players, blackCards });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.roundStarted && this.state.roundStarted) {
      console.log('round started!!!');
    }
  }

  state = {
    blackCardWidth: null,
    blackCards,
    whiteCards,
    myCards: [],
    myName: '',
    players: [],
    roundStarted: false,
    currentHost: 0,
    showNamePopup: true,
    userIsDragging: false,
  }

  blackCardRef = React.createRef();

  getTheCurrentHost = index => this.setState({ currentHost: index });

  updateRoundStarted = hasStarted => this.setState({ roundStarted: hasStarted });

  addCardToPlayer = (passedInCard, playerDroppedOn) => {
    // if (this.state.roundStarted) {
    //   return;
    // }
    console.log({ passedInCard, playerDroppedOn });

    // get the players state, the player index, and give that the passedInCard (players[index].blackCards.push(passedInCard))
    // remove blackcard from blackcards
    this.setState(prevState => {
      const indexOfPassedInCard = prevState.blackCards.findIndex(blackCard => blackCard === passedInCard.text);
      const newBlackCards = [...prevState.blackCards];
      newBlackCards.splice(indexOfPassedInCard, 1);

      // update player card property with new card
      const newPlayers = [...prevState.players].map(player => {
        if (player.id === playerDroppedOn.id) {
          if (playerDroppedOn.blackCards && playerDroppedOn.blackCards.length) {
            // check if blackCard already exists with player
            if (!player.blackCards.some(blackCard => blackCard.text === passedInCard.text)) {
              player.blackCards = [...player.blackCards, { ...passedInCard }];
            }

          } else {
            player.blackCards = [{ ...passedInCard }];
          }
        } else {
          if (player.blackCards) {
            // if another player already has the blackCard, remove it from them
            player.blackCards = player.blackCards.filter(blackCard => {
              if (blackCard.text !== passedInCard.text) {
                return blackCard;
              }
            });
          }
        }
        return player;
      });
      console.log({ newPlayers });

      return {
        players: newPlayers,
        blackCards: newBlackCards,
      };
    });

    // send event that a card was moved to someones deck to the server
    socket.emit('dropped in player drop', {players: this.state.players, blackCards: this.state.blackCards});
  }

  addCardToMyCards = passedInCard => {
    if (this.state.myCards.length === 7) {
      return;
    }

    // send event that a card was moved to someones deck to the server
    socket.emit('dropped in my cards', passedInCard);

    this.setState(prevState => {
      const indexOfPassedInCard = prevState.whiteCards.findIndex(whiteCard => whiteCard === passedInCard.text);
      const newWhiteCards = [...prevState.whiteCards];
      newWhiteCards.splice(indexOfPassedInCard, 1);

      return {
        myCards: [...prevState.myCards, passedInCard],
        whiteCards: newWhiteCards,
      };
    });
  }

  getBlankPlayerCards(players) {
    const length = 6 - players.length;
    const arr = Array.from({ length }, (_, i) => i);

    return arr;
  }

  updateMyName = e => {
    const myName = e.target.value.toUpperCase().trim();
    this.setState({ myName });
    console.log('NAME CHANGE!', socket.id);
    // send event that a user just changed their name
    socket.emit('name change', { id: socket.id, name: myName });
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('cardsAgainstSteve-name', this.state.myName);
    this.setState({ showNamePopup: false });
  }

  setUserIsDragging = bool => {
    this.setState({userIsDragging: bool});
  };

  render() {
    return (
      <div className="App">
        {this.state.showNamePopup && (
          <form className="App-namePopup" onSubmit={e => this.handleSubmit(e)}>

            <label htmlFor="name">Enter your name:</label>

            <input type="text" id="name" onChange={e => this.updateMyName(e)} />
            <button type="submit">Submit</button>
          </form>
        )}
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Table>
            <CardsWrap>
              <Piles>
                <CardWrap innerRef={this.blackCardRef}>
                  {this.state.blackCards.slice(Math.max(this.state.blackCards.length - 7, 0)).map(({ text }, index) => (
                    <BlackCard setUserIsDragging={this.setUserIsDragging} updateRoundStarted={this.updateRoundStarted} key={text} id={index} text={text} cardDimensions={this.state.cardDimensions} />
                  ))}
                </CardWrap>
                <CardWrap>
                  {this.state.whiteCards.slice(Math.max(this.state.whiteCards.length - 7, 0)).map((text, index) => (
                    <PickUpPile setUserIsDragging={this.setUserIsDragging} key={text} id={index} text={text} />
                  ))}
                </CardWrap>
              </Piles>
              <PlayerDecks className="Table-playerDecks">
                {this.state.players && this.state.players.map(({ name }, index) => (
                  <PlayerDrop userIsDragging={this.state.userIsDragging} key={index} index={index} socket={socket} roundStarted={this.state.roundStarted} addCardToPlayer={this.addCardToPlayer} players={this.state.players} myName={this.state.myName} />
                ))}
                {this.getBlankPlayerCards(this.state.players).map((num, index) => (
                  <BlankPlayerCard key={num} index={index} count={this.state.players.length} />
                ))}
              </PlayerDecks>

            </CardsWrap>
            <MyCardsDropZone addCardToMyCards={this.addCardToMyCards} myCards={this.state.myCards} myName={this.state.myName} />
          </Table>
        </DndProvider>
      </div>
    );
  }
}

const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Piles = styled.div`
  display: flex;
  width: calc(50% - .25em);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) and (orientation: portrait) {
    width: 100%;
    margin: .5em 0;
    order: 1;
  }
`;

const PlayerDecks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - .25em);
  justify-content: space-between;
  align-content: center;
  margin-right: -.5em;
  overflow: hidden;

  @media (max-width: 500px) and (orientation: portrait) {
    width: calc(100% + 1em);
    height: calc(50vh - 1em);
    margin: .5em -.5em .5em;
  }
`;

const CardsWrap = styled.div`
  display: flex; 
  flex-grow: 1; 
  padding: 1em; 
  justify-content: space-between;
  max-height: calc(100vh - 50px);

  @media (max-width: 500px) and (orientation: portrait) {
    max-height: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export default App;
