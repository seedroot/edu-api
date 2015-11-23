var express = require('express');
var router = express.Router();

router.route('/')
	.get(function(req, res) {
		res.send('Welcome to edu-duniya api server');
	});

require('./institute')(router);

module.exports = router;