import React, {useState} from 'react';
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

const Card = ({ bgColor, color, opaqueOnPickup, text, type }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type,
      id: 0,
      text,
      bgColor,
      color,
      isFlipped,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <CardElement onClick={()=> setFlipped(isFlipped => !isFlipped)} ref={drag} style={{ backgroundColor: bgColor, color, opacity: getOpacity({ isDragging, opaqueOnPickup }) }}>
      {isFlipped ? text : (
        <Logo />
      )}
    </CardElement>

  )
}
Card.propTypes = {
  opaqueOnPickup: PropTypes.bool,
}
Card.defaultProps = {
  opaqueOnPickup: true,
}

export default Card;