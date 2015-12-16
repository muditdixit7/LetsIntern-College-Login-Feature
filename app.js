var app = require('express')
var schemas = require(process.cwd() + '\\Database\\UserSchemas.js')
var appConfig = require(process.cwd() + '\\AppConfig.js')
var mongoose = require('mongoose')



schemas.db.on('error', console.error.bind(console, 'connection error:'));

schemas.db.once('open', function() {

	var college = new schemas.College({
		emailId: "Hello",
		password: "Hello",
		name: "Hello",
		Address: {
			street: "Hello",
			city: "Hello",
			pinCode: 2134545
		}
	})

	college.save(function(err) {

		if (err) throw err;

		console.log("Book Saved Successfully");

	});

});