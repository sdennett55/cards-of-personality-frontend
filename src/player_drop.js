import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import DraggableCard from './draggable_card';

const CardElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const Wrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
`;

const getPlayerName = ({index, myName, players, socket}) => {
  if (players[index].id === socket.id) {
    return myName;
  }
  if (players[index].name) {
    return players[index].name;
  }

  return `Player ${index + 1}`;
}

const PlayerDrop = ({ index, myName, players, socket, addCardToPlayer, userIsDragging, setUserIsDragging }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'blackCard',
    drop: (item, monitor) => {
      addCardToPlayer(item, players[index]);
      console.log(item);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <div style={{ position: 'relative', width: 'calc(33.33% - 1em)', 'margin': '0.5em' }}>
      <Wrap ref={drop}>
        <CardElement style={{ background: isOver ? '#2cce9f' : null }}>
  <p style={{ margin: 0 }}>{getPlayerName({myName, players, index, socket})}</p>
        </CardElement>
      </Wrap>
      {players && players[index] && players[index].blackCards &&  players[index].blackCards.map(blackCard => (
        <div style={{pointerEvents: userIsDragging ? 'none' : null}}>
          <DraggableCard key={blackCard.text} socket={socket} setUserIsDragging={setUserIsDragging} {...blackCard} />
        </div> 
      ))}
    </div>
  )
}

export default PlayerDrop;
