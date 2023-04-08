const DB = require('../lib/db');

module.exports = class Tasks {

  /**
   * POST
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async create(req, res, next) {
    try {

      console.log(`Tasks.create - req body: ${JSON.stringify(req.body, null, 2)}`);

      // lots of values we are not accepting here
      if (!req.body?.label) {
        console.log('Tasks.create - falsey value provided for req.body.label');
        return res.status(400).send('Bad request');
      }

      const newRow = {
        label: req.body.label
      };
      await DB.client.table('tasks').insert(newRow);
      // const result = {
      //   id: rows[0], // we are inserting a single newRow, so it will always be the 0 index
      //   label: req.body.label,
      //   done: false // default value
      // };
      return res.status(202).send();

    } catch (err) {

      console.log('Tasks.create', err);
      return res.status(500).send('Internal server error');

    }
  }
  
  /**
   * GET
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async read(req, res, next) {
    try {

      console.log(`Tasks.read - query string: ${JSON.stringify(req.query, null, 2)}`);

      // TO-DO:
      //      - prepare to read query string to be able to
      //        filter by label later on (search feature)

      // parallel queries, sort of, node is single threaded, so this is the closest to parallel lol
      const rows = await Promise.all([false, true,].map(async (done) => {
        if (done) {
          return await DB.client.from('tasks').select().where({done}).orderBy('label').limit(10);
        } else {
          return await DB.client.from('tasks').select().where({done}).orderBy('label');
        }
      }));

      const result = {
        todo: rows[0],
        done: rows[1]
      };
      return res.status(200).send(result);

    } catch (err) {

      console.log('Tasks.read', err);
      return res.status(500).send('Internal server error');

    }
  }

  /**
   * PATCH
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async update(req, res, next) {
    try {

      console.log(`Tasks.update - req body: ${JSON.stringify(req.body, null, 2)}`);
      const { id, done } = req.body;

      // check if invalid req
      if (!id || typeof done !== 'boolean') {
        console.log('Tasks.update - falsey values provided for task');
        return res.status(400).send('Bad request');
      }

      // update db
      await DB.client.from('tasks')
        .where({ id })
        .update({ done });

      return res.status(202).send();

    } catch (err) {

      console.log('Tasks.update', err);
      return res.status(500).send('Internal server error');

    }
  }

  /**
   * DELETE
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async delete(req, res, next) {
    try {

      console.log('Tasks.delete');
      await DB.client.from('tasks').del();
      return res.status(202).send();

    } catch (err) {

      console.log('Tasks.delete', err);
      return res.status(500).send('Internal server error');

    }
  }

};