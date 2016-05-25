var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SCYing' });
});

router.get('/randomquote', function(req, res, next) {
  res.render('randomquote', { title: 'Random Quotes' });
});

router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});

router.get('/wikisearch', function(req, res, next) {
  res.render('wikisearch', { title: 'Wikipedia Search' });
});

router.get('/money', function(req, res, next) {
  res.render('money', { title: 'Money' });
});

router.get('/twitchtv', function(req, res, next) {
  res.render('twitchtvapi', { title: 'Twitch list' });
});

router.get('/calculator', function(req, res, next) {
  res.render('calculator', { title: 'Calculator' });
});

router.get('/pomodoro', function(req, res, next) {
  res.render('pomodoro', { title: 'Pomodoro Clock' });
});

router.get('/tictactoe', function(req, res, next) {
  res.render('tictactoe', { title: 'Tic Tac Toe' });
});

router.get('/simongame', function(req, res, next) {
  res.render('simongame', { title: 'Simon Game' });
});

module.exports = router;
