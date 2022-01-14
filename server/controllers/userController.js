const db = require('../models/userModel');
const { hashPassword, comparePassword } = require('../encryption');

const userController = {};

userController.login = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    console.log('incomplete login fields');
    res.locals.isMatch = false;
    return next();
  }
  
  const query = 'SELECT * FROM users u WHERE email = $1';
  const params = [email];
  try {
    const userPassword = await db.query(query, params);
    // const isMatch = await comparePassword(
    //   password,
    //   userPassword.rows[0].password
    // );
    
    //just using this until signup is setup
    if(password === userPassword.rows[0].password){
      res.locals.isMatch = true;
    }
    else res.locals.isMatch = false;

    // console.log(userPassword.rows[0].password);
    res.locals.id = userPassword.rows[0]._id;
    
    // res.locals.isMatch = isMatch;
    
  
    return next();
  } catch (err) {
    return next({
      log: `Error with userController.login ${err}`,
      message: {
        err: 'an error occured in the backend',
      },
    });
  }
};

userController.getAllUsers = (req, res, next) => {

  const queryText = 'SELECT * FROM users'

  db.query(queryText, (err, result) => {
    if(!result){
      return next({
        log: 'userController.getAllUsers: ERROR: Error getting users',
        message: {
          err: 'Error occurred in userController.getAllUsers. Check server logs for more details.',
        },
      });
    }

    res.locals.users = result.rows;
    return next();
  });
};

module.exports = userController;
