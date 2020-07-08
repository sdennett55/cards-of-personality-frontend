import React, { useState, useEffect, useRef } from "react";
import { SendIcon, BackIcon } from "./icons";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";

function handleSubmit({ e, inputRef, socket, myName, setMessages, reactGA }) {
  e.preventDefault();

  const msg = inputRef.current.value;
  if (!msg.trim()) {
    return;
  }

  reactGA.event({
    category: "Game",
    action: "Sent a chat message",
    label: msg,
  });

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

const handleClick = ({ e, wrapperRef, setChatOpen }) => {
  if (wrapperRef?.current?.contains(e.target)) {
    // inside click
    return;
  }
  setChatOpen(false);
  // outside click
  // ... do whatever on click outside here ...
};

const getOverlayStyles = ({ chatOpen }) => {
  if (chatOpen) {
    return {
      pointerEvents: "auto",
      opacity: "1",
    };
  }

  return null;
};

const ChatBox = ({ chatOpen, setChatOpen, socket, myName, setUnreadCount, reactGA }) => {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (socket) {
      socket.on("receive message from chat", function ({ msg, from }) {
        setMessages((oldMessages) => [...oldMessages, { msg, from }]);

        setUnreadCount(1);
      });
    }
  }, [socket, setUnreadCount]);

  useEffect(() => {
    if (chatOpen) {
      inputRef.current.focus();
    }
  }, [chatOpen, inputRef]);

  useEffect(() => {
    if (chatOpen && document && !document.hidden) {
      setUnreadCount(0);
    }
  }, [chatOpen, messages, setUnreadCount]);

  useEffect(() => {
    const xH = scrollRef.current.scrollHeight;
    scrollRef.current.scrollTop = xH;
  }, [messages]);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", (e) =>
      handleClick({ e, wrapperRef, setChatOpen })
    );
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleClick({ e, wrapperRef, setChatOpen })
      );
    };
  }, [setChatOpen]);

  return (
    <>
      <Overlay style={getOverlayStyles({ chatOpen })} />
      <Swipeable
        innerRef={(el) => (wrapperRef.current = el)}
        onSwipedRight={(eventData) => {
          setChatOpen(false);
        }}
      >
        <Wrapper
          style={{ transform: chatOpen ? "translateX(0) translateZ(0)" : null }}
        >
          <Header>
            <BackButton onClick={() => setChatOpen(false)}>
              <BackIcon />
            </BackButton>
            <Title>Party Chat</Title>
          </Header>
          <MessageGroup ref={scrollRef}>
            <MessageList>
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
              handleSubmit({ e, inputRef, socket, myName, setMessages, reactGA })
            }
          >
            <Input ref={inputRef} type="text" placeholder="Please be nice!" />
            <SendButton>
              <SendIcon />
            </SendButton>
          </Form>
        </Wrapper>
      </Swipeable>
    </>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s;
`;

const Header = styled.div`
  position: relative;
  background: #fff;
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
  transition: background 0.25s;

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
  padding: 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  padding: 1em;
  flex-grow: 1;
`;

const MessageGroup = styled.div`
  position: relative;
  overflow: auto;
  margin-top: auto;
`;

const ChatBubbleWrap = styled.li`
  display: inline-flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0.5em 0;
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
  word-break: break-word;
`;

const Form = styled.form`
  width: 100%;
  background: #e8e8e8;
  height: 50px;
`;

const Input = styled.input`
  display: inline-block;
  vertical-align: top;
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
  display: inline-block;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  transition: background 0.25s;

  &:hover,
  &:focus {
    outline: 0;
    background: rgb(64, 224, 208);
  }
`;

const Wrapper = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 400px;
  height: 100%;
  transform: translateX(100%) translateZ(0);
  transition: transform 0.4s, z-index 0s 0.4s;
  overflow: hidden;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default ChatBox;
