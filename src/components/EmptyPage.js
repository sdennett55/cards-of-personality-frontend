import React from "react";
import { Link } from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

const EmptyPage = () => {
  return (
    <Page>
      <GlobalStyle />
      <Text>Not sure how you got here, but this page doesn't exist.</Text>
      <Text>
        <LinkElem to="/">Back to homepage.</LinkElem>
      </Text>
    </Page>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding: 2em;
    background: #000;
    color: #fff;
    border: 1em solid;
    border-image: linear-gradient(90deg, rgb(64,224,208), rgb(255,140,0), rgb(255,0,128) ) 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Page = styled.div`
  font-size: 2em;
`
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
