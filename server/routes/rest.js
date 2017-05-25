"use strict";
var express = require("express");
var router = new express.Router();
var authService = require('../services/authService');
var personService = require("../services/personService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/home", function(req, res) {});

router.post("/users", jsonParser, function(req, res) {
    // console.log("Get the update user profile request!");  //Debug output
    authService.updateUserProfile(req.body)
        .then(function (ok) {
            console.log("The user's profile has been updated for you.");
            res.json(ok);
        }, function (error) {
            res.status(400).send("Sorry, Failed to update the user's profile.");
        });
});

router.get("/search/projects/student/:id", function(req,res){
    var id = req.params.id;
    personService.getProjectsByPerson(id,"student")
        .then( function(projects){res.json(projects);} );
});
router.get("/search/teachers/project/:id", function(req,res){
    var project_id = req.params.id;
    personService.getTeachersByProject(project_id)
        .then( function(teachers){res.json(teachers);} );
});

router.get("/search/courses/teacher/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"teacher")
        .then( function(courses){res.json(courses);} );
});

router.get("/search/courses/student/:id", function(req,res){
    var id = req.params.id;
    personService.getCoursesByPerson(id,"student")
        .then( function(courses){res.json(courses);} );
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
            console.log("The course has been removed for you.");
            res.json(ok);
        }, function (error) {
            res.status(400).send("Sorry, Failed to remove.");
        });
});


router.get("/search/profile/email/:email",function(req, res){
    var userEmail = req.params.email;
    authService.getProfileByEmail(userEmail)
        .then( function(profile ){
            res.json(profile);
        }, function (error) {
            res.status(400).send("Can't get the user profile!");
        });
});


module.exports = router;