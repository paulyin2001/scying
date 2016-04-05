var express = require('express');
var router = express.Router();

var ctrlQuotes = require('../controllers/quotes');

/* Locations pages */
router.get('/quotes', ctrlQuotes.quotesAll);		//return all quotes
router.post('/quotes', ctrlQuotes.quoteCreate);		//post 1 quote
module.exports = router;
