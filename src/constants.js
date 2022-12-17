export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://cards-of-personality-backend-production.up.railway.app";

export const CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cardsofpersonality.com";

export const MAX_PLAYERS = 8;
