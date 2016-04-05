//This file is used to deinfe Mongoose schema
var mongoose = require( 'mongoose' );

var quotesSchema = new mongoose.Schema({
	quote: {type: String, required: true},
	author: {type: String, required: true},
	category: {type: String, required: true}
});

//build a model of our location schema. Compile the schema into model
mongoose.model('Quotes', quotesSchema);