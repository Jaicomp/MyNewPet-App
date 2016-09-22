var express = require('express');
var pgp = require('pg-promise')();

var settings = require('./settings');
var db = require('./core/db');
var typeAnimal = require('./controllers/typeanimal');
var bleed = require('./controllers/bleed');


var app = express();


//Public assets
app.use('/public', express.static(__dirname + '/public'));

//View engine
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', function(req, res) {
	typeAnimal.getList(res, 'index');
});

app.get('/bleed', function(req, res){
	//TODO Add filename (last parameter)
	bleed.getList(req, res, 'dog', 'bleed');
});


app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});
