import React, { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { useDrop } from 'react-dnd';
import Card from './card';
import DraggableCard from './draggable_card';
import BlankCard from './blank_card';
import CardWrap from './card_wrap';

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
  padding-bottom: 50px;
`;

const WrapperCentered = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
  padding-left: 2em;
  padding-bottom: 50px;
`;

const Scrolling = styled.div`
  display: flex;
  position: absolute;
  padding-right: 1.5em;
`;

const BackToTableButton = styled.button`
  width: 100vw;
  background: #fff;
  color: #000;
  height: 50px;
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
`;

const SubmittedCardsButton = styled.button`
  position: absolute;
  bottom: 0;
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

const DiscardButton = styled.button`
  position: absolute;
  bottom: 0;
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
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

function getBlankSubmittedCards(cards) {
  const length = 6 - cards.length;
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

const MyCardsDropZone = ({ addCardToMyCards, submittedCards, discardACard, myCards, myName, socket, setUserIsDragging, submitACard }) => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmittedTableOpen, setSubmittedTableOpen] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      addCardToMyCards(item)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const [{ submitIsOver }, submitDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      submitACard(item)
    },
    collect: monitor => ({
      submitIsOver: !!monitor.isOver(),
    }),
  });
  const [{ discardIsOver }, discardDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      discardACard(item)
    },
    collect: monitor => ({
      discardIsOver: !!monitor.isOver(),
    }),
  });

  return (
    <>
      <MyCards onClick={() => setOpen(isOpen => !isOpen)} ref={drop} style={{ background: isOver ? '#2cce9f' : null }}>
        {isOver ? 'DROP HERE' : `${myName}'S CARDS (${myCards.length})`}
      </MyCards>
      <div className={cx('MyCardsContainer', { 'is-open': isOpen })}>
        <BackToTableButton onClick={() => setOpen(isOpen => !isOpen)}>Back to Game</BackToTableButton>
        <Wrapper>
          <Scrolling>
            {myCards.map(card => (
              <CardWrap width="150px" margin=".5em">

                <DraggableCard key={card.text} setUserIsDragging={setUserIsDragging} socket={socket} {...card} />
              </CardWrap>
            ))}
            {getBlankCards(myCards).map(num => (
              <BlankCard key={num}>Draw a card</BlankCard>
            ))}
          </Scrolling>
        </Wrapper>
        <SubmittedCardsButton ref={submitDropRef} onClick={() => setSubmittedTableOpen(isSubmittedTableOpen => !isSubmittedTableOpen)} style={{ background: submitIsOver ? '#2cce9f' : null, color: submitIsOver ? '#fff' : null }}>{submitIsOver ? 'DROP TO SUBMIT CARD' : 'See Submitted Cards'}</SubmittedCardsButton>
      </div>
      <div className={cx('SubmittedCardsTable', { 'is-open': isSubmittedTableOpen })}>
        <BackToTableButton onClick={() => {
          setOpen(isOpen => !isOpen)
          setSubmittedTableOpen(isOpen => !isOpen)
        }}>Back to Game</BackToTableButton>
        <WrapperCentered>
          <Scrolling>
            {submittedCards.map(card => (
              <CardWrap width="150px" margin=".5em">
                <DraggableCard key={card.text} setUserIsDragging={setUserIsDragging} socket={socket} {...card} />
              </CardWrap>
            ))}
            {getBlankSubmittedCards(submittedCards).map(num => (
              <BlankCard key={num}>Submitted Card Slot</BlankCard>
            ))}
          </Scrolling>
        </WrapperCentered>
        <DiscardButton ref={discardDropRef} onClick={() => setSubmittedTableOpen(isSubmittedTableOpen => !isSubmittedTableOpen)} style={{ background: discardIsOver ? '#2cce9f' : null, color: discardIsOver ? '#fff' : null }}>{discardIsOver ? 'DROP TO DISCARD' : 'DISCARD HERE'}</DiscardButton>
      </div>
    </>
  )
}

export default MyCardsDropZone;
