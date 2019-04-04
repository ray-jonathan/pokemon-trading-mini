const pgp = require('pg-promise')();

const options = {
    host: 'localhost',
    database: 'pokemon-app'
};

const db = pgp(options);
module.exports = db;