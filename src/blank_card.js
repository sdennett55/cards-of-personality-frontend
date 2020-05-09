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
  border: 2px dashed #fff;
  color: #fff;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 140%;
  border: 2px solid transparent;
`;

const BlankCard = ({children}) => {

  return (
    <div style={{width: '150px', margin: '.5em'}}>
      <Wrapper>
        <CardElement>
          {children}
        </CardElement>
      </Wrapper>
    </div>

  )
}
// BlankCard.propTypes = {
//   opaqueOnPickup: PropTypes.bool,
// }
// BlankCard.defaultProps = {
//   opaqueOnPickup: true,
// }

export default BlankCard;