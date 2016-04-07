var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SCYing' });
});
/* GET random quote app. */
router.get('/randomquote', function(req, res, next) {
  res.render('randomquote', { title: 'Random Quotes' });
});
/* GET random quote app. */
router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});


module.exports = router;
