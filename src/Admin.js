import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "./helpers";
import styled from "styled-components";
import axios from "axios";

const Admin = () => {
  const [toggleWhiteCards, setToggleWhiteCards] = useState(false);
  const [toggleBlackCards, setToggleBlackCards] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/getActiveRooms`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const getSlice = (type, cards) => {
    const check = type === "white" ? toggleWhiteCards : toggleBlackCards;
    return check ? cards.length : 1;
  };

  return (
    <Wrapper>
      <Title>Active Rooms</Title>
      <Table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>White Cards</th>
            <th>Black Cards</th>
            <th>Submitted Cards</th>
            <th>Past Players</th>
            <th>Current Players</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).length > 0 &&
            Object.entries(data).map(
              ([
                roomName,
                {
                  players,
                  whiteCards,
                  blackCards,
                  playersThatLeft,
                  submittedCards,
                },
              ]) => (
                <tr style={{ opacity: players.length > 0 ? "1" : ".5" }}>
                  <td>{roomName}</td>
                  <td>
                    {whiteCards.length > 0 &&
                      whiteCards
                        .slice(0, getSlice("white", whiteCards))
                        .map((whiteCard, index) => (
                          <tr>
                            <td>
                              {whiteCard.text ? whiteCard.text : whiteCard}{" "}
                              {index === 0 && (
                                <button
                                  onClick={() => setToggleWhiteCards(bool => !bool)}
                                >
                                  {toggleWhiteCards ? "-" : "+"}
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                  </td>
                  <td>
                    {blackCards.length > 0 &&
                      blackCards
                        .slice(0, getSlice("black", blackCards))
                        .map((blackCard, index) => (
                          <tr>
                            <td>
                              {blackCard.text ? blackCard.text : blackCard}{" "}
                              {index === 0 && (
                                <button
                                  onClick={() => setToggleBlackCards(bool => !bool)}
                                >
                                  {toggleBlackCards ? "-" : "+"}
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                  </td>
                  <td>
                    {submittedCards.length > 0 &&
                      submittedCards.map((submittedCard) => (
                        <tr>
                          <td>{submittedCard.text}</td>
                        </tr>
                      ))}
                  </td>
                  <td>
                    {playersThatLeft.length > 0 &&
                      playersThatLeft.map((player) => <p>{player.name}</p>)}
                  </td>
                  <td>
                    {players.length > 0 &&
                      players.map((player) => (
                        <LinkElement
                          to={`/player-info?roomName=${roomName}&id=${player.id}`}
                          target="_blank"
                        >
                          {player.name}
                        </LinkElement>
                      ))}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead {
    background: #828282;
    border-radius: 8px 8px 0 0;
    color: white;
    th {
      padding: 0.5em;
    }
  }
  tbody tr:nth-child(2n + 2) {
    background: #dcdcdc;
  }
  td {
    vertical-align: top;
  }
  tbody > tr > td {
    padding: 0.5em;
  }
  p {
    margin: 0.25em 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const LinkElement = styled(Link)`
  display: block;
  color: #2cce9f;
  font-weight: bold;

  & + & {
    margin-top: 0.25em;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export default Admin;
