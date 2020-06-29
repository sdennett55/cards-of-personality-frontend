import React from "react";
// import PropTypes from 'prop-types';
import DraggableCard from "./draggable_card";
// import MultiBackend, { Preview } from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import TouchBackend from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import MyCardsDropZone from "./my_cards_drop_zone";
import PlayerDrop from "./player_drop";
import CardWrap from "./card_wrap";
import BlankPlayerCard from "./blank_player_card";
import BlackCardDrop from "./black_card_drop";
// import GeneratePreview from './generate_preview';
import { ToastContainer, toast, Slide } from "react-toastify";
import ReactGA from "react-ga";
import { MAX_PLAYERS } from "./data";
import { withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import io from "socket.io-client";
import axios from "axios";
import queryString from "query-string";
import { CLIENT_URL, SERVER_URL } from "./helpers";
import { CopyIcon } from "./icons";
import "./Game.css";
import "react-toastify/dist/ReactToastify.min.css";

export const BlackCard = React.memo(({ text, setUserIsDragging, socket }) => {
  return (
    <DraggableCard
      isFlipBroadcasted
      setUserIsDragging={setUserIsDragging}
      socket={socket}
      type="blackCard"
      bgColor="#000"
      color="#fff"
      text={text}
    />
  );
});

const PickUpPile = React.memo(({ id, text, setUserIsDragging, socket }) => {
  return (
    <DraggableCard
      isFlippable={false}
      setUserIsDragging={setUserIsDragging}
      socket={socket}
      id={id}
      type="whiteCard"
      bgColor="#fff"
      color="#000"
      text={text}
    />
  );
});

class Game extends React.PureComponent {
  socket = null;

  roomId = null;

  componentDidMount() {
    // initialize analytics
    if (process.env.NODE_ENV === "production") {
      this.initializeReactGA();
    }

    if (!this.socket) {
      // start socket connection
      this.socket = io(SERVER_URL);

      // set the roomId based on the /g/:roomId path
      this.roomId = this.props.location.pathname.replace("/g/", "");

      // let the server know we've joined a room
      this.socket.emit("join room", this.roomId);

      // confirm that we've joined the right room on the client
      this.socket.on("joined a room", (theRoom) => {
        console.log({ theRoom });

        // once we've joined a room, lets get the cards
        const deckQueryString = queryString.parse(this.props.location.search)
          .deck;

        // If the whiteCards and blackCards are already set, don't bother hitting this endpoint.
        if (!this.state.whiteCards.length && !this.state.blackCards.length) {
          axios
            .post(`${SERVER_URL}/api/getInitialCards`, {
              deckName: deckQueryString,
              roomId: this.roomId,
            })
            .then((res) => {
              if (!res.data) {
                return;
              }

              const {
                blackCards: newBlackCards,
                whiteCards: newWhiteCards,
              } = res.data;

              this.socket.emit("set initialCards for game", {
                whiteCards: newWhiteCards,
                blackCards: newBlackCards,
              });
            });
        }
      });

      const newPlayers = [...this.state.players, { socket: null }];

      this.setState({
        cardDimensions: {
          width: this.blackCardRef.current.offsetWidth,
          height: this.blackCardRef.current.offsetHeight,
        },
        players: newPlayers,
      });
    }

    this.socket.on(
      "get initialCards for game",
      ({ whiteCards = [], blackCards = [] }) => {
        this.setState({
          whiteCards,
          blackCards,
        });
      }
    );

    this.socket.on("disconnect", () => {
      // @TODO: find a better way to reconnect or recreate the room
      // after the server restarts or a long period of time and someone tries to reconnect.
      // when the server no longer has any knowledge of the room
      window.location.reload();
    });

    // when a player changes their name, update players state with new name
    this.socket.on("name change", (players) => {
      console.log({ players });
      this.setState({ players });
    });

    // when a player disconnects from the server, remove them from state
    this.socket.on("user disconnected", (players) => {
      this.setState({ players });
    });

    // when a new user connects
    // send that specific user the latest server states
    this.socket.on(
      "new connection",
      ({ players, blackCards, whiteCards, submittedCards }) => {
        if (whiteCards && whiteCards.length > 0) {
          this.setState({ whiteCards });
        }

        if (blackCards && blackCards.length > 0) {
          this.setState({ blackCards });
        }

        if (submittedCards && submittedCards.length > 0) {
          this.setState({ submittedCards });
        }

        console.log("new connection!", players);

        this.setState(() => ({ players, showNamePopup: true }));
      }
    );

    // when a new user connects, let every client know.
    this.socket.on("user connected", ({ players }) => {
      this.setState({ players });
    });

    this.socket.on("dropped in my cards", ({ players, whiteCards }) => {
      this.setState({ whiteCards, players });
    });

    this.socket.on("update players", (players) => {
      this.setState({ players });
    });

    this.socket.on("update submittedCards", (submittedCards) => {
      this.setState({ submittedCards });
    });

    this.socket.on("submitted a card", ({ submittedCards, players }) => {
      this.setState({ submittedCards, players });
    });

    this.socket.on("player rejoins", (players) => {
      const playerWithWhiteCards = players.find(
        (player) => this.socket.id === player.id
      );
      if (playerWithWhiteCards.whiteCards) {
        this.setState({ myCards: playerWithWhiteCards.whiteCards });
      }

      this.setState({ players });
    });

    this.socket.on("dropped in player drop", ({ players, blackCards }) => {
      this.setState({ players, blackCards });
    });

    this.socket.on("restart game", (_) => {
      const newPlayers = this.state.players.map((player) => {
        const newPlayer = { ...player };
        if (player.whiteCards && player.whiteCards.length) {
          delete newPlayer.whiteCards;
        }
        if (player.blackCards && player.blackCards.length) {
          delete newPlayer.blackCards;
        }

        return newPlayer;
      });
      this.setState({
        whiteCards: [],
        blackCards: [],
        submittedCards: [],
        myCards: [],
        players: newPlayers,
      });
      this.socket.emit("restart game", {
        whiteCards: [],
        blackCards: [],
        players: newPlayers,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      const lengths = this.state.players.map((player) =>
        player.blackCards ? player.blackCards.length : -1
      );
      const winner = Math.max(...lengths);
      const numberOfWinners = lengths.filter((length) => length === winner)
        .length;
      const index = this.state.players.findIndex(
        (player) => player.blackCards && player.blackCards.length === winner
      );
      if (winner === 0 || numberOfWinners > 1) {
        return this.setState({ winningPlayerIndex: -1 });
      }
      this.setState({ winningPlayerIndex: index });
    }
  }

  componentWillUnmount() {
    this.socket.off("name change");
    this.socket.off("user disconnected");
    this.socket.off("new connection");
    this.socket.off("user connected");
    this.socket.off("dropped in my cards");
    this.socket.off("update players");
    this.socket.off("update submittedCards");
    this.socket.off("submitted a card");
    this.socket.off("player rejoins");
    this.socket.off("dropped in player drop");
    this.socket.off("restart game");
  }

  state = {
    blackCardWidth: null,
    blackCards: [],
    whiteCards: [],
    myCards: [],
    myName: localStorage.getItem("cas-name") || "",
    players: [],
    submittedCards: [],
    currentHost: 0,
    showNamePopup: true,
    userIsDragging: false,
    nameError: "",
    winningPlayerIndex: -1,
  };

  blackCardRef = React.createRef();

  initializeReactGA = () => {
    ReactGA.initialize("UA-171045081-1");
    ReactGA.pageview("/game");
  };

  getTheCurrentHost = (index) => this.setState({ currentHost: index });

  addCardToPlayer = (passedInCard, playerDroppedOn) => {
    if (!this.state.userIsDragging) {
      return;
    }

    // get the players state, the player index, and give that the passedInCard (players[index].blackCards.push(passedInCard))
    this.setState(
      (prevState) => {
        // update player card property with new card
        const newPlayers = [...prevState.players].map((player) => {
          if (player.id === playerDroppedOn.id) {
            if (
              playerDroppedOn.blackCards &&
              playerDroppedOn.blackCards.length
            ) {
              // check if blackCard already exists with player
              if (
                !player.blackCards.some(
                  (blackCard) => blackCard.text === passedInCard.text
                )
              ) {
                player.blackCards = [...player.blackCards, { ...passedInCard }];
              }
            } else {
              player.blackCards = [{ ...passedInCard }];
            }
          } else {
            if (player.blackCards) {
              // if another player already has the blackCard, remove it from them
              player.blackCards = player.blackCards.filter((blackCard) => {
                if (blackCard.text !== passedInCard.text) {
                  return blackCard;
                }
              });
            }
          }
          return player;
        });

        // remove blackcard from blackcards if this is from the main deck
        // and not from another player slot ('blackCardFromPlayer')
        if (passedInCard.type === "blackCard") {
          const indexOfPassedInCard = prevState.blackCards.findIndex(
            (blackCard) => blackCard === passedInCard.text
          );
          const newBlackCards = [...prevState.blackCards];
          newBlackCards.splice(indexOfPassedInCard, 1);

          return {
            players: newPlayers,
            blackCards: newBlackCards,
          };
        }

        return {
          players: newPlayers,
        };
      },
      () => {
        // send event that a card was moved to someones deck to the server
        this.socket.emit("dropped in player drop", {
          players: this.state.players,
          blackCards: this.state.blackCards,
        });
      }
    );
  };

  addCardToMyCards = (passedInCard) => {
    if (this.state.myCards.length === 7 || !this.state.userIsDragging) {
      return;
    }

    this.setState((prevState) => ({
      myCards: [...prevState.myCards, passedInCard],
    }));

    // send event that a card was moved to someones deck to the server
    this.socket.emit("dropped in my cards", {
      passedInCard,
      socketId: this.socket.id,
    });
  };

  addBlackCardBackToPile = (passedInCard) => {
    if (!this.state.userIsDragging) {
      return;
    }
    // add passedInCard to the front of the blackCards array
    const newBlackCards = [...this.state.blackCards];
    newBlackCards.unshift(passedInCard);

    // find player with blackCard and remove from their blackCards array
    const newPlayers = this.state.players.map((player) => {
      if (player.blackCards && player.blackCards.length) {
        const newPlayerBlackCards = player.blackCards.filter((blackCard) => {
          return blackCard.text !== passedInCard.text;
        });

        return { ...player, blackCards: newPlayerBlackCards };
      }

      return player;
    });

    this.setState({
      blackCards: newBlackCards,
      players: newPlayers,
    });

    // update blackCards for everyone
    this.socket.emit("dropped in player drop", {
      blackCards: newBlackCards,
      players: newPlayers,
    });
  };

  submitACard = (passedInCard) => {
    if (this.state.submittedCards.length === MAX_PLAYERS - 1) {
      return;
    }

    // remove passedInCard from myCards
    const passedInCardIndex = this.state.myCards.findIndex(
      (card) => card.text === passedInCard.text
    );
    const newMyCards = [...this.state.myCards];
    newMyCards.splice(passedInCardIndex, 1);

    // update players and myCards
    this.setState({
      myCards: newMyCards,
    });

    this.socket.emit("submitted a card", {
      socketId: this.socket.id,
      passedInCard,
      newMyCards,
    });
  };

  discardACard = (passedInCard) => {
    if (!this.state.userIsDragging) {
      return;
    }

    this.socket.emit("update submittedCards", passedInCard);
  };

  getBlankPlayerCards(players) {
    const length = MAX_PLAYERS - players.length;
    const arr = Array.from({ length }, (_, i) => i);

    return arr;
  }

  updateMyName = (e) => {
    const myName = e.target.value.toUpperCase().trim();
    this.setState({ myName });

    // send event that a user just changed their name
    this.socket.emit("name change", { id: this.socket.id, name: myName });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.socket.connected) {
      this.setState({ nameError: "Cannot connect to server. Try again." });
      return;
    }
    if (this.state.myName.trim().length < 2) {
      this.setState({
        nameError: "Please submit a name at least 2 characters long.",
      });
      return;
    }

    if (
      this.state.players.find((player) => player.name === this.state.myName)
    ) {
      this.setState({ nameError: "Name taken. Please choose another name." });
      return;
    }
    localStorage.setItem("cas-name", this.state.myName);
    this.setState((prevState) => {
      // once we update our name, let's update our player in players
      const newPlayers = prevState.players.map((player) => {
        if (player.id === this.socket.id) {
          const newPlayer = { ...player };
          newPlayer.name = this.state.myName;
          return newPlayer;
        }
        return player;
      });

      // and then let the other clients know
      this.socket.emit("name submit", {
        players: newPlayers,
        myName: this.state.myName,
        id: this.socket.id,
      });

      ReactGA.event({
        category: "Game",
        action: "Submitted A Name",
        label: this.state.myName,
      });

      return {
        showNamePopup: false,
        players: newPlayers,
        nameError: "",
      };
    });
  };

  setUserIsDragging = (bool) => {
    this.setState({ userIsDragging: bool });
  };

  copyLink = () => {
    if (navigator && navigator.share) {
      navigator
        .share({
          title: "Cards of Personality Game",
          url: this.inviteInputRef.current,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
    // fallback
    this.inviteInputRef.current.select();
    document.execCommand("copy");
    toast.success("Copied to clipboard!", {
      toastId: 'copy-toast',
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  inviteInputRef = React.createRef();

  render() {
    return (
      <div className="Game">
        <GlobalStyle />
        {this.state.showNamePopup && (
          <form
            className="Game-namePopup"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <div className="Game-namePopup-innerWrap">
              <InviteLabel htmlFor="invite">Invite a friend</InviteLabel>
              <Flex>
                <InviteInput
                  id="invite"
                  ref={this.inviteInputRef}
                  type="text"
                  value={`${CLIENT_URL}/g/${this.roomId}`}
                  readOnly
                />
                <IconWrap type="button" onClick={this.copyLink}>
                  <CopyIcon />
                </IconWrap>
              </Flex>
              <NameLabel htmlFor="name">Enter your name</NameLabel>
              <NameInput
                type="text"
                id="name"
                maxLength="16"
                onChange={(e) => this.updateMyName(e)}
                defaultValue={this.state.myName}
              />
              {this.state.nameError && (
                <p className="Game-namePopup-errorMsg">
                  {this.state.nameError}
                </p>
              )}
              <button type="submit">JOIN GAME</button>
            </div>
          </form>
        )}
        <DndProvider
          backend={TouchBackend}
          options={{ enableMouseEvents: true }}
        >
          <Table>
            <CardsWrap>
              <Piles>
                <CardWrap isPickUpPile innerRef={this.blackCardRef}>
                  <BlackCardDrop
                    addBlackCardBackToPile={this.addBlackCardBackToPile}
                  >
                    {this.state.blackCards
                      .slice(
                        Math.max(
                          this.state.blackCards.length - (MAX_PLAYERS + 1),
                          0
                        )
                      )
                      .map((text, index) => (
                        <BlackCard
                          setUserIsDragging={this.setUserIsDragging}
                          key={text}
                          id={index}
                          text={text}
                          cardDimensions={this.state.cardDimensions}
                          socket={this.socket}
                        />
                      ))}
                  </BlackCardDrop>
                </CardWrap>
                <CardWrap isPickUpPile>
                  {this.state.whiteCards
                    .slice(
                      Math.max(
                        this.state.whiteCards.length - (MAX_PLAYERS + 1),
                        0
                      )
                    )
                    .map((text, index) => (
                      <PickUpPile
                        setUserIsDragging={this.setUserIsDragging}
                        key={text}
                        id={index}
                        text={text}
                        socket={this.socket}
                      />
                    ))}
                </CardWrap>
              </Piles>
              <PlayerDecks className="Table-playerDecks">
                {this.state.players &&
                  this.state.players.map(({ name }, index) => (
                    <PlayerDrop
                      setUserIsDragging={this.setUserIsDragging}
                      userIsDragging={this.state.userIsDragging}
                      key={index}
                      index={index}
                      socket={this.socket}
                      addCardToPlayer={this.addCardToPlayer}
                      players={this.state.players}
                      myName={this.state.myName}
                      winningPlayerIndex={this.state.winningPlayerIndex}
                    />
                  ))}
                {this.getBlankPlayerCards(this.state.players).map(
                  (num, index) => (
                    <BlankPlayerCard
                      key={num}
                      index={index}
                      count={this.state.players.length}
                    />
                  )
                )}
              </PlayerDecks>
            </CardsWrap>
            <MyCardsDropZone
              setUserIsDragging={this.setUserIsDragging}
              blackCards={this.state.blackCards}
              userIsDragging={this.state.userIsDragging}
              socket={this.socket}
              discardACard={this.discardACard}
              addCardToMyCards={this.addCardToMyCards}
              submitACard={this.submitACard}
              submittedCards={this.state.submittedCards}
              myCards={this.state.myCards}
              myName={this.state.myName}
            />
          </Table>
        </DndProvider>
        <ToastContainer limit={1} autoClose={3000} hideProgressBar closeOnClick transition={Slide} pauseOnFocusLoss={false} />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
  .Toastify__toast--success {
    background: #2cce9f;
    border-radius: 8px;
    color: #000;
  }
  .Toastify__close-button {
    color: #000;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Piles = styled.div`
  display: flex;
  width: calc(40% - 0.25em);
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1600px) {
    margin-right: 2em;
  }
  @media (max-width: 500px) and (orientation: portrait) {
    width: 100%;
    margin: 0.5em 0;
    order: 1;
  }
`;

const PlayerDecks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(60% - 0.25em);
  justify-content: center;
  align-content: center;
  margin-right: -0.5em;
  font-size: 0.7rem;

  @media (max-width: 500px) and (orientation: portrait) {
    width: calc(100% + 1em);
    margin: 0.5em -0.5em 0.5em;
  }
`;

const CardsWrap = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 1em;
  justify-content: space-between;
  max-height: calc(100vh - 50px);

  @media (min-width: 1600px) {
    padding: 0;
  }

  @media (max-width: 500px) and (orientation: portrait) {
    max-height: none;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

const IconWrap = styled.button`
  appearance: none;
  padding: 0.5em;
  & svg {
    display: block;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 2em;
  background-color: #2cce9f;
  border-radius: 8px;
`;

const NameInput = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0 0 1em;
  padding: 0.25em 0 0.5em;
  background: transparent;
  border-bottom: 1px solid white;
  color: #fff;
  transition: border-color 0.25s;
  border-radius: 0;
`;
const NameLabel = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #c1bdbd;
`;

const InviteTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 0.25em;
`;
const InviteInput = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  background: white;
  border-radius: 8px 0 0 8px;
  color: #000;
  padding: 0.25em 0.5em;
`;

const InviteLabel = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #c1bdbd;
  margin-bottom: 0.5em;
`;

export default withRouter(Game);
