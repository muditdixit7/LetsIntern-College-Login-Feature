var exports = module.exports = {}

exports.saveCollege = function(College) {
	College.save(function(err) {
		if (err) console.log('not done')
		else console.log('done')
	})
}

exports.authenticate = function(College) {
	College.findOne({}, function(err, result) {
		if (err) console.log('not done')
		else console.log(result)
	})
}