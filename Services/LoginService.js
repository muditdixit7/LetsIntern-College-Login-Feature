var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')

exports.RegisterCollege = function(request, response) {

	var College = new shcemas.College({
		emailId: request.body.emailId,
		password: request.body.password,
	})

	dbInterface.authenticate(College)
}