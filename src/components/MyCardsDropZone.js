import React, {useState} from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import {useDrop} from 'react-dnd';
import Card from '../card';
import {BackIcon} from '../icons';
import DraggableCard from './DraggableCard';
import BlankCard from './BlankCard';
import CardWrap from './CardWrap';
import ChatButton from './ChatButton';
import {MAX_PLAYERS} from '../constants';

const MyCards = styled.button`
  width: calc(100% - 50px);
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border: 0;
  padding: 0;
  transition: background 0.25s, color 0.25s;

  &:hover,
  &:focus {
    background: #2cce9f;
    outline: 0;
  }

  @media (min-width: 1600px) {
    border-radius: 8px 0 0 0;
  }
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

const Flex = styled.div`
  display: flex;
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
  background-color: rgba(35, 139, 179, 0.34);
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
  transition: color 0.25s;

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
  transition: color 0.25s, background 0.25s;

  &:hover,
  &:focus {
    background: #2cce9f;
    outline: 0;
  }
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
  transition: background 0.25s;
`;

const MenuTitle = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  opacity: 0.5;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  line-height: 1;
  width: 100%;
  padding-left: 0.25em;
  font-style: italic;

  @media (min-width: 1384px) {
    display: flex;
    justify-content: center;
  }
`;

const ScrollingWrap = styled.div`
  position: relative;
  height: 226px;
  width: 100%;

  @media (min-width: 1384px) {
    display: flex;
    justify-content: center;
  }
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

const DropZoneWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  display: flex;
`;

function getBlankCards(myCards) {
  const length = 7 - myCards.length;
  const arr = Array.from({length}, (_, i) => i);

  return arr;
}

function getBlankSubmittedCards(cards) {
  const length = MAX_PLAYERS - 1 - cards.length;
  const arr = Array.from({length}, (_, i) => i);

  return arr;
}

function getMyNameCards({myCards, userIsDragging, myName, isOver}) {
  if (isOver && myCards.length !== 7) {
    return 'DROP IT!';
  }
  if (myCards.length === 7 && userIsDragging === 'whiteCard') {
    return 'YOU ALREADY HAVE 7 CARDS';
  }
  if (userIsDragging === 'whiteCard') {
    const emptyCardsLength = 7 - myCards.length;
    if (emptyCardsLength === 1) {
      return `DROP ${emptyCardsLength} WHITE CARD HERE`;
    }
    return `DROP ${emptyCardsLength} WHITE CARDS HERE`;
  }

  return `${myName}'S CARDS (${myCards.length})`;
}

function getMyNameCardsStyle({myCards, userIsDragging, isOver}) {
  if (isOver && myCards.length !== 7) {
    return {
      background: '#2cce9f',
    };
  }
  if (myCards.length === 7 && userIsDragging === 'whiteCard') {
    return {
      background: '#ff2d55',
    };
  }

  if (userIsDragging === 'whiteCard') {
    return {
      background: 'rgb(64,224,208)',
    };
  }
}

function getBottomBarText({submittedCards, userIsDragging, isOverSubmit}) {
  if (isOverSubmit && submittedCards.length !== 7) {
    return 'DROP IT!';
  }
  if (submittedCards.length === 7 && userIsDragging === 'whiteCard') {
    return 'CARDS ARE FULL';
  }

  return userIsDragging === 'whiteCard'
    ? 'DROP TO SUBMIT CARD HERE'
    : 'Submitted Cards';
}

function getBottomBarStyles({submittedCards, userIsDragging, isOverSubmit}) {
  if (isOverSubmit && submittedCards.length !== 7) {
    return {
      background: '#2cce9f',
    };
  }
  if (submittedCards.length === 7 && userIsDragging === 'whiteCard') {
    return {
      background: userIsDragging === 'whiteCard' ? '#ff2d55' : null,
    };
  }

  return {
    background: userIsDragging === 'whiteCard' ? 'rgb(64,224,208)' : null,
  };
}

function getDiscardStyles({userIsDragging, isOverDiscard}) {
  if (isOverDiscard) {
    return {
      background: '#2cce9f',
    };
  }
  if (userIsDragging === 'whiteCard') {
    return {
      background: 'rgb(64,224,208)',
    };
  }
}

const MyCardsDropZone = ({
  addCardToMyCards,
  submittedCards,
  discardACard,
  myCards,
  myName,
  socket,
  setUserIsDragging,
  userIsDragging,
  submitACard,
  blackCards,
  setChatOpen,
  unreadCount,
  isMyCardsOpen,
  setMyCardsOpen,
  isSubmittedTableOpen,
  setSubmittedTableOpen,
}) => {
  const [{isOver}, drop] = useDrop({
    accept: 'whiteCard',
    drop: (item) => {
      addCardToMyCards(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const [{isOverSubmit}, submitDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item) => {
      submitACard(item);
    },
    collect: (monitor) => ({
      isOverSubmit: !!monitor.isOver(),
    }),
  });
  const [{isOverDiscard}, discardDropRef] = useDrop({
    accept: 'whiteCard',
    drop: (item) => {
      discardACard(item);
    },
    collect: (monitor) => ({
      isOverDiscard: !!monitor.isOver(),
    }),
  });

  return (
    <>
      <DropZoneWrap>
        <MyCards
          onClick={setMyCardsOpen}
          ref={drop}
          style={getMyNameCardsStyle({myCards, userIsDragging, isOver})}
          className="MyCardsDropBar"
        >
          {getMyNameCards({myCards, userIsDragging, myName, isOver})}
        </MyCards>
        <ChatButton
          socket={socket}
          myName={myName}
          setChatOpen={setChatOpen}
          unreadCount={unreadCount}
        />
      </DropZoneWrap>
      <div className={cx('MyCardsContainer', {'is-open': isMyCardsOpen})}>
        <Wrapper>
          <MenuTitle>{`${myName}'s Cards`}</MenuTitle>
          <ScrollingWrap className="MyCardsContainer-scrollingWrap">
            <Scrolling>
              <Card
                text={
                  blackCards && blackCards.length
                    ? blackCards[blackCards.length - 1]
                    : ''
                }
                bgColor="#000"
                color="#fff"
              />
              {myCards.map((card) => (
                <CardWrap key={card.text}>
                  <DraggableCard
                    isBroadcastingDrag={false}
                    flippedByDefault
                    key={card.text}
                    setUserIsDragging={setUserIsDragging}
                    socket={socket}
                    {...card}
                  />
                </CardWrap>
              ))}
              {getBlankCards(myCards).map((num) => (
                <BlankCard key={num}>Draw a card</BlankCard>
              ))}
            </Scrolling>
          </ScrollingWrap>
        </Wrapper>
        <ButtonWrapper>
          <BackToTableButton onClick={() => setMyCardsOpen(false)}>
            <BackIcon />
          </BackToTableButton>
          <SubmittedCardsButton
            ref={submitDropRef}
            onClick={setSubmittedTableOpen}
            style={getBottomBarStyles({
              submittedCards,
              userIsDragging,
              isOverSubmit,
            })}
            className="SubmittedCardsBar"
          >
            {getBottomBarText({submittedCards, userIsDragging, isOverSubmit})}
          </SubmittedCardsButton>
        </ButtonWrapper>
      </div>
      <div
        className={cx('SubmittedCardsTable', {
          'is-open': isSubmittedTableOpen,
        })}
      >
        <WrapperCentered>
          <MenuTitle>SUBMITTED CARDS</MenuTitle>
          <ScrollingWrap className="SubmittedCardsTable-scrollingWrap">
            <Scrolling>
              <Card
                text={
                  blackCards && blackCards.length
                    ? blackCards[blackCards.length - 1]
                    : ''
                }
                bgColor="#000"
                color="#fff"
              />
              {submittedCards.map((card) => (
                <CardWrap key={card.text}>
                  <DraggableCard
                    isFlipBroadcasted
                    key={card.text}
                    setUserIsDragging={setUserIsDragging}
                    socket={socket}
                    {...card}
                  />
                </CardWrap>
              ))}
              {getBlankSubmittedCards(submittedCards).map((num) => (
                <BlankCard key={num}></BlankCard>
              ))}
            </Scrolling>
          </ScrollingWrap>
        </WrapperCentered>
        <ButtonWrapper>
          <BackToTableButton onClick={() => setSubmittedTableOpen(false)}>
            <BackIcon />
          </BackToTableButton>

          <DiscardButton
            ref={discardDropRef}
            style={getDiscardStyles({userIsDragging, isOverDiscard})}
            className="DiscardButton"
          >
            {isOverDiscard ? 'DROP IT!' : 'DROP TO DISCARD HERE'}
          </DiscardButton>
        </ButtonWrapper>
      </div>
    </>
  );
};

export default MyCardsDropZone;
