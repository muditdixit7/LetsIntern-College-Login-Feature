var exports = module.exports = {},
	multer = require('multer'),
	uploadStudentData = require(process.cwd() + '\\Services\\UploadStudentDataService.js'),
	upload = multer({
		dest: './uploads/'
	});

exports.Router = require('express').Router()
exports.Router.post('/file_upload', upload.any(), uploadStudentData.Uploader)