import React, { useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import { useDrop } from "react-dnd";
import Card from "./card";
import { BackIcon } from "./icons";
import DraggableCard from "./draggable_card";
import BlankCard from "./blank_card";
import CardWrap from "./card_wrap";
import ChatButton from "./ChatButton";
import { MAX_PLAYERS } from "./data";

const MyCards = styled.button`
  width: calc(100% - 50px);
  height: 50px;
  line-height: 50px;
  background-color: #000;
  color: #fff;
  border: 0;
  padding: 0;
  transition: background 0.25s;

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
    color: #fff;
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
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
`;

function getBlankCards(myCards) {
  const length = 7 - myCards.length;
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

function getBlankSubmittedCards(cards) {
  const length = MAX_PLAYERS - 1 - cards.length;
  const arr = Array.from({ length }, (_, i) => i);

  return arr;
}

function getMyNameCards({ myCards, userIsDragging, myName }) {
  if (myCards.length === 7 && userIsDragging === "whiteCard") {
    return "YOU ALREADY HAVE 7 CARDS";
  }

  return userIsDragging === "whiteCard"
    ? `DROP ${7 - myCards.length} WHITE CARDS HERE`
    : `${myName}'S CARDS (${myCards.length})`;
}

function getMyNameCardsStyle({ myCards, userIsDragging }) {
  if (myCards.length === 7 && userIsDragging === "whiteCard") {
    return "#ff2d55";
  }

  return userIsDragging === "whiteCard" ? "#2cce9f" : null;
}

function getBottomBarText({ submittedCards, userIsDragging }) {
  if (submittedCards.length === 7 && userIsDragging === "whiteCard") {
    return "CARDS ARE FULL";
  }

  return userIsDragging === "whiteCard"
    ? "DROP TO SUBMIT CARD"
    : "Submitted Cards";
}

function getBottomBarStyles({ submittedCards, userIsDragging }) {
  if (submittedCards.length === 7 && userIsDragging === "whiteCard") {
    return {
      background: userIsDragging === "whiteCard" ? "#ff2d55" : null,
      color: userIsDragging === "whiteCard" ? "#fff" : null,
    };
  }

  return {
    background: userIsDragging === "whiteCard" ? "#2cce9f" : null,
    color: userIsDragging === "whiteCard" ? "#fff" : null,
  };
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
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmittedTableOpen, setSubmittedTableOpen] = useState(false);
  const [, drop] = useDrop({
    accept: "whiteCard",
    drop: (item) => {
      addCardToMyCards(item);
    },
  });
  const [, submitDropRef] = useDrop({
    accept: "whiteCard",
    drop: (item) => {
      submitACard(item);
    },
  });
  const [, discardDropRef] = useDrop({
    accept: "whiteCard",
    drop: (item) => {
      discardACard(item);
    },
  });

  return (
    <>
      <DropZoneWrap>
        <MyCards
          onClick={() => setOpen((isOpen) => !isOpen)}
          ref={drop}
          style={{
            background: getMyNameCardsStyle({ myCards, userIsDragging }),
          }}
        >
          {getMyNameCards({ myCards, userIsDragging, myName })}
        </MyCards>
        <ChatButton socket={socket} myName={myName} setChatOpen={setChatOpen} unreadCount={unreadCount} />
      </DropZoneWrap>
      <div className={cx("MyCardsContainer", { "is-open": isOpen })}>
        <Wrapper>
          <MenuTitle>{`${myName}'s Cards`}</MenuTitle>
          <ScrollingWrap>
            <Scrolling>
              <Card
                text={
                  blackCards && blackCards.length
                    ? blackCards[blackCards.length - 1]
                    : ""
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
          <BackToTableButton onClick={() => setOpen((isOpen) => !isOpen)}>
            <BackIcon />
          </BackToTableButton>
          <SubmittedCardsButton
            ref={submitDropRef}
            onClick={() =>
              setSubmittedTableOpen(
                (isSubmittedTableOpen) => !isSubmittedTableOpen
              )
            }
            style={getBottomBarStyles({ submittedCards, userIsDragging })}
          >
            {getBottomBarText({ submittedCards, userIsDragging })}
          </SubmittedCardsButton>
        </ButtonWrapper>
      </div>
      <div
        className={cx("SubmittedCardsTable", {
          "is-open": isSubmittedTableOpen,
        })}
      >
        <WrapperCentered>
          <MenuTitle>SUBMITTED CARDS</MenuTitle>
          <ScrollingWrap>
            <Scrolling>
              <Card
                text={
                  blackCards && blackCards.length
                    ? blackCards[blackCards.length - 1]
                    : ""
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
          <BackToTableButton
            onClick={() => {
              setSubmittedTableOpen((isOpen) => !isOpen);
            }}
          >
            <BackIcon />
          </BackToTableButton>

          <DiscardButton
            ref={discardDropRef}
            style={{
              background: userIsDragging === "whiteCard" ? "#2cce9f" : null,
              color: userIsDragging === "whiteCard" ? "#fff" : null,
            }}
          >
            DROP TO DISCARD
          </DiscardButton>
        </ButtonWrapper>
      </div>
    </>
  );
};

export default MyCardsDropZone;
