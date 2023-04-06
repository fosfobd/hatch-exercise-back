module.exports = class Middlewares {

  static async log(req, res, next) {

    const { method, hostname, originalUrl, origin } = req;
    let logmsg = `\nreceived request: ${method} hostname: ${hostname} path: ${originalUrl} from origin: ${origin}`;
    console.log(logmsg);

    next();

  }

  static async cors(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, HEAD, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

  }

}
