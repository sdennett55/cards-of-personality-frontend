import React, { useState, useEffect, useRef } from "react";
import { SendIcon, BackIcon } from "./icons";
import styled from "styled-components";

function handleSubmit({ e, inputRef, socket, myName, setMessages }) {
  e.preventDefault();

  const msg = inputRef.current.value;
  
  if (!msg.trim()) {
    return;
  }

  setMessages((oldMessages) => [...oldMessages, { msg, from: myName }]);

  socket.emit("sent message to chat", {
    msg: inputRef.current.value,
    from: myName,
  });

  inputRef.current.value = "";
}

function getMyStyles() {
  return {
    background: "#40E0D0",
  };
}

function getBubbleWrapStyles() {
  return {
    alignSelf: "flex-end",
    textAlign: "right",
    alignItems: "flex-end",
  };
}

const handleClick = ({ e, wrapperRef, setOpen }) => {
  if (wrapperRef.current.contains(e.target)) {
    // inside click
    return;
  }
  setOpen(false);
  // outside click
  // ... do whatever on click outside here ...
};

const ChatBox = ({ open, setOpen, socket, myName, setUnreadCount }) => {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (socket) {
      socket.on("receive message from chat", function ({ msg, from }) {
        setMessages((oldMessages) => [...oldMessages, { msg, from }]);

        setUnreadCount((count) => count + 1);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open, inputRef]);

  useEffect(() => {
    setUnreadCount(0);
  }, [open]);

  useEffect(() => {
    const xH = scrollRef.current.scrollHeight;
    scrollRef.current.scrollTo(0, xH);
  }, [messages]);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", (e) =>
      handleClick({ e, wrapperRef, setOpen })
    );
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleClick({ e, wrapperRef, setOpen })
      );
    };
  }, [setOpen]);

  return (
    <Wrapper
      ref={wrapperRef}
      style={{ transform: open ? "translateX(0) translateZ(0)" : null }}
    >
      <Header>
        <BackButton onClick={() => setOpen(false)}>
          <BackIcon />
        </BackButton>
        <Title>Party Chat</Title>
      </Header>
      <MessageGroup>
        <MessageList ref={scrollRef}>
          {messages &&
            messages.length > 0 &&
            messages.map(({ msg, from }, index) => (
              <ChatBubbleWrap
                key={index}
                style={from === myName ? getBubbleWrapStyles() : null}
              >
                <PlayerName>{from}</PlayerName>
                <ChatBubble style={from === myName ? getMyStyles() : null}>
                  {msg}
                </ChatBubble>
              </ChatBubbleWrap>
            ))}
        </MessageList>
      </MessageGroup>
      <Form
        onSubmit={(e) =>
          handleSubmit({ e, inputRef, socket, myName, setMessages })
        }
      >
        <Input ref={inputRef} type="text" placeholder="Please be nice!" />
        <SendButton>
          <SendIcon />
        </SendButton>
      </Form>
    </Wrapper>
  );
};

const Header = styled.header`
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 40px;
  appearance: none;
  background: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background .25s;

  &:hover,
  &:focus {
    background: rgb(64, 224, 208);
    outline: 0;
  }
`;

const Title = styled.h3`
  font-size: 0.75em;
  text-transform: uppercase;
`;

const MessageList = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: auto;
  padding: 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  ${"" /* transform: rotate(180deg);
  direction: rtl; */}
  max-height: calc(100vh - 90px);
  height: 100vh;
  padding: 1em;
  flex-grow: 1;
  background: #e5e5e5;
  overflow: auto;
`;

const MessageGroup = styled.div``;

const ChatBubbleWrap = styled.li`
  display: inline-flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0.5em 0;
  ${"" /* transform: rotate(180deg);
  direction: ltr; */}

  &:first-child {
    margin-top: auto;
  }
`;

const PlayerName = styled.p`
  font-size: 0.75em;
  text-transform: uppercase;
  margin: 0;
`;

const ChatBubble = styled.div`
  background: #bbbbbb;
  border-radius: 12px;
  padding: 0.5em;
  text-align: left;
  word-break: break-all;
`;

const Form = styled.form`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: #e8e8e8;
`;

const Input = styled.input`
  appearance: none;
  width: calc(100% - 50px);
  height: 50px;
  background: #2cce9f;
  padding: 0 1em;
  background: #fff;
  border-radius: 8px 0 0 0;
  border: 0;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  font-size: 1em;

  &:hover,
  &:focus {
    outline: 0;
    border-color rgb(64, 224, 208);

    & + button {
      border-color: rgb(64,224,208);
    }
  }
`;

const SendButton = styled.button`
  appearance: none;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 0;
  border-radius: 0 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  transition: background .25s;

  &:hover,
  &:focus {
    outline: 0;
    background: rgb(64, 224, 208);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  transform: translateX(100%) translateZ(0);
  transition: transform 0.4s, z-index 0s 0.4s;
  overflow: hidden;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default ChatBox;
