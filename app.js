var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var express = require('express')
var multer = require('multer');
var path = require('path')
var app = express();

var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var uploadStudentData = require(process.cwd() + '\\Services\\UploadStudentDataService.js')
var publicRoutes = require(process.cwd() + '\\Routes\\PublicRoutes.js')
var privateRoutes = require(process.cwd() + '\\Routes\\PrivateRoutes.js')

console.log('app mei', appConfig.secret)
app.set('superSecret', appConfig.secret)

console.log(multer)


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(multer({
	dest: './uploads/'
}))

app.use('/public', publicRoutes.Router)
app.use('/private', privateRoutes.Router)

app.get('/', function(req, res) {
	res.sendFile(path.join(process.cwd() + '\\View\\CollegeLogin.html'))
})

app.post('/file_upload', uploadStudentData.Uploader)

schemas.db.on('error', console.error.bind(console, 'connection error:'));
schemas.db.once('open', function() {
	var server = app.listen(8087, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
		}
	})
});