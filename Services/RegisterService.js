var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')

exports.RegisterCollege = function(request, response) {

	var Colleges = new shcemas.College({
		emailId: request.body.emailId,
		password: request.body.password,
		name: request.body.collegeName,
		Address: {
			street: request.body.street,
			city: request.body.city,
			pinCode: request.body.pinCode
		}
	})

	dbInterface.saveCollege(Colleges)
}