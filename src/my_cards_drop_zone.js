import React from 'react';
import styled from 'styled-components';
import {useDrop} from 'react-dnd';

const Card = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000;
  color: #fff;
  border-radius: 8px 8px 0 0;
`;

const MyCardsDropZone = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => console.log(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <Card ref={drop} style={{background: isOver ? '#2cce9f' : null}}>
      {isOver ? 'DROP HERE' : 'MY CARDS (0)'}
    </Card>
  )
}

export default MyCardsDropZone;
