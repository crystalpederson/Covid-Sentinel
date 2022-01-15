const { Pool } = require('pg');

require('dotenv').config();

const PG_URI= `postgres://arrxyndw:dTHlZX94GyUDdBQhMMkMlx3tp-P3eLQx@kashin.db.elephantsql.com/arrxyndw`

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};