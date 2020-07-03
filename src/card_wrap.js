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
  font-size: 13px;
`;

const PickUpPileWrapper = styled.div`
  position: relative;  
  width: calc(50% - .5em);

  @media (max-width: 500px) and (orientation: portrait) {
    max-width: 25vh;
  }
`;

const DefaultWrapper = styled.div`
  position: relative;  
  width: 150px;
  margin: .5em;
`;

const CardWrap = React.memo(({ children, innerRef, isPickUpPile }) => {
  const WrappingElement = isPickUpPile ? PickUpPileWrap : Wrap;
  const Wrapper = isPickUpPile ? PickUpPileWrapper : DefaultWrapper;
  return (
    <Wrapper>
      <WrappingElement ref={innerRef || null}>
        {children}
      </WrappingElement>
    </Wrapper>
  );
});

export default CardWrap