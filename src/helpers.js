import {config} from './config';

const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://10.0.0.208:3001'
  : config.BACKEND_URL;

export { SERVER_URL }
