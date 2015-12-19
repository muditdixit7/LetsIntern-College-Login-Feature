var exports = module.exports = {}
exports.Router = require('express').Router();
var registerService = require(process.cwd() + '\\Services\\RegisterService.js')
var loginService = require(process.cwd() + '\\Services\\LoginService.js')


exports.Router.post('/Registration', registerService.registerCollege)
exports.Router.post('/Login', loginService.login)