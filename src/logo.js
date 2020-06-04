import React from 'react';
import styled from 'styled-components';

const LogoElement = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1em;
  text-align: left;
  text-transform: uppercase;
  line-height: 1;
  font-size: 5vw;

  .MyCardsContainer &,
  .SubmittedCardsTable & {
    font-size: 18px;
  }

  @media (min-width: 501px) {
    font-size: 2vw;
  }
  @media (orientation: landscape) {
    font-size: 2vw;
  }
  @media (min-width: 1920px) {
    font-size: 39px;
  }
`;
const Gradient = styled.span`
  background: #40E0D0; // fallback for ancient browsers
  background: linear-gradient(to right, #40E0D0, #FF8C00, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const Logo = () => (
  <LogoElement>
    Cards of<br/>
    <Gradient>Personality</Gradient>
  </LogoElement>
);

export default Logo;
