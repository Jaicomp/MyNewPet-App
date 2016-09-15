var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.getList = function(req, res, filename) {

	db.executeSQL ('SELECT * FROM "Bleed"', function (err, data){
		if (err){
			console.log("ERROR");
			//TODO Send error 500
		}
		console.log(data);
	});

};
