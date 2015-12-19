var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var express = require('express')
var app = express();
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')


var publicRoutes = require(process.cwd() + '\\Routes\\PublicRoutes.js')
var privateRoutes = require(process.cwd() + '\\Routes\\PrivateRoutes.js')


app.set('superSecret', appConfig.secret);

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/public', publicRoutes.Router)
app.use('/private', privateRoutes.Router)

app.get('/', function(req, res) {
	res.send(process.cwd() + '\\View\\CollegeLogin.html')
})

schemas.db.on('error', console.error.bind(console, 'connection error:'));
schemas.db.once('open', function() {
	var server = app.listen(8089, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
		}
	})
});