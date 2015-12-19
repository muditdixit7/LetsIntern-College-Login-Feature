var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var Q = require('q')
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

	Q.fcall(dbInterface.saveCollege(Colleges))
		.then(returnSuccess)



	var returnError = function() {
		response.send('Registration failed .Please try again')
	}

	var returnSuccess = function() {
			response.send('Registration Successful.Please login to proceed')
		}
		.catch(function(err) {
			console.log(err)
			returnError
		})
}