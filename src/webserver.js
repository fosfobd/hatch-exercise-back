const express = require('express');
const bodyParser = require('body-parser');
const Middlewares = require('./lib/middlewares');
const DB = require('./lib/db');
const Tasks = require('./handlers/tasks');

module.exports = class WebServer {

  static port = process.env.PORT;

  static async init() {

    // init db connection
    await DB.init();

    // create webserver
    const app = express();

    // add bundled middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    // add our middlewares
    app.use(Middlewares.log);
    app.use(Middlewares.cors);

    // handlers
    // create, read, update, delete tasks
    app.post('/tasks', Tasks.create);
    app.get('/tasks', Tasks.read);
    app.patch('/tasks', Tasks.update);
    app.delete('/tasks', Tasks.delete);

    // start webserver
    app.listen(WebServer.port, () => {
      console.log(`web server listening on port: ${WebServer.port}`);
    });

  }

};
