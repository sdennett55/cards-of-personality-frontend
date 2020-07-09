import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const PublicGames = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/getPublicRooms`)
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setError("There was an error on the server. Please try again.");
        console.error(err);
      });
  }, []);
  return (
    <Page>
      <GlobalStyle />
      <StartTitle>Public Games</StartTitle>
      <Table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Players</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).length > 0 &&
            Object.entries(data).map(([roomName, { players }]) => (
              <tr key={roomName}>
                <td>{roomName}</td>
                <td>{`${players.length}/8`}</td>
                <FlexCell>
                  <GreenButton to={`/g/${roomName}`}>Join Game</GreenButton>
                </FlexCell>
              </tr>
            ))}
            {Object.keys(data).length === 0 && (
              <tr>
                <td colSpan="3" style={{textAlign: 'center', height: '51px'}}>
                  No games available.
                </td>
              </tr>
            )}
        </tbody>
      </Table>
      {error && <ErrorText>{error}</ErrorText>}
      <WhiteButton to="/">Back</WhiteButton>
    </Page>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    background: #000;
    border: 1em solid;
    border-image: linear-gradient(90deg,rgb(64,224,208),rgb(255,140,0),rgb(255,0,128) ) 1;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
`;

const Table = styled.table`
  width: 100%;
  max-width: 600px;
  text-align: left;
  border-collapse: collapse;
  color: #fff;
  border: 1px solid rgb(64,224,208);

  thead {
    color: #000;
    th {
      padding: .5em 1em;
      background: rgb(64, 224, 208);

      &:first-child {
        border-radius: 4px 0 0 0;
      }
      &:last-child {
        border-radius: 0 4px 0 0;
      }
    }
  }
  tbody tr:not(:first-child) {
    border-top: 1px solid #fff;
  }
  td {
    vertical-align: middle;
  }
  tbody > tr > td {
    padding: 0.5em 1em;
  }
  p {
    margin: 0.25em 0;
  }
`;

const Page = styled.div`
  min-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WhiteButton = styled(Link)`
  display: block;
  appearance: none;
  background: #fff;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0.5em;
  font-weight: bold;
  transition: opacity 0.25s;
  text-decoration: none;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;

const GreenButton = styled(Link)`
  display: inline-block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.5em;
  margin: 0 auto;
  border-radius: 8px;
  font-weight: bold;
  transition: opacity 0.25s;
  text-decoration: none;
  text-align: center;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;
const FlexCell = styled.td`
  display: flex;
`;
const StartTitle = styled.h2`
  color: #fff;
  margin: 1em;
  font-weight: normal;
  font-size: 2em;
`;

export default PublicGames;
