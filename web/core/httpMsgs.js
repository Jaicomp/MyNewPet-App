//TODO Type of http message (HTML, JSON, XML, etc)
var settings = require('../settings');

exports.renderFile = function(res, filename) {
	res.render(filename);
};

exports.send500 = function (req, res) {

	

};



