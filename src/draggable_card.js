import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from './logo';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const CardElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const getOpacity = ({ isDragging, opaqueOnPickup }) => {
  const opacity = opaqueOnPickup ? 0 : .5;

  return isDragging ? opacity : 1;
}

const DraggableCard = ({ bgColor, color, opaqueOnPickup, socket, text, type, updateRoundStarted, whiteCards }) => {
  const [ghostText, setGhostText] = useState('');
  const [ghostDimensions, setGhostDimensions] = useState({x: 0, y: 0,});
  const [isFlipped, setFlipped] = useState(false);
  const [{ isDragging, getDifferenceFromInitialOffset, getItem }, drag] = useDrag({
    item: {
      type,
      id: 0,
      text,
      bgColor,
      color,
      isFlipped,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      getDifferenceFromInitialOffset: !!monitor.isDragging() && monitor.getDifferenceFromInitialOffset(),
      getItem: monitor.getItem(),
    })
  })

  if (isDragging) {
    const {x, y} = getDifferenceFromInitialOffset;
    

    // send dragged card to server
    socket.emit('dragged card', {drag, type, text, x, y});

    // console.log(getItem, getDifferenceFromInitialOffset);
  }

  useEffect(() => {
    // on everyones client, show the card being dragged
    socket.on('dragged card', ({type: otherType, text: otherText, x, y}) => {
      if (otherType === 'whiteCard') {
        if (text === otherText) {
          setGhostDimensions({x, y});
          setGhostText(otherText);
        }
      } else {
        // const selectedCard = this.state.blackCards.find(blackCard => blackCard.text === text);
      }
    });
  }, []);

  const getTransform = () => {
    if (ghostText === text) {
      return `translate3d(${ghostDimensions.x}px, ${ghostDimensions.y}px, 0)`;
    }
    if (isDragging && getDifferenceFromInitialOffset) {
      return `translate3d(${getDifferenceFromInitialOffset.x}px, ${getDifferenceFromInitialOffset.y}px, 0)`;
    }

    return 'none';
  }


  return (
    <CardElement onClick={() => {
      if (type === 'blackCard') {
        if (!isFlipped) {
          updateRoundStarted(true);
        }
        return setFlipped(true);
      }
      setFlipped(isFlipped => !isFlipped)
    }} ref={drag} style={{ zIndex: (isDragging ? 999 : 'auto'), transform: getTransform(), pointerEvents: (isDragging ? 'none' : 'auto'), backgroundColor: bgColor, color, opacity: 1 }}>

      {isFlipped ? text : (
        <Logo />
      )}
    </CardElement>

  )
}
DraggableCard.propTypes = {
  opaqueOnPickup: PropTypes.bool,
}
DraggableCard.defaultProps = {
  opaqueOnPickup: true,
}

export default DraggableCard;