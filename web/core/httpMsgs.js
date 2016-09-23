//TODO Type of http message (HTML, JSON, XML, etc)
var settings = require('../settings');

exports.renderFile = function(res, filename, data) {
	res.render(filename, data);
};

exports.renderFile = function(res, filename) {
	res.render(filename);
};

exports.send500Error = function (res) {
	res.status(500);
	res.render('500Error');	

};


exports.send404Error = function (res) {
	res.status(404);
	res.render('404Error');
};

