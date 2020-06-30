import React, { useEffect, useState } from 'react';
import Logo from './logo';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const CardElement = styled.div`
  transition: transform .35s, z-index 0s .35s;
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
  overflow: hidden;
  user-select: none;
  @media screen and (min-width: 1100px) {
    font-size: 16px;
  }

  &.is-dragging {
    background: red;
    transition: none;
  }
`;

const DraggableCard = ({ bgColor, isBroadcastingDrag = true, isFlipBroadcasted, color, socket, text, type, setUserIsDragging, flippedByDefault = false, isFlippable = true, }) => {
  const [ghostCard, setGhostCard] = useState({});
  const [isFlipped, setFlipped] = useState(flippedByDefault);
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
      isDragging: !!monitor.isDragging() && !Object.keys(ghostCard).length,
      getDifferenceFromInitialOffset: !!monitor.isDragging() && monitor.getDifferenceFromInitialOffset(),
    })
  })

  if (isDragging && getDifferenceFromInitialOffset) {
    const { x, y } = getDifferenceFromInitialOffset;

    if (isBroadcastingDrag) {
      // send dragged card to server
      socket.emit('dragged card', { type, text, x, y });
    }
  }

  useEffect(() => {
    setUserIsDragging(type);

    if (isBroadcastingDrag) {
      if (!isDragging) {
        // send card that was let go to server
        socket.emit('let go card', { ghostDragging: false, type, text });
      }
    }

    if (!isDragging) {
      setUserIsDragging(null);
    }

    return () => {
      setUserIsDragging(null);
    }
  }, [isBroadcastingDrag, setUserIsDragging, socket, text, type, isDragging])

  useEffect(() => {
    let isMounted = true;
    if (isBroadcastingDrag) {
      // on everyones client but the sender, show the card being returned to deck if let go prematurely
      socket.on('let go card', ({ text: otherText, }) => {
        if (isMounted && text === otherText) {
          setGhostCard({});
        }
      });

      // on everyones client but the sender, show the card being dragged
      socket.on('dragged card', ({ text: otherText, x, y }) => {
        if (isMounted && text === otherText) {
          setGhostCard({ x, y, text });
        }
      });
    }

    if (isFlipBroadcasted) {
      socket.on('card is flipped', function ({ isFlipped, text: otherText, }) {
        if (isMounted && text === otherText) {
          setFlipped(isFlipped);
        }
      });
    }

    return () => {
      // socket.off('let go card');
      // socket.off('dragged cards');
      isMounted = false;
    }

  }, [isBroadcastingDrag, setUserIsDragging, socket, text, type, isFlipBroadcasted]);

  const getTransform = () => {
    if (isBroadcastingDrag) {
      // any cards being dragged by someone else
      if (Object.keys(ghostCard).length) {
        if (ghostCard.text === text) {
          return { pointerEvents: 'none', opacity: '1', transform: `translate3d(${ghostCard.x}px, ${ghostCard.y}px, 0)`, zIndex: '999' };
        } else {
          return { pointerEvents: 'none', transform: 'translate3d(0, 0, 0)' };
        }
      }
    }

    // on the client that's actually dragging the card
    if (isDragging && getDifferenceFromInitialOffset) {
      return { pointerEvents: 'none', transform: `translate3d(${getDifferenceFromInitialOffset.x}px, ${getDifferenceFromInitialOffset.y}px, 0)` };
    }

    return { transform: 'translate3d(0, 0, 0)' };
  }

  const getClassName = () => {
    if (isBroadcastingDrag) {
      // any cards being dragged by someone else
      if (Object.keys(ghostCard).length) {
        if (ghostCard.text === text) {
          return 'is-dragging';
        } else {
          return null;
        }
      }
    }

    // on the client that's actually dragging the card
    if (isDragging && getDifferenceFromInitialOffset) {
      return 'is-dragging';
    }

    return null;
  }

  return (
    <CardElement className={getClassName()} onClick={() => {
      if (isFlippable) {
        setFlipped(isFlipped => {
          socket.emit('card is flipped', { isFlipped: !isFlipped, text });
          return !isFlipped
        });
      }
    }} ref={drag} style={{ zIndex: (isDragging ? 999 : '0'), ...getTransform(), backgroundColor: bgColor, color }}>

      {isFlipped ? text : (
        <Logo />
      )}
    </CardElement>

  )
}

export default DraggableCard;
