const { PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const DATABASE_URL =
  process.env.NODE_ENV === 'development'
    ? `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    : process.env.DATABASE_URL;

const CORS_ACCESS_CONTROL_ALLOW_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? '*'
    : 'https://dogs-api-lilac.vercel.app';

module.exports = {
  PORT,
  DATABASE_URL,
  CORS_ACCESS_CONTROL_ALLOW_ORIGIN,
};
