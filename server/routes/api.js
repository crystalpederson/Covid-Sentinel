const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
const { login } = userController;

router.post('/login', login, (req, res)=>{
  return res.status(200).json({isMatch: res.locals.isMatch});
}); 

router.get('/users',
  userController.getAllUsers,
  (req, res) => res.status(200).json(res.locals.users)
);

module.exports = router;
