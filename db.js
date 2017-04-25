const pg = require("pg");
const settings = require("./settings");


const config = {
  user      : settings.user,
  password  : settings.password,
  database  : settings.database,
  host      : settings.host,
  port      : settings.port,
  ssl       : settings.ssl
};

module.exports = {
  connect: (done) => {
    const client = new pg.Client(config);
    client.connect((error) => {
      done(error, client);
    });
  }
}