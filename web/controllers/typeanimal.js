var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.getList = function(res, filename) {

	db.executeSQL ('SELECT "name", "urlimage" FROM "TypeAnimal"', function (err, data){
		if (err) {
			console.log("ERROR: " + err);
			httpMsgs.send500Error(res);
		}
		
		var dataContainer = {};
		dataContainer.data = {};
		for (var i in data) {
			dataContainer.data["data"+i] = {name: data[i].name, urlimage: data[i].urlimage};
		}
		httpMsgs.renderFile(res, filename, dataContainer);		

	});


};
