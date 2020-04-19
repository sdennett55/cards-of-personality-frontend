import React, {useState} from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import {useDrop} from 'react-dnd';
import Card from './card';
import BlankCard from './blank_card';

const MyCards = styled.button`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000;
  color: #fff;
  border-radius: 8px 8px 0 0;
  border: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
  padding-left: 2em;
`;

const Scrolling = styled.div`
  display: flex;
  position: absolute;
  padding-right: 1.5em;
`;

const BackToTableButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  color: #000;
  height: 50px;
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
`;

function getBlankCards(myCards) {
  const length = 7 - myCards.length;
  const arr = Array.from({length}, (_, i) => i);

  return arr;
}

const MyCardsDropZone = ({addCardToMyCards, myCards, myName}) => {
  const [isOpen, setOpen] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      addCardToMyCards(item)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <>
      <MyCards onClick={() => setOpen(isOpen => !isOpen)} ref={drop} style={{background: isOver ? '#2cce9f' : null}}>
        {isOver ? 'DROP HERE' : `${myName}'S CARDS (${myCards.length})`}
      </MyCards>
      <div className={cx('MyCardsContainer', {'is-open': isOpen})}>
        <BackToTableButton onClick={() => setOpen(isOpen => !isOpen)}>Back to Game</BackToTableButton>
        <Wrapper>
          <Scrolling>
            {myCards.map(card => (
              <Card key={card.text} {...card} />
            ))}
            {getBlankCards(myCards).map(num => (
              <BlankCard key={num} />
            ))}
          </Scrolling>
        </Wrapper>
      </div>
    </>
  )
}

export default MyCardsDropZone;
