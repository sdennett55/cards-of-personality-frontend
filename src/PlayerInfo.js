import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "./helpers";
import styled from "styled-components";
import queryString from "query-string";
import axios from "axios";

const PlayerInfo = () => {
  const [data, setData] = useState({});
  const [playerName, setPlayerName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { roomName, id } = queryString.parse(location.search);
    axios
      .get(`${SERVER_URL}/api/getPlayerInfo?roomName=${roomName}&id=${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setPlayerName(res.data.name);
      });
  }, [location]);

  return (
    <Wrapper>
      <Title>{playerName || "Unknown Player"}'s Stats</Title>
      <Table>
        <thead>
          <tr>
            <th>White Cards</th>
            <th>Black Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {Object.keys(data).length > 0 &&
                data.whiteCards &&
                data.whiteCards.map((whiteCard) => (
                  <tr>
                    <td>{whiteCard.text}</td>
                  </tr>
                ))}
            </td>
            <td>
              {Object.keys(data).length > 0 &&
                data.blackCards &&
                data.blackCards.map((blackCard) => (
                  <tr>
                    <td>{blackCard.text}</td>
                  </tr>
                ))}
            </td>
          </tr>
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
  tbody > tr > td:first-child tr:nth-child(2n + 1) td {
    background: #dcdcdc;
  }

  tbody > tr > td:last-child tr:nth-child(2n + 2) td {
    background: #dcdcdc;
  }
  td {
    vertical-align: top;
    padding: 0.5em;
    width: 50%;
  }
  tbody > tr > td {
    padding: 0;
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

export default PlayerInfo;
