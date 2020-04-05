import React from 'react';
import logo from './logo.svg';
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

const Wrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
  background: white;
  color: black;
`;

const Card = ({bgColor, color, innerRef, text, type}) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type,
      id: 0,
      text,
      bgColor,
      color,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div style={{width: 'calc(50% - .5em)', position: 'relative', zIndex: '1'}}>
    <Wrap ref={innerRef}>
      <CardElement ref={drag} src={logo} style={{ backgroundColor: bgColor, color, opacity: (isDragging ? '.5' : '1') }}>
        {text}
      </CardElement>
    </Wrap>
    </div>
  )
}

export default Card;