function getText(textInput) {

	var cards = document.getElementsByClassName('card');
	if (textInput.value.length == 0) {
		console.log("OKI");
		for (var i = 0; i < cards.length; i++) {
			cards[i].style.display = "block";
		}
		return;
	}

	for (var i = 0; i < cards.length; i++) {
		if (!(cards[i].childNodes[1].childNodes[0].innerHTML == textInput.value)) {
			cards[i].style.display = "none";

		} else {
			cards[i].style.display = "block";
		}
		
	}

}















