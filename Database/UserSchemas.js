var appConfig = require(process.cwd() + '\\AppConfig.js')
var mongoose = require('mongoose')
var exports = module.exports = {}

mongoose.connect("mongodb://localhost:27017/test")

var collegeSchema = mongoose.Schema({
	emailId: String,
	password: String,
	name: String,
	Address: {
		street: String,
		city: String,
		pinCode: Number
	}
})

var studentSchema = mongoose.Schema({
	name: String,
	email: String,
	mobileNo: Number,
	course: String,
	pursuingYear: String
})

exports.College = mongoose.model('College', collegeSchema, "CollegeCollection")
exports.Student = mongoose.model('Student', studentSchema, "StudentCollection")
exports.db = mongoose.connection


/*
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

	});*/