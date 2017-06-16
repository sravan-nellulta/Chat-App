var mongoose = require('mongoose');
var express = require('express');
var schema = mongoose.Schema;
var file = new schema(
{
	image : {type : String}
	
}
);
module.exports = mongoose.model('fileUpload',file);