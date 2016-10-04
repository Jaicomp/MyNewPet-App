function filterCards(textInput) {

	var cards = document.getElementsByClassName('card');
	if (textInput.value.length == 0) {
		for (var i = 0; i < cards.length; i++) {
			cards[i].style.display = "block";
		}
		return;
	}

	for (var i = 0; i < cards.length; i++) {
		if (!(new RegExp(textInput.value.toLowerCase()).test(cards[i].childNodes[1].childNodes[0].innerHTML))) {
			cards[i].style.display = "none";

		} else {
			cards[i].style.display = "block";
		}
		
	}

}















