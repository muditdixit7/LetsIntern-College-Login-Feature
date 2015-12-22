var exports = module.exports = {},
	multer = require('multer'),
	uploadStudentData = require(process.cwd() + '\\Services\\UploadStudentDataService.js'),
	exports.Router = require('express').Router(),
	upload = multer({
		dest: './uploads/'
	});

exports.Router.post('/file_upload', upload.any(), uploadStudentData.Uploader)