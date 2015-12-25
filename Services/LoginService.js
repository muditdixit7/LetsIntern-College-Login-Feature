var exports = module.exports = {},
	jwt = require('jsonwebtoken'),
	Cookies = require('cookies'),
	path = require('path'),

	schemas = require(process.cwd() + '\\Database\\UserSchemas.js'),
	dbInterface = require(process.cwd() + '\\Database\\dbInterface.js'),
	appConfig = require(process.cwd() + '\\AppConfig.js');


exports.login = function(request, response) {

	dbInterface.authenticate(request, response, callback)

}

var callback = function(err, request, response, result) {

	if (err) {
		response.send('Login Failed please try again')
		console.log(err)
	} else {
		var cookies = new Cookies(request, response)

		result.password = ''
		var token = jwt.sign(result, appConfig.secret, {
			expiresIn: 3660
		});

		cookies.set('authentication_token', token)
		response.sendFile(path.join(process.cwd() + '\\View\\UploadStudentData.html'))
		console.log(result)
	}
}