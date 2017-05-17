let mongoose = require('mongoose');

let classScheduleSchema = mongoose.Schema({
    teacherEmail: String,
    teacherName: String,
    startTime: Date,
    endTime: Date
});

let classScheduleModel = mongoose.model("classScheduleModel", classScheduleSchema);

module.exports = classScheduleModel;







