var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var router = require('./routes/users');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// Register routes
app.use('/', router);

// Define the port to run on
app.set('port', 2000);


app.get('/profile', function(req, res) {
    res.render('profile');
});


app.get('/demo', function(req, res) {
    res.render('demo');
})


app.use(express.static(path.join(__dirname, 'public')));
/*
app.get("/demo", function (req, res) {
	res.sendFile('demo.ejs', { root: path.join(__dirname, './public') });

});
*/


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
