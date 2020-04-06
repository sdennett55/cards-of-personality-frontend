import React from 'react';
// import PropTypes from 'prop-types';
import Card from './card';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd';
import MyCardsDropZone from './my_cards_drop_zone';
import PlayerDrop from './player_drop';
import CardWrap from './card_wrap';
import GeneratePreview from './generate_preview';
import { blackCards, whiteCards } from './data';
import styled from 'styled-components';

import './App.css';

const BlackCard = React.memo(({ innerRef, text }) => {
  return (
    <Card innerRef={innerRef} type="blackCard" bgColor="#000" color="#fff" text={text} />
  )
})

const PickUpPile = React.memo(({ id, text }) => {
  return (
    <Card id={id} type="whiteCard" bgColor="#fff" color="#000" text={text} />
  )
})

class App extends React.PureComponent {
  componentDidMount() {
    this.setState({
      cardDimensions: {
        width: this.blackCardRef.current.offsetWidth,
        height: this.blackCardRef.current.offsetHeight
      }
    });
  }

  state = {
    blackCardWidth: null,
    blackCards,
    whiteCards,
    myCards: [],
  }

  blackCardRef = React.createRef();

  addCardToMyCards = passedInCard => {
    if (this.state.myCards.length === 7) {
      return;
    }

    this.setState(prevState => {
      return { myCards: [...prevState.myCards, passedInCard] };
    });
  }

  render() {
    return (
      <div className="App">
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Table>
            <CardsWrap>
              <Piles>
                <CardWrap innerRef={this.blackCardRef}>
                  {this.state.blackCards.map(({ text }, index) => (
                    <BlackCard key={text} id={index} text={text} cardDimensions={this.state.cardDimensions} />
                  ))}
                </CardWrap>
                <CardWrap>
                  {this.state.whiteCards.map((text, index) => (
                    <PickUpPile key={text} id={index} text={text} />
                  ))}
                </CardWrap>
              </Piles>
              <PlayerDecks className="Table-playerDecks">
                <PlayerDrop />
                <PlayerDrop />
                <PlayerDrop />
                <PlayerDrop />
                <PlayerDrop />
                <PlayerDrop />
              </PlayerDecks>
              <Preview>
                <GeneratePreview width={this.state.cardDimensions?.width} height={this.state.cardDimensions?.height} />
              </Preview>
            </CardsWrap>
            <MyCardsDropZone addCardToMyCards={this.addCardToMyCards} cardCount={this.state.myCards.length} />
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
    margin: .5em -.5em;
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
