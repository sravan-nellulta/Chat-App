var mongoose = require('mongoose');
var express = require('express');
var schema = mongoose.Schema;
var register = new schema(
{
	email : {type : String},
	password :{type: String}
	
}
);
module.exports = mongoose.model('registration',register);