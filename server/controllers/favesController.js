const db = require('../models/userModel');

const favesController = {};

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

module.exports = favesController;