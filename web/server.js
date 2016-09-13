var express = require('express');

var settings = require('./settings');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use(function(err, req, res, next){
	if (err){
		res.status(404).send('Sorry cant find that!');
	}
});

app.get('/', function(req, res) {
	console.log(settings.WEBPORT);
});

app.all(function(req, res){
	console.log("OKI");

});

app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});
