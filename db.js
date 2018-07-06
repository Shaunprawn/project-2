const pg = require('pg');

const config {
    user: 'root',
    host: '127.0.0.1',
    database: 'motors',
    port: '5432'
};

const db = new pg.Pool(config);

module.exports = {
    db: db
};