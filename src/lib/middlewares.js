module.exports = class Middlewares {

  static async log(req, res, next) {

    const { method, hostname, originalUrl } = req;
    let logmsg = `\nreceived request: ${method} path: ${originalUrl} from hostname: ${hostname}`;
    console.log(logmsg);
    next();

  }

  static async cors(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PATCH, GET, OPTIONS, HEAD, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

  }

}
