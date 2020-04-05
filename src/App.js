import React, { useContext } from 'react';
import Card from './card';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd';
import MyCardsDropZone from './my_cards_drop_zone';
import PlayerDrop from './player_drop';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './App.css';

const GeneratePreview = ({ width, height }) => {
  const { style, item } = useContext(Preview.Context);
  return <div style={{ ...style, zIndex: '2', borderRadius: '8px', backgroundColor: item.bgColor, color: item.color, width, height, display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em', }}>{item.text}</div>;
};
GeneratePreview.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
GeneratePreview.defaultProps = {
  width: null,
  height: null,
}

const BlackCard = ({ innerRef, text }) => {
  return (
    <>
      <Card innerRef={innerRef} type="blackCard" bgColor="#000" color="#fff" text={text} />
    </>
  )
}

const PickUpPile = ({ text }) => {
  return (
    <>
      <Card type="whiteCard" bgColor="#fff" color="#000" text={text} />
    </>
  )
}

const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Piles = styled.div`
  display: flex;
  width: calc(50% - 1em);
  justify-content: space-between;
  align-items: center;
  @media (orientation: portrait) {
    width: 100%;
  }
`;

const PlayerDecks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 1em);
  justify-content: space-between;
  align-content: space-between;

  @media (orientation: portrait) {
    width: 100%;
    height: calc(50vh - 1em);
  }
`;

const CardsWrap = styled.div`
  display: flex; 
  flex-grow: 1; 
  padding: 1em; 
  justify-content: space-between;

  @media (orientation: portrait) {
    flex-direction: column;
    width: 100%;
  }
`;

class App extends React.Component {
  componentDidMount() {
    this.setState({
      cardDimensions: {
        width: this.blackCardRef.current.offsetWidth,
        height: this.blackCardRef.current.offsetHeight
      }
    });
  }

  state = {
    blackCardWidth: null
  }

  blackCardRef = React.createRef();

  render() {
    return (
      <div className="App">
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Table>
            <CardsWrap>
              <Piles>
                <BlackCard innerRef={this.blackCardRef} cardDimensions={this.state.cardDimensions} text="I like to poop on _______." />
                <PickUpPile text="Your face." />
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
            <MyCardsDropZone />
          </Table>
        </DndProvider>
      </div>
    );
  }
}

export default App;
