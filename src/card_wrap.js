import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative; 
  padding-bottom: 140%;
  background: white;
  color: black;
  border-radius: 8px;
`;

const CardWrap = React.memo(({ children, innerRef }) => (
  <div style={{ width: 'calc(50% - .5em)', position: 'relative', zIndex: '1' }}>
    <Wrap ref={innerRef || null}>
      {children}
    </Wrap>
  </div>
));

export default CardWrap