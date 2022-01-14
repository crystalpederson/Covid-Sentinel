const express = require('express');
const favesController = require('../controllers/favesController');

const router = express.Router();
const { getFaves } = favesController;

router.get('/:id', getFaves, (req, res) => {
  return res.status(200).json(res.locals.favesList);
});

module.exports = router;