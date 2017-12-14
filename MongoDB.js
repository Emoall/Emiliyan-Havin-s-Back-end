var mongoose = require('mongoose');

exports.connect = function(conData, callback){
	
	var con = mongoose.createConnection({
		  host: conData.host,
		  user: conData.user, 
		  password: conData.password, 
		  database: conData.database
		});
	con.connect(function(err) {
		if (err) callback(err);
		callback(null, con);
	});
};

exports.createTables = function (conData, callback){
	
	var con = mongoose.createConnection({
		  multipleStatements:true,
		  host: conData.host,
		  user: conData.user, 
		  password: conData.password, 
		  database: conData.database
		});
		
	var sql = "CREATE TABLE Users (ID INT NOT NULL AUTO_INCREMENT, username VARCHAR(32), password VARCHAR(16), nationality VARCHAR(32), email VARCHAR(32), PRIMARY KEY (ID))";
	
	sql += ";" + "CREATE TABLE Blogs (ID INT NOT NULL AUTO_INCREMENT, title VARCHAR(256), authorID int , body LONGTEXT, createdDate DATE, photo VARCHAR(1024), PRIMARY KEY (ID) )";
	
	con.query(sql, function (err, result) {
		callback(err, result);
	});
	
};