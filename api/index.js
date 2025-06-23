//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require("./src/app.js");
require('dotenv').config();

const { conn } = require('./src/db.js');
const { PORT } = require('./src/utils/config.js');
const port = PORT || 3001;
const server = require('./app.js');
const logger = require('./src/utils/logger.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    logger.info(
      `Server listening at http://localhost:${port}`
    ); // eslint-disable-line no-console
  });
});

module.exports = server;
