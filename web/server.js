var express = require('express');
var pgp = require('pg-promise')();
var helper = require('sendgrid').mail;

var settings = require('./settings');
var db = require('./core/db');
var typeAnimal = require('./controllers/typeanimal');
var bleed = require('./controllers/bleed');

var app = express();
var helper = require('sendgrid').mail;

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

	if ((req.query.email.length> 0) && /[a-zA-Z0-9!@]*@[a-zA-Z0-9!@]*/.test(req.query.email)) {
		var from_email = new helper.Email('NuevaCuenta@MyNewPet.es');
		var to_email = new helper.Email(req.query.email);
		var subject = 'Bienvenido a MyNewPet!!';
		var content = new helper.Content('text/plain', 'Bienvenido a MyNewPet!!\nBienvenido a tu nueva cuenta. Registrarte es muy fácil, solo tienes que introducir el siguiente código:');
		var mail = new helper.Mail(from_email, subject, to_email, content);

		var sg = require('sendgrid')('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');
		var request = sg.emptyRequest({
  		method: 'POST',
  		path: '/v3/mail/send',
  		body: mail.toJSON(),
		});

		sg.API(request, function(error, response) {
			if (error) {
				console.log (error);
			}
  		console.log(response.statusCode);
  		console.log(response.body);
  		console.log(response.headers);
		});
		res.send(req.query.email);
	}

	res.send('FAIL');
});


app.listen(settings.WEBPORT,  function() {
	console.log("Connected to port: " + settings.WEBPORT);
});
