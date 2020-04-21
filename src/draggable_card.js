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

const DraggableCard = ({ bgColor, color, socket, text, type, setUserIsDragging, }) => {
  const [ghostCard, setGhostCard] = useState({});
  const [isFlipped, setFlipped] = useState(false);
  const [{ isDragging, getDifferenceFromInitialOffset, draggedCard }, drag] = useDrag({
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
    setUserIsDragging(true);
    
    if (!isDragging) {
      console.log('not dragging');
      // send card that was let go to server
      socket.emit('let go card', { ghostDragging: false, type, text });

  
      setUserIsDragging(false);
    }
  }, [isDragging])

  useEffect(() => {
    let isMounted = true;
    // on everyones client but the sender, show the card being returned to deck if let go prematurely
    socket.on('let go card', ({ type, text: otherText, }) => {
      if (isMounted && text === otherText) {
        setGhostCard({});
      }
    });

    // on everyones client but the sender, show the card being dragged
    socket.on('dragged card', ({ type, text: otherText, x, y }) => {
      if (isMounted && text === otherText) {
        setGhostCard({x, y, text});
      }   
    });

    return () => {
      isMounted = false;
    }

  }, []);

  const getTransform = () => {

    // any cards being dragged by someone else
    if (Object.keys(ghostCard).length) {
      if (ghostCard.text === text) {
        return { pointerEvents: 'none', opacity: '.5', transform: `translate3d(${ghostCard.x}px, ${ghostCard.y}px, 0)` };
      } else {
        return { pointerEvents: 'none', transform: 'none' };
      }
    }

    // on the client that's actually dragging the card
    if (isDragging && getDifferenceFromInitialOffset) {
      return { pointerEvents: 'none', transform: `translate3d(${getDifferenceFromInitialOffset.x}px, ${getDifferenceFromInitialOffset.y}px, 0)` };
    }

    return { transform: 'none' };
  }

  return (
    <CardElement onClick={() => {
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