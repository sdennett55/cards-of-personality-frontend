import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

const BlackCardDropElem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BlackCardDrop = ({addBlackCardBackToPile, children}) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'blackCardFromPlayer',
    drop: (item, monitor) => {
      addBlackCardBackToPile(item);
    },
    // collect: monitor => ({
    //   isOver: !!monitor.isOver(),
    // }),
  });

  return (
    <BlackCardDropElem ref={drop}>
      {children}
    </BlackCardDropElem>
  )
}

export default BlackCardDrop;