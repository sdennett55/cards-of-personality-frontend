import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import DraggableCard from './draggable_card';

const PlayerName = styled.p`
  margin: 0px;
  position: absolute;
  top: 0;
  text-align: left;
  transform: translateY(-100%);
  color: black;
  font-weight: bold;
  width: 100%;
  padding: 0 .5em .1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
`;

const CardElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: 2px dashed #000;
`;

const Wrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
`;

const PlayerDropWrap = styled.div`
  position: relative;
  width: calc(25% - 1em); 
  margin: 0.5em;

  &:nth-child(1n + 4) ${PlayerName} {
    transform: translateY(100%);
    bottom: 0;
    top: auto;
    padding-top: .1em;
  }
`;


const getPlayerName = ({ index, myName, players, socket }) => {
  if (players[index].id === socket.id) {
    return myName;
  }
  if (players[index].name) {
    return players[index].name;
  }

  return `Player ${index + 1}`;
}

const getBlackCardLength = ({ players, index }) => {
  if (players[index].blackCards) {
    return players[index].blackCards.length;
  }

  return 0;
}

const PlayerDrop = ({ index, myName, players, socket, addCardToPlayer, userIsDragging, setUserIsDragging }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'blackCard',
    drop: (item, monitor) => {
      addCardToPlayer(item, players[index]);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <PlayerDropWrap>
      <Wrap ref={drop}>
        <CardElement style={{ background: isOver ? '#2cce9f' : null }}>
          <PlayerName style={{ margin: 0 }}>{`${getPlayerName({ myName, players, index, socket })} (${getBlackCardLength({players, index})})`}</PlayerName>
        </CardElement>
      </Wrap>
      {players && players[index] && players[index].blackCards && players[index].blackCards.map(blackCard => (
        <div key={blackCard.text} style={{ pointerEvents: userIsDragging ? 'none' : null }}>
          <DraggableCard flippedByDefault socket={socket} setUserIsDragging={setUserIsDragging} {...blackCard} type="blackCardFromPlayer" />
        </div>
      ))}
    </PlayerDropWrap>
  )
}

export default PlayerDrop;
