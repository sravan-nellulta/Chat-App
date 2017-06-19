var mongoose = require('mongoose');
var express = require('express');
var schema = mongoose.Schema;
var register = new schema(
{
	number : {type : Number},
	email :{type: String},
	otp :{type: Number}

}
);
module.exports = mongoose.model('registration',register);