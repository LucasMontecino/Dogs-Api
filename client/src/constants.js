const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://dogs-api-rest.vercel.app/';

export default API_URL;
