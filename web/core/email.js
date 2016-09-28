var helper = require('sendgrid').mail;

exports.sendEmailSignUp = function(emailTo, code) {

	var from_email = new helper.Email('NuevaCuenta@MyNewPet.es');
	var to_email = new helper.Email(emailTo);
	var subject = 'Bienvenido a MyNewPet!!';
	var content = new helper.Content('text/plain', 'Bienvenido a MyNewPet!!\nBienvenido a tu nueva cuenta. Registrarte es muy fácil, solo tienes que introducir el siguiente código: ' + code);
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
}
