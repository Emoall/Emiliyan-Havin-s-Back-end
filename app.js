var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect ('mongodb://localhost/extinct animals');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/extinct animals');
});

app.listen(3000);
console.log('SRunning on port 3000...');
