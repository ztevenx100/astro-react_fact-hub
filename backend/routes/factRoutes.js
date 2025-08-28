const express = require('express');
const router = express.Router();
const factController = require('../controllers/factController');

router.get('/fact/:category', factController.getFact);

module.exports = router;
