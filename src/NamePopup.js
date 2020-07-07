import React, { useState } from "react";
import { CLIENT_URL } from "./helpers";
import { CopyIcon, HelpIcon } from "./icons";
import HowToPlay from "./HowToPlay";
import styled from "styled-components";

const NamePopup = ({
  handleSubmit,
  inviteInputRef,
  roomId,
  copyLink,
  updateMyName,
  myName,
  nameError,
  reactGA,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const PopupElement = isVisible ? HelpPopup : Popup;
  const handleHowToPlay = () => {
    setIsVisible((toggle) => !toggle);
    reactGA.event({
      category: "Game",
      action: "Opened Help Menu",
      label: myName,
    });
  };
  return (
    <PopupElement>
      {isVisible ? (
        <HowToPlay setIsVisible={setIsVisible} />
      ) : (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <PopupInnerWrap>
              <InviteLabel htmlFor="invite">Invite a friend</InviteLabel>
              <Flex>
                <InviteInput
                  id="invite"
                  ref={inviteInputRef}
                  type="text"
                  value={`${CLIENT_URL}/g/${roomId}`}
                  readOnly
                />
                <IconWrap type="button" onClick={copyLink}>
                  <CopyIcon />
                </IconWrap>
              </Flex>
              <NameLabel htmlFor="name">Enter your name</NameLabel>
              <NameInput
                type="text"
                id="name"
                maxLength="16"
                onChange={(e) => updateMyName(e)}
                defaultValue={myName}
              />
              {nameError && <ErrorMsg>{nameError}</ErrorMsg>}
              <JoinGameButton type="submit">JOIN GAME</JoinGameButton>
            </PopupInnerWrap>
          </form>
          {/* <HowToPlayButton type="button" onClick={handleHowToPlay}>
            <HelpIconWrap>
              <HelpIcon />
            </HelpIconWrap>{" "}
            HOW TO PLAY
          </HowToPlayButton> */}
        </>
      )}
    </PopupElement>
  );
};

const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.25s;
`;

const HelpPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.25s;
`;

const PopupInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 218px;
`;

const ErrorMsg = styled.p`
  margin-top: 0;
  color: #cc2e2e;
`;

const HelpIconWrap = styled.span`
  margin-right: 0.25em;
  display: flex;
  justify-content: center;
`;
const IconWrap = styled.button`
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;
  transition: opacity 0.25s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
  & svg {
    display: block;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 2em;
  border-radius: 8px;
`;

const NameInput = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  margin: 0 0 1em;
  padding: 0.25em 0 0.5em;
  background: transparent;
  border-bottom: 1px solid white;
  color: #fff;
  transition: border-color 0.25s;
  border-radius: 0;

  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

const NameLabel = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #c1bdbd;
`;

const HowToPlayButton = styled.button`
  display: flex;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 2em auto 0;
  transition: opacity 0.25s;
  background-color: rgb(255, 0, 128);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

const InviteInput = styled.input`
  appearance: none;
  font-size: 1em;
  border: 0;
  background: white;
  border-radius: 8px 0 0 8px;
  color: #000;
  padding: 0.25em 0.5em;
  margin: 0;
  direction: rtl;

  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

const InviteLabel = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #c1bdbd;
  margin-bottom: 0.5em;
`;

const JoinGameButton = styled.button`
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 0 auto;
  transition: opacity 0.25s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;

export default NamePopup;
