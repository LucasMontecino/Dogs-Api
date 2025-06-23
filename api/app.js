const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index.js');
const middleware = require('./src/utils/middleware.js');

const server = express();
const cors = require('cors');

server.name = 'API';

server.use(cors());
server.use(
  bodyParser.urlencoded({ extended: true, limit: '50mb' })
);
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    `https://dogs-api-lilac.vercel.app/`
  ); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/', routes);

server.use(middleware.unknownEndpoint);
server.use(middleware.errorHandler);

module.exports = server;
