var mongoose = require('mongoose');

//connect with db
mongoose.connect('mongodb://localhost/eduduniya');

var db = mongoose.connection;
db.on('error', function(err) {
	console.log('error while connecting to DB');
});
db.once('open', function (callback) {
  console.log('connection established');
});