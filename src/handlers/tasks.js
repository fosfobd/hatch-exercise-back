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

    console.log('Tasks.create');
    const result = 'success';
    res.status(200).send(result);

  }
  
  /**
   * GET
   *  - remember to prepare to read query string to be able to
   *      filter by label later on (search feature)
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async read(req, res, next) {

    console.log('Tasks.read');
    const result = [];
    res.status(200).send(result);

  }

  /**
   * PUT
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async update(req, res, next) {

    console.log('Tasks.update');
    const result = 'success';
    res.status(200).send(result);

  }

  /**
   * DELETE
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  static async delete(req, res, next) {

    console.log('Tasks.delete');
    const result = 'success';
    res.status(200).send(result);

  }

};