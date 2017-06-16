var mongoose = require('mongoose');
var express = require('express');
var registerSchema = require('../routeSchema/registerSchema');
var api = express.Router();
api.post('/save',function(req,res){
	console.log(req.body);
	var register = new registerSchema(
			{
				email : req.body.email,
				password : req.body.password

			});
	register.save('/save',function(err)
	{
		if(err)
		{
			res.send(err);
		}
		else{

			res.json({success:true})
		}
	});

});
module.exports = api;
