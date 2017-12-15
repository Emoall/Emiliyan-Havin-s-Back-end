var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var restify = require('restify');
var user = require('./user');

app.use(bodyParser.json());

Types = require('./models/types');
Animals = require('./models/animals');

const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

//create the restify module
const app = restify.createApp()

app.pre(cors.preflight)
app.use(cors.actual)

// Connect to Mongoose
mongoose.connect ('mongodb://localhost/extinct animals');
var mongoose = mongoose.connection;

var port = 3000;

app.get('/', function(req, res){
	res.send('Please use /api/extinct animals');
});

app.get('/api/types', function(req, res){
	Types.getTypes(function(err, types){
		if(err){
			throw err;
		}
		res.json(types);
	});
});

app.post('/api/types', function(req, res){
	var types = req.body;
	Types.addTypes(types, function(err, type){
		if(err){
			throw err;
		}
		res.json(type);
	});
});

app.put('/api/types/:_id', function(req, res){
	var id = req.params._id;
	var types = req.body;
	Types.updateTypes(id, types, {}, function(err, type){
		if(err){
			throw err;
		}
		res.json(type);
	});
});

app.delete('/api/types/:_id', function(req, res){
	var id = req.params._id;
	Types.removeTypes(id, function(err, types){
		if(err){
			throw err;
		}
		res.json(types);
	});
});


app.post('/api/animals', function(req, res){
	var animals = req.body;
	Types.addAnimals(animals, function(err, animals){
		if(err){
			throw err;
		}
		res.json(animals);
	});	
});

app.get('/api/animals', function(req, res){
	Animals.getAnimals(function(err, types){
		if(err){
			throw err;
		}
		res.json(animals);
	});	
});

app.get('/api/animals/:_id', function(req, res){
	Animals.getAnimalsByID(req.params._id, function(err, type){
		if(err){
			throw err;
		}
		res.json(animals);
	});		
});

app.put('/api/animals/:_id', function(req, res){
	var id = req.params._id;
	var animalss = req.body;
	Animals.updateAnimals(id, animals, {}, function(err, animals){
		if(err){
			throw err;
		}
		res.json(animals);
	});
});

app.delete('/api/animals/:_id', function(req, res){
	var id = req.params._id;
	Animals.removeAnimals(id, function(err, animals){
		if(err){
			throw err;
		}
		res.json(animals);
	});
});

//start the server 
app.listen(port, err => {
	if (err) {
		console.error(err)
	} else {
console.log('SRunning on port 3000...')
	}
});	
