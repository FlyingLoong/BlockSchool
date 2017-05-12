"use strict";
var express = require("express");
var router = new express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

var personService = require("../services/personService");

router.get("/search/projects/student/:id", function(req,res){
    var id = req.params.id;
    personService.getProjectsByPerson(id,"student")
        .then(projects => res.json(projects));
});
router.get("/search/teachers/project/:id", function(req,res){
    var project_id = req.params.id;
    personService.getTeachersByProject(project_id)
        .then(teachers => res.json(teachers));
});

router.get("/search/courses/teacher/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"teacher")
        .then(courses => res.json(courses));
});

router.get("/search/courses/student/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"student")
        .then(courses => res.json(courses));
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




module.exports = router;