import React from 'react';
import styled from 'styled-components';

const LogoElement = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1em;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
`;

const Logo = () => (
  <LogoElement>
    Cards<br/>
    Against<br/> 
    Steve
  </LogoElement>
);

export default Logo;