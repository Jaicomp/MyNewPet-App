var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.newUser = function(res, email, code) {

	db.executeSQL ("SELECT id FROM \"Rank\" WHERE type='User'", function (err, data){

		if (err) {
			console.log("ERROR");
			httpMsgs.send500Error(res);
		}

		db.executeSQL ("INSERT INTO \"User\"(accountenabled, email, codeemail, idrank) VALUES ('false','"+email+"','"+code+"', "+data[0].id+")", function (err, data){
			if (err){
				console.log("ERROR");
				httpMsgs.send500Error(res);
			}
		});

	});


};
