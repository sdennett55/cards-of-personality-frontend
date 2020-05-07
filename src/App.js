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

var socketIP = process.env.NODE_ENV === 'development'
  ? 'http://10.0.0.208:3001'
  : 'https://cards-against-steve.herokuapp.com';
var socket = io(socketIP);

export const BlackCard = React.memo(({ text, setUserIsDragging }) => {
  return (
    <DraggableCard setUserIsDragging={setUserIsDragging} socket={socket} type="blackCard" bgColor="#000" color="#fff" text={text} />
  )
})

const PickUpPile = React.memo(({ id, text, setUserIsDragging }) => {
  return (
    <DraggableCard setUserIsDragging={setUserIsDragging} socket={socket} id={id} type="whiteCard" bgColor="#fff" color="#000" text={text} />
  )
})

class App extends React.PureComponent {
  componentDidMount() {

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
    socket.on('new connection', ({ players, blackCards, whiteCards, submittedCards }) => {
      if (whiteCards && whiteCards.length > 0) {
        this.setState({ whiteCards });
      }

      console.log({ players });
      if (blackCards && blackCards.length > 0) {
        this.setState({ blackCards });
      }

      if (submittedCards && submittedCards.length > 0) {
        this.setState({ submittedCards });
      }

      console.log('neww userrr connectedddd', players)
      this.setState(() => ({ players }));
    });

    // when a new user connects, let every client know.
    socket.on('user connected', players => {
      this.setState({ players });
    });

    socket.on('dropped in my cards', ({ whiteCard: { text }, players }) => {
      console.log('somebody dropped some shit', { players });
      const droppedCardIndex = this.state.whiteCards.findIndex(whiteCard => whiteCard === text);
      const newWhiteCards = [...this.state.whiteCards];
      newWhiteCards.splice(droppedCardIndex, 1);

      // send the server the new whiteCards
      socket.emit('update whiteCards', { whiteCards: newWhiteCards, players });

      this.setState({ whiteCards: newWhiteCards, players, });
    });

    socket.on('update players', players => {
      this.setState({ players });
    });

    socket.on('update submittedCards', submittedCards => {
      console.log('someone submitted a card!!!', submittedCards);
      this.setState({ submittedCards });
    });

    socket.on('submitted a card', ({submittedCards, players}) => {
      this.setState({ submittedCards, players });
    });

    socket.on('player rejoins', players => {
      const playerWithWhiteCards = players.find(player => socket.id === player.id);
      if (playerWithWhiteCards.whiteCards) {
        this.setState({ myCards: playerWithWhiteCards.whiteCards })
      }

      this.setState({ players });
    })

    socket.on('dropped in player drop', ({ players, blackCards }) => {
      // socket.emit('update players and blackCards', newWhiteCards);
      this.setState({ players, blackCards });
    });

    socket.on('restart game', (_) => {
      console.log('game restarted!!!!');
      const newPlayers = this.state.players.map(player => {
        const newPlayer = {...player};
        if (player.whiteCards && player.whiteCards.length) {
          delete newPlayer.whiteCards;
        }
        if (player.blackCards && player.blackCards.length) {
          delete newPlayer.blackCards;
        }
        
        return newPlayer;
      });
      this.setState({ whiteCards, blackCards, submittedCards: [], myCards: [], players: newPlayers });
      socket.emit('restart game', {whiteCards, blackCards, players: newPlayers});
    });
  }

  state = {
    blackCardWidth: null,
    blackCards,
    whiteCards,
    myCards: [],
    myName: localStorage.getItem('cas-name') || '',
    players: [],
    submittedCards: [],
    currentHost: 0,
    showNamePopup: true,
    userIsDragging: false,
    nameError: '',
  }

  blackCardRef = React.createRef();

  getTheCurrentHost = index => this.setState({ currentHost: index });

  addCardToPlayer = (passedInCard, playerDroppedOn) => {
    console.log({ passedInCard, playerDroppedOn });

    console.log('playerDroppedOn.name: ', playerDroppedOn.name, this.state.myName);

    if (playerDroppedOn.name === this.state.myName) {
      console.log('DROPPED ON ME!!!')
    }

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
    socket.emit('dropped in player drop', { players: this.state.players, blackCards: this.state.blackCards });
  }

  addCardToMyCards = passedInCard => {
    if (this.state.myCards.length === 7) {
      return;
    }

    this.setState(prevState => {
      const indexOfPassedInCard = prevState.whiteCards.findIndex(whiteCard => whiteCard === passedInCard.text);
      const newWhiteCards = [...prevState.whiteCards];
      newWhiteCards.splice(indexOfPassedInCard, 1);

      // update player whiteCards property
      const newPlayers = [...prevState.players].map(player => {
        if (player.id === socket.id) {
          const newPlayer = { ...player };
          newPlayer.whiteCards = [...(newPlayer.whiteCards ? newPlayer.whiteCards : []), passedInCard];
          return newPlayer;
        }
        return player;
      });

      return {
        myCards: [...prevState.myCards, passedInCard],
        whiteCards: newWhiteCards,
        players: newPlayers,
      };
    });

    // send event that a card was moved to someones deck to the server
    socket.emit('dropped in my cards', { passedInCard, players: this.state.players, whiteCards: this.state.whiteCards });

  }

  submitACard = passedInCard => {
    if (this.state.submittedCards.length === 6) {
      return;
    }

    console.log('this.state.myCards: ', this.state.myCards);

    // remove passedInCard from myCards
    const passedInCardIndex = this.state.myCards.findIndex(card => card.text === passedInCard.text);
    console.log('this.state.myCards[passedInCardIndex]: ', this.state.myCards[passedInCardIndex]);
    const newMyCards = [...this.state.myCards];
    newMyCards.splice(passedInCardIndex, 1);

    console.log({ passedInCardIndex, newMyCards });


    // find current player from players and update whiteCards property to be newMyCards
    const myPlayerIndex = this.state.players.findIndex(player => player.id === socket.id);
    const newPlayers = [...this.state.players];
    newPlayers[myPlayerIndex].whiteCards = newMyCards;

    const newSubmittedCards = [...this.state.submittedCards, passedInCard];

    // update players and myCards
    this.setState(() => ({
      myCards: newMyCards,
      players: newPlayers,
      submittedCards: newSubmittedCards,
    }));

    socket.emit('submitted a card', {submittedCards: newSubmittedCards, players: newPlayers});
  };

  discardACard = passedInCard => {
    // remove passedInCard from submittedCards
    const passedInCardIndex = this.state.submittedCards.findIndex(card => card.text === passedInCard.text);
    const newSubmittedCards = [...this.state.submittedCards];
    newSubmittedCards.splice(passedInCardIndex, 1);

    // update submittedCards
    this.setState(() => ({
      submittedCards: newSubmittedCards,
    }));

    socket.emit('update submittedCards', newSubmittedCards);
  }

  getBlankPlayerCards(players) {
    const length = 6 - players.length;
    const arr = Array.from({ length }, (_, i) => i);

    return arr;
  }

  updateMyName = e => {
    const myName = e.target.value.toUpperCase().trim();
    this.setState({ myName });

    // send event that a user just changed their name
    socket.emit('name change', { id: socket.id, name: myName });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.players.find(player => player.name === this.state.myName)) {
      this.setState({nameError: 'Name taken. Please choose another name.'});
      return;
    }
    localStorage.setItem('cas-name', this.state.myName);
    this.setState(prevState => {
      // once we update our name, let's update our player in players
      const newPlayers = prevState.players.map(player => {
        if (player.id === socket.id) {

          const newPlayer = { ...player };
          newPlayer.name = this.state.myName;
          return newPlayer;
        }
        return player;
      });

      // and then let the other clients know
      socket.emit('name submit', { players: newPlayers, myName: this.state.myName, id: socket.id });

      return {
        showNamePopup: false,
        players: newPlayers,
        nameError: '',
      }
    });

  }

  setUserIsDragging = bool => {
    this.setState({ userIsDragging: bool });
  };

  render() {
    return (
      <div className="App">
        {this.state.showNamePopup && (
          <form className="App-namePopup" onSubmit={e => this.handleSubmit(e)}>
            <div className="App-namePopup-innerWrap">
              <label htmlFor="name">Enter your name:</label>
              <input type="text" id="name" onChange={e => this.updateMyName(e)} defaultValue={this.state.myName} />
              {this.state.nameError && <p class="App-namePopup-errorMsg">{this.state.nameError}</p>}
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Table>
            <CardsWrap>
              <Piles>
                <CardWrap innerRef={this.blackCardRef}>
                  {this.state.blackCards.slice(Math.max(this.state.blackCards.length - 7, 0)).map(({ text }, index) => (
                    <BlackCard
                      setUserIsDragging={this.setUserIsDragging}
                      key={text}
                      id={index}
                      text={text}
                      cardDimensions={this.state.cardDimensions}
                    />
                  ))}
                </CardWrap>
                <CardWrap isPickUpPile>
                  {this.state.whiteCards.slice(Math.max(this.state.whiteCards.length - 7, 0)).map((text, index) => (
                    <PickUpPile
                      setUserIsDragging={this.setUserIsDragging}
                      key={text}
                      id={index}
                      text={text}
                    />
                  ))}
                </CardWrap>
              </Piles>
              <PlayerDecks className="Table-playerDecks">
                {this.state.players && this.state.players.map(({ name }, index) => (
                  <PlayerDrop
                    setUserIsDragging={this.setUserIsDragging}
                    userIsDragging={this.state.userIsDragging}
                    key={index}
                    index={index}
                    socket={socket}
                    addCardToPlayer={this.addCardToPlayer}
                    players={this.state.players}
                    myName={this.state.myName}
                  />
                ))}
                {this.getBlankPlayerCards(this.state.players).map((num, index) => (
                  <BlankPlayerCard key={num} index={index} count={this.state.players.length} />
                ))}
              </PlayerDecks>

            </CardsWrap>
            <MyCardsDropZone setUserIsDragging={this.setUserIsDragging} socket={socket} discardACard={this.discardACard} addCardToMyCards={this.addCardToMyCards} submitACard={this.submitACard} submittedCards={this.state.submittedCards} myCards={this.state.myCards} myName={this.state.myName} />
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
  font-size: .7rem;

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
