var mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	express = require('express'),
	path = require('path'),
	app = express(),
	Cookies = require('cookies'),
	exports = module.exports = {},


	appConfig = require(process.cwd() + '\\AppConfig.js'),
	publicRoutes = require(process.cwd() + '\\Routes\\PublicRoutes.js'),
	privateRoutes = require(process.cwd() + '\\Routes\\PrivateRoutes.js');

console.log(appConfig.dbUrl)
mongoose.connect(appConfig.dbUrl)
exports.db = mongoose.connection



app.set('superSecret', appConfig.secret)


app.use(bodyParser.urlencoded({
	extended: false
}))



app.use('/public', publicRoutes.Router)
app.use('/private', privateRoutes.Router)


app.all('/private', function() {

	exports.Router.use(function(req, res, next) {
		if (!req.decoded) {
			var cookies = new Cookies(req, res)
			var token = cookies.get('authentication_token')
			if (token) {
				jwt.verify(token, appConfig.secret, function(err, decoded) {
					if (err) {
						res.json({
							success: false,
							message: 'Authentication failed'
						})
						res.end()
					} else {
						req.decoded = decoded
						next()
					}
				})
			} else {
				res.json({
					success: false,
					message: 'Authentication failed'
				})
				res.end()
			}
		}
	})
})

app.get('/', function(req, res) {
	res.sendFile(path.join(process.cwd() + '\\View\\CollegeLogin.html'))
})


exports.db.on('error', console.error.bind(console, 'connection error:'));

exports.db.once('open', function() {

	var server = app.listen(8086, function(err) {
		if (err) throw err
		else {
			var host = server.address().address
			var port = server.address().port
			console.log("Server runnig at http:\\%s:%s", host, port)
		}
	})
});