import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

const BlackCardDropElem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BlackCardDrop = ({addBlackCardBackToPile, children}) => {
  const [, drop] = useDrop({
    accept: 'blackCardFromPlayer',
    drop: (item) => {
      addBlackCardBackToPile(item);
    },
  });

  return (
    <BlackCardDropElem ref={drop}>
      {children}
    </BlackCardDropElem>
  )
}

export default BlackCardDrop;
