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

  @media (min-width: 501px) {
    font-size: 2vw;
  }
  @media (orientation: landscape) {
    font-size: 2vw;
  }
`;
const Graident = styled.span`
  background: linear-gradient(to right, #40E0D0, #FF8C00, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const Logo = () => (
  <LogoElement>
    Cards <br/>Against<br/>
    <Graident>Strange Dudes</Graident>
  </LogoElement>
);

export default Logo;