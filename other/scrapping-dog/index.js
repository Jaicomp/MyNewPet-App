var request = require('request')
	, cheerio = require('cheerio')
	, fs = require('fs');

request('http://miperroesunico.com/content/razas-de-perros', function(error, response, html) {
	var dogs = [];
	var index = 0;
	
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		$('body#cms #wrapper1b #wrapper2b #wrapper3b .tail-contentb #columns #center_column .rte table tbody tr').each (function (i, element) {

				var dog = {};
				var dogInfo = $(this).children('td').children('a').children('img');

				if (dogInfo.children('img').attr('src') !== 'string') {
					if ((typeof  dogInfo.attr('alt')) == 'string'){
						
						dog.image = dogInfo.attr('src').slice(dogInfo.attr('src').lastIndexOf('/') + 1); 
						dog.name = dogInfo.attr('alt').slice(0, dogInfo.attr('alt').indexOf(' -'));
						dogs[index] = dog;
						index++;
					}
				}
		});
		fs.writeFile('dogs.json', JSON.stringify(dogs), {encoding: 'utf8', flag: 'w'});
		console.log(dogs);
	};
});
