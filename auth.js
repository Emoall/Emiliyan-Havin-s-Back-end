'use strict'

var mongoose = require('./MongoDB');

exports.loginUser = (conData, request, callback) => {
	
	if (request.authorization === undefined || request.authorization.basic === undefined)
		throw new Error('authorization header missing')
	
	const auth = request.authorization.basic

	if (auth.username === undefined || auth.password === undefined)
		throw new Error('missing username and/or password')
	
	mongoose.connect(conData, function(err, data){
		
		//when done check for any error
		if (err) {
			callback(err);
			return;
		}	
		
		//perform the query
		data.query('SELECT username FROM users WHERE username="' + auth.username + '" AND password="' + auth.password + '"', function (err, result) {
			
			if(err){
				callback(err);
				return;
			}
			
			//return control to the calling module
			if(result && result.length > 0)
				callback(null, {login:"success"});
			else
				callback(null, {login:"fail"});
		});
	});
}