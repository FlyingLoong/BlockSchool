var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var courseSchema = new Schema({
    id: String,
    title: String,
    grade: String,
    desc: String,
    type: String,
    project_id: String,
    project_name: String,
    teacher_id: String,
    teacher_name: String,
    student_id: String,
    student_name: String,
    start: Date,
    end: Date,
    start_unix: Number,
    end_unix: Number,
    booked: Boolean
});
var moduleUnitSchema = new Schema({
    id: String,
    title: String,
    desc: String
});
var projectSchema = new Schema({
    id: String,
    name: String,
    desc: String,
    type: String,
    modulesUnits: [moduleUnitSchema]
});
var personSchema = new Schema({
    id: String,
    name: String,
    email: String,
    role: String,
    telephone: String,
    sex: String,
    age: String,
    contact: {tel: String, wechat: String},
    projects: [projectSchema],
    courses: [courseSchema]
});

var Person = mongoose.model("Person", personSchema);

module.exports = Person;