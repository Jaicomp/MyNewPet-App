var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.getList = function(req, res, typeAnimal, filename) {

	db.executeSQL ('SELECT "id", "name" FROM "TypeAnimal"', function (err, data){

		var typeAnimalFounded = false;

		if (err) {
			console.log("ERROR: " + err);
			httpMsgs.send500Error(res);
		}

		for (var i in data) {
			if (data[i].name == typeAnimal) {
				typeAnimalFounded = true;

				db.executeSQL ('SELECT "name" FROM "Bleed"', function (err, data){

					if (err) {
						console.log("ERROR: " + err);
						httpMsgs.send500Error(res);
					}
					console.log(data);
					

					httpMsgs.renderFile(res, filename);

				});
			}

		}
		if (!typeAnimalFounded) {
			httpMsgs.send404Error(res);
		}
	});

};
