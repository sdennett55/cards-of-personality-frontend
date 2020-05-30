import React, { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { useDrop } from 'react-dnd';
import Card from './card';
import { BackIcon } from './icons';
import DraggableCard from './draggable_card';
import BlankCard from './blank_card';
import CardWrap from './card_wrap';
import { MAX_PLAYERS } from "./data";

const MyCards = styled.button`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000;
  color: #fff;
  border: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2em;
  padding-bottom: 50px;
  background-color: #000;
`;

const WrapperCentered = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2em;
  padding-bottom: 50px;
  background-color: rgba(35, 139, 179, .34);
`;

const Scrolling = styled.div`
  display: flex;
  position: absolute;
  padding-right: 1.5em;
`;

const BackToTableButton = styled.button`
  width: 100px;
  background: #000;
  color: #fff;
  height: 50px;
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
  border-top: 1px solid #fff;

  &:hover,
  &:focus {
    color: #2cce9f;
    outline: 0;
  }
`;

const SubmittedCardsButton = styled.button`
  width: calc(100% - 100px);
  text-transform: uppercase;
  background: #fff;
  color: #000;
  height: 50px;
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 16px;
    font-weight: bold;
`;

const DiscardButton = styled.div`
  width: calc(100% - 100px);
  text-transform: uppercase;
  background: #fff;
  color: #000;
  height: 50px;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
`;

const MenuTitle = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  opacity: .5;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  line-height: 1;
  width: 100%;
  padding-left: .25em;
  font-style: italic;
`;

const ScrollingWrap = styled.div`
  position: relative;
  height: 226px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  transform: translateZ(0);
`;

function getBlankCards(myCards) {
  const length = 7 - myCards.length;
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

function getBlankSubmittedCards(cards) {
  const length = (MAX_PLAYERS - 1) - cards.length;
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

const MyCardsDropZone = ({ addCardToMyCards, submittedCards, discardACard, myCards, myName, socket, setUserIsDragging, userIsDragging, submitACard }) => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmittedTableOpen, setSubmittedTableOpen] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      addCardToMyCards(item)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver() && userIsDragging,
    }),
  });
  const [{ submitIsOver }, submitDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      submitACard(item)
    },
    collect: monitor => ({
      // we don't need to monitor if user is dragging, because these our each player's cards that no one else can drag.
      submitIsOver: !!monitor.isOver(),
    }),
  });
  const [{ discardIsOver }, discardDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item, monitor) => {
      discardACard(item)
    },
    collect: monitor => ({
      discardIsOver: !!monitor.isOver() && userIsDragging,
    }),
  });

  return (
    <>
      <MyCards onClick={() => setOpen(isOpen => !isOpen)} ref={drop} style={{ background: isOver ? '#2cce9f' : null }}>
        {isOver ? 'DROP HERE' : `${myName}'S CARDS (${myCards.length})`}
      </MyCards>
      <div className={cx('MyCardsContainer', { 'is-open': isOpen })}>
        <Wrapper>
          <MenuTitle>{`${myName}'s Cards`}</MenuTitle>
          <ScrollingWrap>
            <Scrolling>
              {myCards.map(card => (
                <CardWrap key={card.text} width="150px" margin=".5em">
                  <DraggableCard isBroadcastingDrag={false} flippedByDefault key={card.text} setUserIsDragging={setUserIsDragging} socket={socket} {...card} />
                </CardWrap>
              ))}
              {getBlankCards(myCards).map(num => (
                <BlankCard key={num}>Draw a card</BlankCard>
              ))}
            </Scrolling>
          </ScrollingWrap>
        </Wrapper>
        <ButtonWrapper>
          <BackToTableButton onClick={() => setOpen(isOpen => !isOpen)}><BackIcon /></BackToTableButton>
          <SubmittedCardsButton ref={submitDropRef} onClick={() => setSubmittedTableOpen(isSubmittedTableOpen => !isSubmittedTableOpen)} style={{ background: submitIsOver ? '#2cce9f' : null, color: submitIsOver ? '#fff' : null }}>{submitIsOver ? 'DROP TO SUBMIT CARD' : 'Submitted Cards'}</SubmittedCardsButton>
        </ButtonWrapper>
      </div>
      <div className={cx('SubmittedCardsTable', { 'is-open': isSubmittedTableOpen })}>
        <WrapperCentered>
          <MenuTitle>SUBMITTED CARDS</MenuTitle>
          <ScrollingWrap>
            <Scrolling>
              {submittedCards.map(card => (
                <CardWrap key={card.text} width="150px" margin=".5em">
                  <DraggableCard isFlipBroadcasted key={card.text} setUserIsDragging={setUserIsDragging} socket={socket} {...card} />
                </CardWrap>
              ))}
              {getBlankSubmittedCards(submittedCards).map(num => (
                <BlankCard key={num}></BlankCard>
              ))}
            </Scrolling>
          </ScrollingWrap>
        </WrapperCentered>
        <ButtonWrapper>
          <BackToTableButton onClick={() => {
            setSubmittedTableOpen(isOpen => !isOpen)
          }}><BackIcon /></BackToTableButton>

          <DiscardButton ref={discardDropRef} style={{ background: discardIsOver ? '#2cce9f' : null, color: discardIsOver ? '#fff' : null }}>DROP TO DISCARD</DiscardButton>
        </ButtonWrapper>
      </div>
    </>
  )
}

export default MyCardsDropZone;
