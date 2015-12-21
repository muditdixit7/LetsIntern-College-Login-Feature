var exports = module.exports = {}
var multer = require('multer')
var uploadStudentData = require(process.cwd() + '\\Services\\UploadStudentDataService.js')
var upload = multer({
	dest: './uploads/'
})

exports.Router = require('express').Router();

exports.Router.post('/file_upload', upload.any(), uploadStudentData.Uploader)