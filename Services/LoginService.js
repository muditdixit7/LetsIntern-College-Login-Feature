var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var Q = require('q')

exports.login = function(request, response) {

	dbInterface.authenticate(request, response, callback)

}

var callback = function(err, request, response, result) {

	if (err) {
		response.send('Login Failed please try again')
		console.log(err)
	} else {
		response.send('Login successfull')
		console.log(result)
	}
}