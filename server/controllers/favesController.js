const db = require('../models/userModel');

const favesController = {};

//when given a user id, returns the names of countries that they have favorited
favesController.getFaves = async (req, res, next) => {
  const id = req.params.id;
  const param = [id];

  const query = 'SELECT country_name FROM favorites where user_id = $1';
  try{
    const favesList = await db.query(query, param);
    res.locals.favesList = favesList.rows;
    return next();
  }
  catch(err){
    return next({
      log: `Error in favesController.getFaves: ${err}`,
      message: {
        err: 'Error in the backend from favesController.getFaves'
      }
    });
  }
    
};

//when given a user id and a country, adds the country to the user's favorites list
favesController.addFaves = async (req, res, next) => {
  const { country_name } = req.body;
  const id = req.params.id;
  const params = [id, country_name];

  const query = 'INSERT INTO favorites (country_name, user_id) VALUES ($2, $1)';
  try{
    const fave = await db.query(query, params);

    res.locals.addedFave = country_name;
    return next();
  }
  catch(err){
    return next({
      log: `Error in favesController.addFaves: ${err}`,
      message: {
        err: 'Error in the backend from favesController.addFaves'
      }
    });
  }
    
};

favesController.deleteFaves = async (req, res, next) => {
  const { country_name } = req.body;
  //const id = req.params.id;
  const param = [country_name];

  const text = 'DELETE FROM favorites where country_name = $1';
  try {
    const favesList = db.query(text, param);
    res.locals.favesList = favesList.rows;
    return next();
  }
  catch(err) {
    return next({
      log: `Error in favesController.deleteFaves: ${err}`,
      message: {
        err: 'Error in the backend from favesController.deleteFaves'
      }
    });
  }
};

module.exports = favesController;