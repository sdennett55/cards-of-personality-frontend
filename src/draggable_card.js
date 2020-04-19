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

const DraggableCard = ({ bgColor, color, socket, text, type, updateRoundStarted }) => {
  const [ghostCards, setGhostCards] = useState([]);
  const [isFlipped, setFlipped] = useState(false);
  const [{ isDragging, getDifferenceFromInitialOffset }, drag] = useDrag({
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
    })
  })

  if (isDragging && getDifferenceFromInitialOffset) {
    const { x, y } = getDifferenceFromInitialOffset;

    // send dragged card to server
    socket.emit('dragged card', { type, text, x, y });
  }

  useEffect(() => {
    if (!isDragging) {
      console.log('not dragging');
      // send card that was let go to server
      socket.emit('let go card', { ghostDragging: false, type, text });
    }
  }, [isDragging])

  useEffect(() => {
    // on everyones client but the sender, show the card being returned to deck if let go prematurely
    socket.on('let go card', ({ type: otherType, text: otherText, }) => {
      if (otherType === 'whiteCard') {
        if (text === otherText) {
          // find the card from ghostCards
          // remove from array
          const ghostCardIndex = ghostCards.findIndex(ghostCard => ghostCard.text === otherText);
          const newGhostCards = [...ghostCards].splice(ghostCardIndex, 1);
          setGhostCards(newGhostCards);
        }
      }
    });

    // on everyones client but the sender, show the card being dragged
    socket.on('dragged card', ({ type: otherType, text: otherText, x, y }) => {
      if (otherType === 'whiteCard') {
        if (text === otherText) {
          setGhostCards([...ghostCards, { isDragging: true, type: otherType, text: otherText, x, y }]);
        }
      }
    });

  }, []);

  const getTransform = () => {
    if (ghostCards.length) {

      if (ghostCards[0].text === text) {
        return { pointerEvents: 'none', opacity: '.5', transform: `translate3d(${ghostCards[0].x}px, ${ghostCards[0].y}px, 0)` };
      }
      if (ghostCards[1] && ghostCards[1].text === text) {
        return { pointerEvents: 'none', opacity: '.5', transform: `translate3d(${ghostCards[1].x}px, ${ghostCards[1].y}px, 0)` };
      } else {
        return { pointerEvents: 'none', transform: 'none' };
      }
    }
    if (isDragging && getDifferenceFromInitialOffset) {
      return { pointerEvents: 'none', transform: `translate3d(${getDifferenceFromInitialOffset.x}px, ${getDifferenceFromInitialOffset.y}px, 0)` };
    }

    return { transform: 'none' };
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
    }} ref={drag} style={{ zIndex: (isDragging ? 999 : 'auto'), ...getTransform(), backgroundColor: bgColor, color }}>

      {isFlipped ? text : (
        <Logo />
      )}
    </CardElement>

  )
}
// DraggableCard.propTypes = {
//   opaqueOnPickup: PropTypes.bool,
// }
// DraggableCard.defaultProps = {
//   opaqueOnPickup: true,
// }

export default DraggableCard;