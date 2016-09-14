var db = require('../core/db');

console.log(db);
exports.getList = function(req, res, filename) {

	db.executeSQL ('SELECT * FROM "TypeAnimal"', function (err, data){
		if (err){
			console.log("ERROR");
			//TODO Send error 500
		}

		console.log(data);
		httpMsgs
		
	});


};
