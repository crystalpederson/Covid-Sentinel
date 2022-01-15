const { Pool } = require('pg');

<<<<<<< HEAD
require('dotenv').config();

const PG_URI= `postgres://arrxyndw:dTHlZX94GyUDdBQhMMkMlx3tp-P3eLQx@kashin.db.elephantsql.com/arrxyndw`
=======
const PG_URI= `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@kashin.db.elephantsql.com/${process.env.PG_USERNAME}`
>>>>>>> dev

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};