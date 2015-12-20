var exports = module.exports = {}
var fs = require('fs')

exports.Uploader = function(req, res) {
  console.log(req)
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);

  var file = __dirname + "/" + req.files.file.name;
  fs.readFile(req.files.file.path, function(err, data) {
    //fs.writeFile(file, data, function(err) {
    if (err) {
      console.log(err);
    } else {
      response = {
        message: 'File uploaded successfully',
        filename: req.files.file.name
      };
    }
    console.log(response);
    res.end(JSON.stringify(response));
    console.log(data)
      //});
    console.log(data)
  });
}