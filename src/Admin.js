import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "./constants";
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

  console.table(data);

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
            <th>Is Private</th>
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
                  isPrivate,
                },
              ]) => (
                <tr key={roomName} style={{ opacity: players.length > 0 ? "1" : ".5" }}>
                  <td>
                    <LinkElement to={`/g/${roomName}`} target="_blank">
                      {roomName}
                    </LinkElement>
                  </td>
                  <td>
                    <SimpleTable>
                      <tbody>
                        {whiteCards.length > 0 &&
                          whiteCards
                            .slice(0, getSlice("white", whiteCards))
                            .map((whiteCard, index) => (
                              <tr key={whiteCard.text || whiteCard}>
                                <td>
                                  {whiteCard.text ? whiteCard.text : whiteCard}{" "}
                                  {index === 0 && (
                                    <button
                                      onClick={() =>
                                        setToggleWhiteCards((bool) => !bool)
                                      }
                                    >
                                      {toggleWhiteCards ? "-" : "+"}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </SimpleTable>
                  </td>
                  <td>
                    <SimpleTable>
                      <tbody>
                        {blackCards.length > 0 &&
                          blackCards
                            .slice(0, getSlice("black", blackCards))
                            .map((blackCard, index) => (
                              <tr key={blackCard.text || blackCard}>
                                <td>
                                  {blackCard.text ? blackCard.text : blackCard}{" "}
                                  {index === 0 && (
                                    <button
                                      onClick={() =>
                                        setToggleBlackCards((bool) => !bool)
                                      }
                                    >
                                      {toggleBlackCards ? "-" : "+"}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </SimpleTable>
                  </td>
                  <td>
                    <SimpleTable>
                      <tbody>
                        {submittedCards.length > 0 &&
                          submittedCards.map((submittedCard) => (
                            <tr key={submittedCard.text}>
                              <td>{submittedCard.text}</td>
                            </tr>
                          ))}
                      </tbody>
                    </SimpleTable>
                  </td>
                  <td>
                    {playersThatLeft.length > 0 &&
                      playersThatLeft.map((player) => (
                        <p key={player.name}>{player.name}</p>
                      ))}
                  </td>
                  <td>
                    {players.length > 0 &&
                      players.map((player) => (
                        <LinkElement
                          key={player.id}
                          to={`/player-info?roomName=${roomName}&id=${player.id}`}
                          target="_blank"
                        >
                          {player.name}
                        </LinkElement>
                      ))}
                  </td>
                  <td>{isPrivate ? "true" : "false"}</td>
                </tr>
              )
            )}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const SimpleTable = styled.table`
  border-collapse: collapse;
`;

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
