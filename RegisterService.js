var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var dbInterface = require(process.cwd() + '\\Database\\dbInterface.js')

exports.RegisterCollege = function(request, response) {

	var College = schemas.College({
		emailId: request.body.emailId,
		password: request.body.password,
		name: request.body.collegeName,
		Address: {
			street: request.body.street,
			city: request.body.city,
			pinCode: request.body.pinCode
		}
	})

	dbInterface.saveCollege(College)
	
	College.post('save', function() {
		console.log('Success')
	});


}