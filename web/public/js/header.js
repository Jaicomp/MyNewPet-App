
function showLogin(login) {
	document.getElementById('login').style.display = "block";
	document.getElementById('loginContent').style.display = "block";
	document.getElementById('signUpSection').style.display = "none";

}

function signUpContent() {
	document.getElementById('loginContent').style.display = "none";
	document.getElementById('signUpSection').style.display = "block";

}


window.onclick = function(event) {
	var login = document.getElementById('login');
	if (event.target == login) {
		login.style.display = "none";
	}
}




