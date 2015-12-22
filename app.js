var mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	express = require('express'),
	multer = require('multer'),
	path = require('path'),
	app = express(),

	schemas = require(process.cwd() + '\\Database\\UserSchemas.js'),
	appConfig = require(process.cwd() + '\\AppConfig.js'),
	uploadStudentData = require(process.cwd() + '\\Services\\UploadStudentDataService.js'),
	publicRoutes = require(process.cwd() + '\\Routes\\PublicRoutes.js'),
	privateRoutes = require(process.cwd() + '\\Routes\\PrivateRoutes.js');


app.set('superSecret', appConfig.secret)


app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(multer({
	dest: './uploads/'
}).array('file'));


app.use('/public', publicRoutes.Router)
app.use('/private', privateRoutes.Router)

app.get('/', function(req, res) {
	res.sendFile(path.join(process.cwd() + '\\View\\CollegeLogin.html'))
})

app.post('/file_upload', uploadStudentData.Uploader)

schemas.db.on('error', console.error.bind(console, 'connection error:'));
schemas.db.once('open', function() {
	var server = app.listen(8082, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
		}
	})
});