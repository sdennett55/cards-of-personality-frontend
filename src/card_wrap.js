import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
  color: black;
  border-radius: 8px;
  border: 2px dashed #fff;
  `;
  
  const PickUpPileWrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
  color: black;
  border-radius: 8px;
  background: #fff;
`;

const CardWrap = React.memo(({ children, innerRef, width, isPickUpPile, ...rest }) => {
  const WrappingElement = isPickUpPile ? PickUpPileWrap : Wrap;
  return (
    <div style={{ width: width || 'calc(50% - .5em)', position: 'relative', ...rest }}>
      <WrappingElement ref={innerRef || null}>
        {children}
      </WrappingElement>
    </div>
  );
});

export default CardWrap