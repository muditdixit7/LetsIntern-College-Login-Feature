var exports = module.exports = {}
var jwt = require('jsonwebtoken')
var Cookies = require('cookies')

var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')


exports.login = function(request, response) {

	dbInterface.authenticate(request, response, callback)

}

var callback = function(err, request, response, result) {

	if (err) {
		response.send('Login Failed please try again')
		console.log(err)
	} else {
		var cookies = new Cookies(request, response)

		result.password = null
		var token = jwt.sign(result, appConfig.secret, {
			expiresIn: 3660
		});

		cookies.set('authentication_token', token)
		response.send('Login successfull')
		console.log(result)

	}
}