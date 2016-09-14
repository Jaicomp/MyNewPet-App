var pgp = require('pg-promise')();

var settings = require('../settings');

exports.executeSQL = function(sql, callback){
	
	var db = pgp(settings.connectionString);

	db.query(sql)
	.then(function(data){
		callback(null, data);
	}).catch(function (error) {
		callback(error);
	});

};





