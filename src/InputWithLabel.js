import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0 0 1em;
  padding: .5em 0 .3em;
  background: transparent;
  border-bottom: 1px solid black;
  transition: border-color .25s;
  border-radius: 0;

  &:hover,
  &:focus {
    outline: 0;
    border-color:#2cce9f;
  }
`;

const Label = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: .813em;
  display: block;
  font-weight: bold;
`;

const Button = styled.button`
  display: block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: .7em 1em;
  border-radius: 8px;
  margin: 0 auto;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 270px;
  justify-content: center;
  margin: 2em auto;
`;

const InputWithLabel = ({ buttonText, labelText, onChange, type, placeholderText, blackCard, whiteCard }) => {
  const inputRef = React.useRef(null);
  const hasMounted = React.useRef(false);

  React.useEffect(() => {
    if (hasMounted.current && inputRef) {
      if (type === 'black' && blackCard === '') {
        inputRef.current.focus();
      } else if (type === 'white' && whiteCard === '') {
        inputRef.current.focus();
      }
    }
    hasMounted.current = true;
  }, [blackCard, whiteCard, type]);
  return (
    <Wrapper>
      <Label htmlFor={labelText.replace(/\s/g, '')}>{labelText}</Label>
      <Input ref={inputRef} id={labelText.replace(/\s/g, '')} type="text" placeholder={placeholderText} onChange={e => onChange(e.target.value)} value={type === 'black' ? blackCard : whiteCard} />
      <Button>{buttonText}</Button>
    </Wrapper>
  )
}

export default InputWithLabel;