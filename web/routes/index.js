var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.end('oki');
});

module.exports = router;









