var exports = module.exports = {},
	registerService = require(process.cwd() + '\\Services\\RegisterService.js'),
	loginService = require(process.cwd() + '\\Services\\LoginService.js'),
	exports.Router = require('express').Router();

exports.Router.post('/Registration', registerService.registerCollege)
exports.Router.post('/Login', loginService.login)