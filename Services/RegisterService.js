var exports = module.exports = {},
	schemas = require(process.cwd() + '\\Database\\UserSchemas.js'),
	dbInterface = require(process.cwd() + '\\Database\\dbInterface.js'),
	appConfig = require(process.cwd() + '\\AppConfig.js');

/*Functoin to register college , create a college object using mongoose and call dbinterface.saveCollege
function to be saved*/
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


//*Callback function for register service*//
var callback = function(err, request, response) {

	//*Some Wrapping can be done before sending error back to the user*//

	if (err) response.send(err)
	else response.send('Registration successfull please login to proceed.')

}