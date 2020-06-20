import {config} from './config';

const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : config.BACKEND_URL;

const CLIENT_URL = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://cards-of-personality.netlify.app';

export { SERVER_URL, CLIENT_URL }
