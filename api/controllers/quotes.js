var mongoose = require('mongoose');		//give controllers access to db
var Quotes = mongoose.model('Quotes');	//bring in Location model

module.exports.quotesAll = function(req,res){
	console.log('call quotesAll');
	Quotes.find().exec(function(err, returnQuotes){
		if(err){
			res.status(404);
			res.json(err);
		}
		res.status(200);
		res.json(returnQuotes);
	});
};

module.exports.quoteCreate = function(req,res){
	console.log('call quoteCreate');
	// Loc.create({																		//use Mongoose create method
	// 	name: req.body.name,
	// 	address: req.body.address,
	// 	//no rating, because default is set in schema
	// 	facilities: req.body.facilities.split(","),		//create array with split. Need validation or required, otherwise undefined.split will cause error
	// 	coords:[parseFloat(req.body.lng),parseFloat(req.body.lat)],	//need validation or required, otherise parse will cause error
	// 	openingTimes:[{
	// 		days: req.body.days1,
	// 		opening: req.body.opening1,
	// 		closing:req.body.closing1,
	// 		closed: req.body.closed1
	// 	},{
	// 		days: req.body.days2,
	// 		opening: req.body.opening2,
	// 		closing: req.body.closing2,
	// 		closed: req.body.closed2
	// 	}]
	// }, function(err,location){
	// 	if(err){
	// 		console.log('name: '+req.body.name);
	// 		console.log('address: '+req.body.address);
	// 		console.log('facilities: '+req.body.facilities.split(","));
	// 		console.log('coords: '+[parseFloat(req.body.lng),parseFloat(req.body.lat)]);
	// 		sendJsonResponse(res,400,err);
	// 	}else{
	// 		sendJsonResponse(res,201,location);
	// 	}
	// });	//validation will be done in schema
};


var sendJsonResponse = function(res, status, content){
	res.status(status);		//send response status code
	res.json(content);		//send response JSON data
};