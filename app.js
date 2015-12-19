var express = require('express')
var app = express();
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var registerService = require(process.cwd() + '\\Services\\RegisterService.js')
var loginService = require(process.cwd() + '\\Services\\LoginService.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(express.static('View'))

app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', function(req, res) {
	res.send(process.cwd() + '\\View\\CollegeLogin.html')
})

app.post('/CollegeRegistration', registerService.registerCollege)
app.post('/public/Login', loginService.login)

schemas.db.on('error', console.error.bind(console, 'connection error:'));
schemas.db.once('open', function() {
	var server = app.listen(8088, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
		}
	})
});