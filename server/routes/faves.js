const express = require('express');
const favesController = require('../controllers/favesController');

const router = express.Router();
const { getFaves, addFaves } = favesController;

router.get('/:id', getFaves, (req, res) => {
  return res.status(200).json(res.locals.favesList);
});

router.post('/:id', addFaves, (req, res) => {
  return res.status(200).json(res.locals.addedFave);
});

module.exports = router;