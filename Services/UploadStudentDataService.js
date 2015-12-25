var exports = module.exports = {},
	fs = require('fs'),
	xlsx = require('node-xlsx'),
	async = require('async'),
	dbInterface = require(process.cwd() + '\\Database\\dbInterface.js'),
	schemas = require(process.cwd() + '\\Database\\UserSchemas.js');


exports.Uploader = function(req, res) {

	if (req.files !== null || req.files !== undefineed) {
		res.send('File upload successful')

		for (var file = 0; file < req.file.length; file++) {
			var excelObj = xlsx.parse(fs.readFileSync(process.cwd() + '\\' + req.files[file].path))

			for (var index = 0; index < excelObj.length; index++)
				async.forEach(excelObj[index].data, function(data) {

					if (data[0] === 'Name' || data[1] === 'Email')
						return

					var student = new schemas.Student({
						name: data[0],
						email: data[1],
						mobileNo: data[2],
						course: data[3],
						pursuingYear: data[4]
					})
					dbInterface.saveStudent(student)
				})
		}
	} else
		res.send('File upload unsuccessful ,please try again')
}