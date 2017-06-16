var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser =  require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var file = require('./routeApi/fileUploadApi');
var register = require('./routeApi/registerApi');
app.use('/fileUploadImage',file);
app.use('/register',register);
app.get('/about', function (req, res) {
  res.send('Helloooo World!')
});
app.get('*', function (req, res) {

  res.sendFile(__dirname+"/public/index.html");
});
var db = mongoose.connection;
db.once('open',function(){
  console.log('database connected');
});
mongoose.connect('mongodb://localhost/project');
app.listen(3500, function () {
  console.log('Example app listening on port 3500!');
});

