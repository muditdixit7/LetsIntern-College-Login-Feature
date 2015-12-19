var exports = module.exports = {}
exports.Router = require('express').Router();
var Cookies = require('cookies')

exports.Router.use(function(req, res, next) {
	if (!req.decoded) {
		var cookies = new Cookies(req, res)
		var token = cookies.get('authentication_token')
		if (token) {
			jwt.verify(token, appConfig.secret, function(err, decoded) {
				if (err) {
					res.json({
						success: false,
						message: 'Authentication failed'
					})
					res.end()
				} else {
					req.decoded = decoded
					next()
				}
			})
		} else {
			res.json({
				success: false,
				message: 'Authentication failed'
			})
			res.end()
		}
	}
})