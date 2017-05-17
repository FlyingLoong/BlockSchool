"use strict";

const uuidV4 = require("uuid/v4");

var Person = require("../models/personModel");

var getProjectsByPerson = function (person_id, role) {
    return new Promise((resolve, reject) => {
            Person.count({id: person_id}, function (err, count) {
            // console.log(count);
            if (count === 0) {
                var newPerson = new Person({
                    id: person_id,
                    name: "",
                    email: "",
                    role: role,
                    telephone: "",
                    sex: "",
                    age: "",
                    projects: [],
                    courses: [],
                    contact: {tel: "", wechat: ""}
                });
                newPerson.save();
                resolve(newPerson);
                // console.log(" New Person Added !");
                // console.log(newPerson);
            } else if (count === 1) {
                Person.findOne({id: person_id}, function (err, person) {
                    if (person) {
                        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                        // console.log(person);
                        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                        resolve(person.projects);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
});
};

var getTeachersByProject = function (project_id) {
    return new Promise((resolve,reject) => {
            Person.find({role: "teacher", projects: {$elemMatch: {id: project_id}}},function (err, persons) {
            if (persons) {
                // console.log("getTeachersByProject() - Count teachers: ");
                // console.log(persons.length);
                // console.log(persons);
                resolve(persons);
            } else {
                reject(err);
            }
        });
});
};



var getCoursesByPerson = function (person_id, role) {
    return new Promise((resolve, reject) => {
            Person.count({id: person_id}, function (err, count) {
            if (count === 0) {
                var newPerson = new Person({
                    id: person_id,
                    name: "",
                    email: "",
                    role: role,
                    telephone: "",
                    sex: "",
                    age: "",
                    projects: [],
                    courses: [],
                    contact: {tel: "", wechat: ""}
                });
                newPerson.save();
                resolve(newPerson);
                // console.log(" New Person Added !");
                // console.log(newPerson);
            } else if (count === 1) {
                Person.findOne({id: person_id}, function (err, person) {
                    if (person) {
                        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                        // console.log(person);
                        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                        resolve(person.courses);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
});
};

var addCourse = function (newCourse) {
    console.log("server-side: personService : addCourse()");
    newCourse.id = "" + uuidV4();
    return new Promise((resolve, reject) => {
            //  check out whether the course time taken before the server execute push and save operation.
            Person.count({ $or:[
            {courses: {$elemMatch: { start_unix: { $lt: newCourse.start_unix }, end_unix: { $gt: newCourse.start_unix } } }},
            {courses: {$elemMatch: { start_unix: { $lt: newCourse.end_unix }, end_unix: { $gt: newCourse.end_unix } } }},
            {courses: {$elemMatch: { start_unix: { $gt: newCourse.start_unix, $lt: newCourse.end_unix } } }},
            {courses: {$elemMatch: { end_unix: { $gt: newCourse.start_unix, $lt: newCourse.end_unix } } }}
        ]},function (err, count) {
            if (count === 0) {
                // add course to corresponding teacher
                Person.findOne({id: newCourse.teacher_id},function (err, person) {
                    if (person) {
                        person.courses.push(newCourse);
                        person.save();
                        console.log("The course has been added into teacher's profile.");
                    } else {
                        reject(err);
                    }
                });
                // add course to corresponding student
                Person.findOne({id: newCourse.student_id},function (err, person) {
                    if (person) {
                        person.courses.push(newCourse);
                        person.save();
                        console.log("Ok! The course has been added into student's profile.");
                    } else {
                        reject(err);
                    }
                });
                resolve(newCourse);
            } else if (count >= 1) {
                console.log("Sorry, the time has been taken. Try others.");
            } else {
                reject(err);
            }
        });
});
};


var removeCourse = function (removingCourse) {
    console.log("server-side: personService : removeCourse()");

    return new Promise((resolve, reject) => {
            // remove course from corresponding student
            Person.update({id: removingCourse.student_id},{ $pull: { "courses" : { id: removingCourse.id } } }, function(err,ok){
            if(err){
                console.log("Sorry, the course can not be removed. Try again.");
                reject(err);
            }else{
                console.log("Ok! The course has been removed from student's profile.");
            };
        });
    // remove course from corresponding teacher
    Person.update({id: removingCourse.teacher_id},{ $pull: { "courses" : { id: removingCourse.id } } }, function(err,ok){
        if(err){
            console.log("Sorry, the course can not be removed. Try again.");
            reject(err);
        }else{
            console.log("Ok! The course has been removed from teacher's profile.");
            // return the teacher's profile
            resolve(ok);
        };
    });
});
};


module.exports = {
    getProjectsByPerson: getProjectsByPerson,
    getTeachersByProject: getTeachersByProject,
    getCoursesByPerson: getCoursesByPerson,
    addCourse: addCourse,
    removeCourse: removeCourse
};