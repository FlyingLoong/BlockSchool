var mongoose = require('mongoose');

var classScheduleSchema = mongoose.Schema({
    teacherEmail: String,
    teacherName: String,
    startTime: Date,
    endTime: Date
});

var classScheduleModel = mongoose.model("classScheduleModel", classScheduleSchema);

module.exports = classScheduleModel;







