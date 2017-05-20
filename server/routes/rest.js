let express = require('express');
let router = express.Router();
let authService = require('../services/authService');
let scheduleService = require('../services/scheduleService');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.get("/home", function(req, res) {});

// Add new user into database
router.post("/users", jsonParser, function(req, res) {
    console.log("Get the add user request!");  //Debug output
    authService.addUser(req.body)
            .then(function(user){res.json(user)},
                  function(error){res.status(400).send("The email has been registered!")})
});

// Add new schedule into database
router.post("/events", jsonParser, function(req, res) {
    console.log("Get the add events request!");  //Debug output
    scheduleService.addSchedule(req.body)
                    .then(function(event){res.json(event)},
                          function(error){res.status(400).send("The class has been scheduled!")})

});

// Retrieve scheduled classes from database
router.get("/events/:teacherEmail", function(req, req) {
    console.log("Get the get events request!"); //Debug output
    scheduleService.getSchedules(teacherEmail)
                    .then(function(schedules){res.json(schedules)},
                          function(error){res.status(400).send("Can't get the scheduled classes!")})
});


module.exports = router;