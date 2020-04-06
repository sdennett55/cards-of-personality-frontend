import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Preview } from 'react-dnd-multi-backend';
import Logo from './logo';

const GeneratePreview = ({ width, height }) => {
  const { style, item } = useContext(Preview.Context);
  return <div style={{
    ...style, zIndex: '2', borderRadius: '8px', backgroundColor: item.bgColor, isFlipped: item.isFlipped, color: item.color, width, height, display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
  }}>{item.isFlipped ? item.text : <Logo />}</div>;
};
GeneratePreview.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
GeneratePreview.defaultProps = {
  width: null,
  height: null,
};

export default GeneratePreview;