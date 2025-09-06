const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.get('/language', languageController.getLanguagePhrase);
router.get('/languages/all', languageController.getAllLanguagesPhrases);

module.exports = router;
