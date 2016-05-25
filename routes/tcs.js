var express = require('express');
var router = express.Router();

/* get bootstrap examples */
// router.get('/', function(req,res,next){
// 	res.render('tcsweb/index');
// });
router.get('/', function(req,res,next){
	res.render('tcsweb/index', { title: 'SCshop'});
});
router.get('/login', function(req,res,next){
	res.render('tcsweb/login', { title: 'SCshop login'});
});
router.get('/logon', function(req,res,next){
	res.render('tcsweb/logon', { title: 'SCshop best online shopping'});
});
router.get('/products/relate1', function(req,res,next){
	res.render('tcsweb/relate1', { title: '1st item'});
});
router.get('/account', function(req,res,next){
	res.render('tcsweb/account', { title: 'Account'});
});
router.get('/account/orders', function(req,res,next){
	res.render('tcsweb/orders', { title: 'Orders'});
});
router.get('/account/orders/orderdetail', function(req,res,next){
	res.render('tcsweb/orderdetail', { title: 'Order Detail'});
});
router.get('/account/orders/orderdetail/trackpackage', function(req,res,next){
	res.render('tcsweb/trackpackage', { title: 'Track Package'});
});
router.get('/account/reviewpurchases', function(req,res,next){
	res.render('tcsweb/reviewpurchases', { title: 'Review your purchases'});
});

//PaaS
router.get('/account/support/ticketentry', function(req,res,next){
	res.render('tcsweb/ticketentry', { title: 'Raise Your Ticket'});
});
router.get('/account/payment', function(req,res,next){
	res.render('tcsweb/payment', { title: 'Manage Payment'});
});
module.exports = router;
