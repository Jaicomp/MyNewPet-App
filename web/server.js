var express = require('express');
var pgp = require('pg-promise')();
var helper = require('sendgrid').mail;
var validator = require('validator');

var settings = require('./settings');
var db = require('./core/db');
var email = require('./core/email');
var typeAnimal = require('./controllers/typeanimal');
var bleed = require('./controllers/bleed');
var user = require('./controllers/user');

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
		bleed.getList(req, res, req.query.typeanimal, 'bleed');
});

app.get('/sendemail', function(req, res) {
	if ((typeof req.query.email === 'string') && (req.query.email.length> 5) && validator.isEmail(req.query.email)) {

		var codeSignUp = createCodeOf12Characters();

		email.sendEmailSignUp(req.query.email, codeSignUp);
		user.newUser(res, req.query.email, codeSignUp);

		res.send(req.query.email);
	} else {
		res.send('FAIL');
	}
});


app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});


function createCodeOf12Characters() {
		var charactersCode = [];
		var code = '';
		for (var i = 48; i < 58; i++) {
			charactersCode.push(String.fromCharCode(i));
		}

		for (var i = 65; i < 91; i++) {
			charactersCode.push(String.fromCharCode(i));
		}
	
		for (var i = 97; i < 123; i++) {
			charactersCode.push(String.fromCharCode(i));
		}

		for(var i = 0; i < 12; i++) {
			code += charactersCode[Math.floor(Math.random()*charactersCode.length)];
		}

		return code;
}





