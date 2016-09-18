var request = require('request')
	, cheerio = require('cheerio');

request('http://miperroesunico.com/content/razas-de-perros', function(error, response, html) {
	var dogs = {};
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		$('body#cms #wrapper1b #wrapper2b #wrapper3b .tail-contentb #columns #center_column .rte table tbody tr').each (function (i, element) {

				var dog = {};
				var dogInfo = $(this).children('td').children('a');

				if (dogInfo.children('img').attr('src') !== 'undefined') {
					dog.image = dogInfo.children('img').attr('src'); 
					dog.name = dogInfo.children('img').attr('alt').slice(0, dogInfo.children('img').attr('alt').indexOf('-'));
						
					console.log(dog.name);
				}

				//console.log($(this).children('td').children('a').children('img').attr('src'));
		
		});



	};
});
