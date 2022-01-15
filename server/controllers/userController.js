const db = require('../models/userModel');
const { hashPassword, comparePassword } = require('../encryption');

const userController = {};

userController.signup = async (req, res, next) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password 
  
  ) {
    console.log('Incomplete signup fields');
    return next();
  } else {
    const { first_name, last_name, email, password } = req.body;

    try {
      console.log(req.body);

      const password = await hashPassword(req.body.password);

      const params = [
        first_name,
        last_name,
        email,
        password
      ];

      const text =
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;';

      db.query(text, params)
        .then((data) => {
          console.log(data);
          res.locals.user = data.rows[0];
          return next();
        })
        .catch((err) => {
          console.log('Error in userController.signup');
          next({
            log: `ERROR in userController.signup: ${err}`,
          });
        });
    } catch (err) {
      console.log(err);
      next({
        log: `ERROR hashing password in userController.signup: ${err}`,
      });
    }
  }
};

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
    const isMatch = await comparePassword(
      password,
      userPassword.rows[0].password
    );
    
    res.locals.id = userPassword.rows[0]._id;
    res.locals.isMatch = isMatch;
  
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

  const queryText = 'SELECT * FROM users';

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
