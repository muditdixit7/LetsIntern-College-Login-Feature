var exports = module.exports = {}
var fs = require('fs'),
  xlsx = require('node-xlsx'),
  async = require('async'),
  dbInterface = require(process.cwd() + '\\Database\\dbInterface.js'),
  schemas = require(process.cwd() + '\\Database\\UserSchemas.js');


exports.Uploader = function(req, res) {

  var excelObj = xlsx.parse(fs.readFileSync(process.cwd() + '\\' + req.files[0].path))

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