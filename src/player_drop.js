import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { MAX_PLAYERS } from './data';
import DraggableCard from './draggable_card';
import { Confetti } from './icons';

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
  @media screen and (min-width: 1100px) {
    font-size: 16px;
  }
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
  transition: background .25s;
`;

const Wrap = styled.div`
  position: relative;
  padding-bottom: 140%;
`;

const PlayerDropWrap = styled.div`
  position: relative;
  width: calc(20% - 1em);
  max-width: 25vh;
  margin: 0.5em;

  &:nth-child(1n + ${MAX_PLAYERS / 2 + 1}) ${PlayerName} {
    transform: translateY(100%);
    bottom: 0;
    top: auto;
    padding-top: .1em;
  }

  /*
    some devices with small viewport height like Moto G2
    need to make the player slots smaller.
    they can take up full space at this height
  */
  @media (min-height: 556px) {
    width: calc(25% - 1em);
  }
`;


const getPlayerName = ({ index, myName, players, socket }) => {
  if (players[index].id === socket.id) {
    return myName;
  }
  if (players[index].name) {
    return players[index].name;
  }

  return `NEW USER`;
}

const getBlackCardLength = ({ players, index }) => {
  if (players[index].blackCards && players[index].blackCards.length) {
    return `(${players[index].blackCards.length})`;
  }

  return '';
}

const PlayerDrop = ({ index, winningPlayerIndex, myName, players, socket, addCardToPlayer, userIsDragging, setUserIsDragging }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ['blackCard', 'blackCardFromPlayer'],
    drop: (item, monitor) => {
      addCardToPlayer(item, players[index]);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver() && userIsDragging === 'blackCard',
    }),
  })

  return (
    <PlayerDropWrap>
      <Wrap ref={drop}>
        <CardElement style={{ background: isOver || userIsDragging === 'blackCard' ? '#2cce9f' : null }}>
          <PlayerName style={{ margin: 0 }}>{`${getBlackCardLength({ players, index })} ${getPlayerName({ myName, players, index, socket })}`}</PlayerName>
        </CardElement>
        {index === winningPlayerIndex && (
          <Confetti />
        )}
      </Wrap>
      {players && players[index] && players[index].blackCards && players[index].blackCards.map(blackCard => (
        <div key={blackCard.text} style={{ pointerEvents: userIsDragging === 'blackCard' ? 'none' : null }}>
          <DraggableCard flippedByDefault isFlippable={false} socket={socket} setUserIsDragging={setUserIsDragging} {...blackCard} type="blackCardFromPlayer" />
        </div>
      ))}
    </PlayerDropWrap>
  )
}

export default PlayerDrop;
