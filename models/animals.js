 var mongoose = require('mongoose');

// Animal Schema
var animalSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	type:{
		type:String,
		required: true
	},
	description:{
		type: String,
	},
	image_url:{
		type: String,
	},
	create_cate:{
		type: Date,
		default: Date.now
	}
});

var Animals = module.exports = mongoose.model('Animals', animalsSchema);

// Get Animals
module.exports.getAnimals = function(callback, limit){
	Animals.find(callback).limit(limit);
}

// Get Animal
module.exports.getAnimalsByID = function(id, callback){
	Animals.findById(id,callback);
}

// Add Animal
module.exports.addAnimals = function(animals, callback){
	Animals.create(animals, callback);
}

// Update Animals
module.exports.updateAnimals = function(id, animals, options, callback){
	var queary = {_id: id};
	var update = {
		title: animals.title,
		types: animals.types,
		description: animals.description,
		image_url: animals.image_url,
	}
	Animals.findOneAndUpdate(queary, update, options, callback);
}

// Delete Animals
module.exports.removeAnimals = function(id, callback){
	var queary = {_id: id};
	Animals.remove(query, callback);
}