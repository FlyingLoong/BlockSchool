let scheduleModel = require('../models/scheduleModel');

let addSchedule = function(event) {
    return new Promise((resolve, reject) => {
        let mongoEvent = new scheduleModel(event);
        mongoEvent.save()
        resolve(event);
    })
}

module.exports = {
    addSchedule: addSchedule
}