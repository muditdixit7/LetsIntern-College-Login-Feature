var express = require('express')
var app = express();
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var services = require(process.cwd() + '\\RegisterService.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({
	extended: false
}));



app.post('/public/CollegeRegistration', services.RegisterCollege)


schemas.db.on('error', console.error.bind(console, 'connection error:'));

schemas.db.once('open', function() {

	var server = app.listen(8087, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
			app.get('/', function(request, response) {
				response.send('hello')
			})
		}
	})
});