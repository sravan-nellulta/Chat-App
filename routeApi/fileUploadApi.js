var express = require('express');
var multer  = require('multer');
var app = express.Router();
var path = require('path');
var fs = require('fs');
var upload = multer({ dest: 'uploads/' });
var imageUpload = require('../routeSchema/fileUploadSchema');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + '.png'); //Appending .jpg
  }
});
var upload = multer({ storage: storage , limits : {fileSize : 10000000} });
/*app.post('/imageUpload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      res.json(err);
    }
    else{

      res.json({success:true,message :'uploaded successfully'})
    }

    // Everything went fine
  })
});*/
app.post('/imageUpload', upload.single('fileUpload'), function (req, res, next) {
  fs.rename("uploads/" + req.file.filename, "uploads/" + req.file.filename,  function (imageError) {
    if (imageError) {
      console.trace(imageError);
      return;
    }
	
  else{
	  imageUpload.find({image :  req.file.filename},function(err,data){
	  if(err){
		  res.json(err);
		  
	  }
	  else if(data){
		  data.update({image :  req.file.filename},{$set:req.file.filename},function(err,response){
			            if(err){

              console.trace(err);
              res.json(err);
          }
            else{

              res.json({data:response,succcess :true})
          }
			  
		  }
		  )
	  }
	  else{
			  var data = new imageUpload(
	  {
		 image :  req.file.filename
	  });
	  data.save();
	  
		res.json({success :true, message: "res",image:req.file.filename});  
  }})
	 }
  });
});

module.exports = app;