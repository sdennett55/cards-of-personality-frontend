import React from 'react';
import styled from 'styled-components';

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
  border: 2px solid #000;

  .MyCardsContainer & {
    border-color: #2cce9f;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: calc(140% + 4px);
`;

const Card = ({ bgColor, color, text }) => {

  return (
    <div style={{width: '150px', margin: '.5em'}}>
      <Wrapper>
        <CardElement style={{ backgroundColor: bgColor, color, }}>
          {text}
        </CardElement>
      </Wrapper>
    </div>

  )
}

export default Card;
