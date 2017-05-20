let scheduleModel = require('../models/scheduleModel');

let addSchedule = function(event) {
    return new Promise((resolve, reject) => {
        let mongoEvent = new scheduleModel(event);
        mongoEvent.save()
        resolve(event);
    })
}

let getSchedules = function(teacherEmail) {
    return  new Promise((resolve, reject) => {
        scheduleModel.find({teacherEmail: teacherEmail}, function(err, schedules) {
            if (err) {
                reject("No scheduled classes!");
            } else {
                resolve(schedules)
            }
        })
    })
}

module.exports = {
    addSchedule: addSchedule
}