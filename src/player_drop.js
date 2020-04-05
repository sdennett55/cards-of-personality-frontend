import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

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

const PlayerDrop = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'blackCard',
    drop: (item, monitor) => console.log(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <div style={{width: 'calc(33.33% - .5em)'}}>
      <Wrap ref={drop}>
        <CardElement style={{ background: isOver ? '#2cce9f' : null }}>      
          <p style={{margin: 0}}>Player</p>
        </CardElement>
      </Wrap>
    </div>
  )
}

export default PlayerDrop;
