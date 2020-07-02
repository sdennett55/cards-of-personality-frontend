import React, { useState } from "react";
import { ChatIcon } from "./icons";
import ChatBox from "./ChatBox";
import styled from "styled-components";

const ChatButton = ({socket, myName}) => {
  const [open, setOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <>
      <ChatIconWrap onClick={() => setOpen(true)}>
        <ChatIcon />
        {unreadCount > 0 && <Notification>{unreadCount}</Notification>}
      </ChatIconWrap>
      <ChatBox open={open} setOpen={setOpen} socket={socket} myName={myName} setUnreadCount={setUnreadCount} />
    </>
  );
};

const ChatIconWrap = styled.button`
  position: relative;
  appearance: none;
  border: 0;
  background: rgb(64, 224, 208);
  padding: 0.5em;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.25s;


  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
  }

  @media (min-width: 1600px) {
    border-radius: 0 8px 0 0;
  }
`;

const Notification = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  background: #ff0080;
  width: 16px;
  height: 16px;
  font-size: 0.75rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ChatButton;
