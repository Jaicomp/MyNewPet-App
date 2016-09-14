var express = require('express');
var pgp = require('pg-promise')();

var settings = require('./settings');

var app = express();


var db = pgp('postgres://root:123@localhost:5432/MyNewPet');
var x = db.query('select * from "TypeAnimal"')
	.then(function(){
		console.log("OKI");
	}).catch(function (error) {
		console.log(error + "");
	});


console.log(x);

//Public assets
app.use('/public', express.static(__dirname + '/public'));

//View engine
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', function(req, res, next) {
	res.render('index');
});

app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});
