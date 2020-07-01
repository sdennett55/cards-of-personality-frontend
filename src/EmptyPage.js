import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyPage = () => {
  return (
    <Page>
      <Text>Not sure how you got here, but this page doesn't exist.</Text>
      <Text>
        <LinkElem to="/">Back to homepage.</LinkElem>
      </Text>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 2em;
  font-size: 2em;
  text-align: center;
`;
const Text = styled.p`
  margin: .5em 0;
`;
const LinkElem = styled(Link)`
  position: relative;
  display: inline-block;
  color: #fff;
  background: linear-gradient(
    to right,
    rgb(64, 224, 208),
    rgb(255, 140, 0),
    rgb(255, 0, 128)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      rgb(64, 224, 208),
      rgb(255, 140, 0),
      rgb(255, 0, 128)
    );
    transition: opacity .25s;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 0;
    }
  }
`;

export default EmptyPage;
