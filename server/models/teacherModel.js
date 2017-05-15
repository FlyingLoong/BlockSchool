var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
    teacherEmail: String,
    teacherName: String,
    teacherGender: String,
    teacherBirthday: Date
});

var teacherModel = mongoose.model("teacherModel", teacherSchema);

module.exports = teacherModel;