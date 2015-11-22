var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
module.exports = app;

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('X-Powered-By', 'seedroot');
	next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./route')(app);

app.listen(3000);