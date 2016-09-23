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

				db.executeSQL ('SELECT "Bleed"."name", "Bleed"."urlimage", "Bleed"."needpermission" FROM "Bleed" INNER JOIN "TypeAnimal" ON ("TypeAnimal".id="Bleed".idtypeanimal AND "TypeAnimal"."name" = \''+typeAnimal+'\')', function (err, data){

					if (err) {
						console.log("ERROR: " + err);
						httpMsgs.send500Error(res);
					}
					console.log(data);			
					var dataContainer = {};
					dataContainer.data = {};
					for (var i in data) {
						dataContainer.data["data"+i] = {name: data[i].name, needPermission: data[i].needpermission, urlimage: data[i].urlimage};
					}
					console.log(dataContainer);
					httpMsgs.renderFile(res, filename, dataContainer);

				});
			}

		}
		if (!typeAnimalFounded) {
			httpMsgs.send404Error(res);
		}
	});

};
