
function showLogin(login) {
	document.getElementById('login').style.display = "block";
	document.getElementById('loginContent').style.display = "block";
	document.getElementById('signUpSection').style.display = "none";

}

function signUpContent() {
	document.getElementById('loginContent').style.display = "none";
	document.getElementById('signUpSection').style.display = "block";

}

function sendEmailSignUp() {
	var email = document.getElementById("emailRegister");
	if (email.value.length > 0) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					window.alert(this.responseText);
				}
		}
		xmlhttp.open("GET", "sendemail", true);
		xmlhttp.send();
	} else {
		window.alert("Correo electrónico no válido, vuelvalo a intentar.");
	}
}

window.onclick = function(event) {
	var login = document.getElementById('login');
	if (event.target == login) {
		login.style.display = "none";
	}
}




