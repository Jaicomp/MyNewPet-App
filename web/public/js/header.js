
function showLogin(login) {
	document.getElementById('login').style.display = "block";
}

window.onclick = function(event) {
	var login = document.getElementById('login');
	if (event.target == login) {
		login.style.display = "none";
	}
}



