import React from 'react';
import styled from 'styled-components';
import { MAX_PLAYERS } from "../constants";

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
  border: 2px dashed #000;
  color: #000;
  @media screen and (min-width: 1100px) {
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 140%;
`;
const BlankCard = styled.div`
  position: relative;
  width: calc(25% - 1em);
  margin: .5em;

  @media (max-width: 500px) and (orientation: portrait) {
    max-width: calc(25vh - 1em - 50px);
  }

  @media (orientation: landscape) {
    max-width: calc(50vh - 50px - 4em);
  }
`;

const BlankPlayerCard = ({count, index}) => {

  return (
    <BlankCard>
      <Wrapper>
        <CardElement>
          Player {count < MAX_PLAYERS ? count + index + 1 : index + 1}
        </CardElement>
      </Wrapper>
    </BlankCard>

  )
}

export default BlankPlayerCard;
