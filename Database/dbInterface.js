var exports = module.exports = {}
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')

exports.saveCollege = function(College, request, response, callback) {
	College.save(function(err, result) {
		if (err) return callback(err, request, response)
		else return callback(null, request, response)
	})
}

exports.saveStudent = function(student) {
	student.save(function(err, result) {
		if (err) console.log('false')
		else console.log('true')
	})
}

exports.authenticate = function(request, response, callback) {
	schemas.College.findOne({
		'emailId': request.body.emailId,
		'password': request.body.password
	}, function(err, result) {
		if (err) return callback(err, request, response)
		else return callback(null, request, response, result)
	})
}