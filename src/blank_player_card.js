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
  border: 2px dashed #000;
  color: #000;
`;

const Wrapper = styled.div`
  position: relative; 
  padding-bottom: 140%;
`;

const BlankPlayerCard = ({count, index}) => {

  return (
    <div style={{ position: 'relative', width: 'calc(33.33% - 1em)', 'margin': '0.5em' }}>
      <Wrapper>
        <CardElement>
          Player {count < 6 ? count + index + 1 : index + 1}
        </CardElement>
      </Wrapper>
    </div>

  )
}
// BlankPlayerCard.propTypes = {
//   opaqueOnPickup: PropTypes.bool,
// }
// BlankPlayerCard.defaultProps = {
//   opaqueOnPickup: true,
// }

export default BlankPlayerCard;