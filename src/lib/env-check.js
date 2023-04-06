/**
 * use this to check all env vars required before app init,
 *  define fallbacks if necessary, self-heal or even make
 *  http requests to fetch values
 */
module.exports = () => {

  // sample
  if (!process.env.NODE_ENV) {
    throw 'NODE_ENV env var missing';
  }
  // db env vars
  if (!process.env.DB_HOST) {
    throw 'DB_HOST env var missing';
  }
  if (!process.env.DB_PORT) {
    throw 'DB_PORT env var missing';
  }
  if (!process.env.DB_USER) {
    throw 'DB_USER env var missing';
  }
  if (!process.env.DB_PASS) {
    throw 'DB_PASS env var missing';
  }
  if (!process.env.DB_NAME) {
    throw 'DB_NAME env var missing';
  }
  
  console.log('env check passed');

}