export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://cards-against-steve.herokuapp.com";

export const CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cardsofpersonality.com";

export const MAX_PLAYERS = 8;
