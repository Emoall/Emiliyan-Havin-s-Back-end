var mongoose = require('mongoose');

// Types Schema
var typesSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_cate:{
		type: Date,
		default: Date.now
	}
});

var Types = module.exports = mongoose.model('Types', typesSchema);

// Get Types
module.exports.getTypes = function(callback, limit){
	Types.find(callback).limit(limit);
}

// Add Types
module.exports.addTypes = function(types, callback){
	Types.create(types, callback);
}

// Update Types
module.exports.updateTypes = function(id, types, options, callback){
	var queary = {_id: id};
	var update = {
		name: types.name
	}
	Types.findOneAndUpdate(queary, update, options, callback);
}

// Delete Types
module.exports.removeTypes = function(id, callback){
	var queary = {_id: id};
	Types.remove(query, callback);
}