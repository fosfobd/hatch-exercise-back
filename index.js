// load and check env vars
require('dotenv').config();
require('./src/lib/env-check')();

// start webserver
const WebServer = require('./src/webserver');
WebServer.init().catch(console.log);
