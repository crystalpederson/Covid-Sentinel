const { Pool } = require('pg');

const PG_URI= `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@kashin.db.elephantsql.com/${process.env.PG_USERNAME}`

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};