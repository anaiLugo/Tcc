// conexionBD.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://vivemas_owner:CXNO0mfY6vGL@ep-jolly-hill-a5v062f9.us-east-2.aws.neon.tech/vivemas?sslmode=require',
});

module.exports = pool;

