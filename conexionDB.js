// conexionBD.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://Click%20Store_owner:q5GO1Uvhargz@ep-bold-hat-a51fyxuq.us-east-2.aws.neon.tech/Click%20Store?sslmode=require',
});

module.exports = pool;

