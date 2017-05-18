"use strict";
var express = require("express");
var router = new express.Router();
var authService = require('../services/authService');
var personService = require("../services/personService");
var scheduleService = require('../services/scheduleService');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/home", function(req, res) {});

// Add new user into database
router.post("/users", jsonParser, function(req, res) {
    console.log("Get the add user request!");  //Debug output
    authService.addUser(req.body)
            .then(function(count){res.json(count)},
                  function(error){res.status(400).send("system error!")})
});

// Add new schedule into database
router.post("/events", jsonParser, function(req, res) {
    console.log("Get the add events request!");  //Debug output
    scheduleService.addSchedule(req.body)
                    .then(function(event){res.json(event)},
                          function(error){res.status(400).send("The class has been scheduled!")})

});

// Retrieve scheduled classes from database
router.get("/events/:teacherEmail", function(req, res) {
    console.log("Get the get events request!"); //Debug output
    scheduleService.getSchedules(teacherEmail)
                    .then(function(schedules){res.json(schedules)},
                          function(error){res.status(400).send("Can't get the scheduled classes!")})
});



// RESTful api By Oliver
router.get("/search/projects/student/:id", function(req,res){
    var id = req.params.id;
    personService.getProjectsByPerson(id,"student")
        .then( function(projects){res.json(projects)} )
});
router.get("/search/teachers/project/:id", function(req,res){
    var project_id = req.params.id;
    personService.getTeachersByProject(project_id)
        .then( function(teachers){res.json(teachers)} );
});

router.get("/search/courses/teacher/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"teacher")
        .then( function(courses){res.json(courses)} );
});

router.get("/search/courses/student/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"student")
        .then( function(courses){res.json(courses)} );
});

router.post("/booking/course/student/:id", jsonParser, function (req, res) {
    personService.addCourse(req.body)
        .then(function (course) {
            console.log("The course has been booked for you.");
            res.json(course);
        }, function (error) {
            res.status(400).send("Sorry, Failed to book.");
        });
});

router.post("/removing/course/student/:id", jsonParser, function (req, res) {
    personService.removeCourse(req.body)
        .then(function (ok) {
            console.log('server rest.js:');
            console.log(ok);
            console.log("The course has been booked for you.");
            res.json(ok);
        }, function (error) {
            res.status(400).send("Sorry, Failed to remove.");
        });
});

module.exports = router;