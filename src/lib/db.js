module.exports = class DB {

  static client;

  static init() {
    return new Promise((resolve, reject) => {
      
      // connect
      DB.client = require('knex')({
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME
        }
      });
      
      // test connection before resolving
      DB.client.raw('select 1+1 as result').then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });

    });
  }

};
