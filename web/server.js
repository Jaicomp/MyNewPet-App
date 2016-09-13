var express = require('express');

var settings = require('./settings');

var app = express();

//Public assets
app.use('/public', express.static(__dirname + '/public'));

//View engine
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', function(req, res) {
	res.render('index');
});

app.all(function(req, res){
	console.log("OKI");

});

app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});
