const express = require('express');
const router = express.Router();
const factController = require('../controllers/factController');

router.get('/fact/:category', factController.getFact);
router.get('/facts/all', factController.getAllCategoriesFacts);

module.exports = router;
