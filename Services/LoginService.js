var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var Q = require('q')

exports.login = function(request, response) {

	var College = new shcemas.College({
		emailId: request.body.emailId,
		password: request.body.password,
	})

	Q.fcall(dbInterface.authenticate(College))
		.then(setToken, returnError)

	var setToken = function() {
		response.send('success')
	}

	var returnError = function() {
		response.send('Login failed.Please try again')
	}

}