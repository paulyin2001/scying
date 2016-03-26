var express = require('express');
var router = express.Router();

/* get bootstrap examples */
router.get('/starter-Template', function(req,res,next){
	res.render('starterTemplate');
});

router.get('/theme', function(req,res,next){
	res.render('theme');
});

module.exports = router;
