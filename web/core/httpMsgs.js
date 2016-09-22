//TODO Type of http message (HTML, JSON, XML, etc)
var settings = require('../settings');

exports.renderFile = function(res, filename, data) {
	res.render(filename, data);
};

exports.send500Error = function (res) {

	res.render('500Error');	

};



