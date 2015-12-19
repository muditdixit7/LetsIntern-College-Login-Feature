var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')

exports.registerCollege = function(request, response) {

	var Colleges = new schemas.College({
		emailId: request.body.emailId,
		password: request.body.password,
		name: request.body.collegeName,
		Address: {
			street: request.body.street,
			city: request.body.city,
			pinCode: request.body.pinCode
		}
	})

	dbInterface.saveCollege(Colleges, request, response, callback)
}

var callback = function(err, request, response) {
	if (err) response.send(err)
	else response.send('Registration successfull please login to proceed.')

}