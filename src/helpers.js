const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://10.0.0.208:3001'
  : 'https://cards-against-steve.herokuapp.com';

export { SERVER_URL }