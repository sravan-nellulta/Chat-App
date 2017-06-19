var mongoose = require('mongoose');
var express = require('express');
var jwt = require('jsonwebtoken');
var registerSchema = require('../routeSchema/registerSchema');
var api = express.Router();
function CreateToken(user) {
	return jwt.sign({
		id: user._id.toString(),
		mobileNumber: user.number,
		email: user.email

	}, "asdfdsf")
}

api.post('/save',function(req,res){
	if(req.body.otp){
		registerSchema.findOne({otp:req.body.otp},function(err,data){
			if(err){
				res.json(err);
			}
			else{
				var token = CreateToken(data);
				res.json({success:true,data:data,token:token})
			}

		})

	}
	else {
		var otp = randomNumber(999, 10000);
		console.log(otp);
		var register = new registerSchema(
				{
					email: req.body.email,
					number: req.body.number,
					otp: otp
				});
		register.save('/save', function (err) {
			if (err) {
				res.send(err);
			}
			else {

				res.json({success: true})
			}
		});
	}

});

function randomNumber(min,max){

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = api;
