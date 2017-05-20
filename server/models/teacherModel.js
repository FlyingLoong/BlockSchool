let mongoose = require('mongoose');

let teacherSchema = mongoose.Schema({
    teacherEmail: String,
    teacherName: String,
    teacherGender: String,
    teacherBirthday: Date
});

let teacherModel = mongoose.model("teacherModel", teacherSchema);

module.exports = teacherModel;