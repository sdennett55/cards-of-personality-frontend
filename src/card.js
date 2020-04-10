import React from 'react';
import PropTypes from 'prop-types';
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
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 140%;
`;

const Card = ({ bgColor, color, text }) => {

  return (
    <div style={{width: '100px', margin: '.5em'}}>
      <Wrapper>
        <CardElement style={{ backgroundColor: bgColor, color, }}>
          {text}
        </CardElement>
      </Wrapper>
    </div>

  )
}
// Card.propTypes = {
//   opaqueOnPickup: PropTypes.bool,
// }
// Card.defaultProps = {
//   opaqueOnPickup: true,
// }

export default Card;