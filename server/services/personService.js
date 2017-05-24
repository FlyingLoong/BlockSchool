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
                    projects: [
                        {
                            "id": "c59c93db-1777-4cf3-84a8-507e0rcd0647",
                            "name": "CS503 Programming",
                            "desc": "Have you ever wondered how computers work? In this course, we'll get to the bottom of this question.",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0521",
                                    "title": "CS503 Class 1",
                                    "desc": "Variables"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0522",
                                    "title": "CS503 Class 2",
                                    "desc": "Numbers"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0523",
                                    "title": "CS503 Class 3",
                                    "desc": "Strings"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0524",
                                    "title": "CS503 Class 4",
                                    "desc": "Lists"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0525",
                                    "title": "CS503 Class 5",
                                    "desc": "Conditions"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0526",
                                    "title": "CS503 Class 6",
                                    "desc": "Loops"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0527",
                                    "title": "CS503 Class 7",
                                    "desc": "Functions"
                                }
                            ]
                        },
                        {
                            "id": "c82c93db-1234-4cf3-84a8-506e0rcd0644",
                            "name": "CS507 Git",
                            "desc": "In this course, we'll dive into Git, a version control system for tracking changes in files and coordinating work on them in teams",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0121",
                                    "title": "CS507 Class 1",
                                    "desc": "Logging"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0122",
                                    "title": "CS507 Class 2",
                                    "desc": "Head"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0123",
                                    "title": "CS507 Class 3",
                                    "desc": "Tagging"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0124",
                                    "title": "CS507 Class 4",
                                    "desc": "Branches"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0125",
                                    "title": "CS507 Class 5",
                                    "desc": "Repositories"
                                }
                            ]
                        },
                        {
                            "id": "c79c93db-1757-4cf3-84a8-507h0rcd0662",
                            "name": "CS501 Python",
                            "desc": "In this course, we'll look into Python, a simple but powerful programming language",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0461",
                                    "title": "CS501 Class 1",
                                    "desc": "Basics"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0462",
                                    "title": "CS501 Class 2",
                                    "desc": "Variable and types"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0463",
                                    "title": "CS501 Class 3",
                                    "desc": "Strings"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0464",
                                    "title": "CS501 Class 4",
                                    "desc": "Booleans"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0465",
                                    "title": "CS501 Class 5",
                                    "desc": "Conditional statements"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0466",
                                    "title": "CS501 Class 6",
                                    "desc": "Lists"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0467",
                                    "title": "CS501 Class 7",
                                    "desc": "Loops"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0468",
                                    "title": "CS501 Class 8",
                                    "desc": "Functions"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0469",
                                    "title": "CS501 Class 9",
                                    "desc": "Classes"
                                }
                            ]
                        }
                    ],
                    courses: [],
                    contact: {tel: "", wechat: ""}
                });
                newPerson.save();
                console.log("OK! New person document (projects and courses document) added.");
                resolve(newPerson);
            } else if (count === 1) {
                Person.findOne({id: person_id}, function (err, person) {
                    if (person) {
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
                    projects: [
                        {
                            "id": "c59c93db-1777-4cf3-84a8-507e0rcd0647",
                            "name": "CS503 Programming",
                            "desc": "Have you ever wondered how computers work? In this course, we'll get to the bottom of this question.",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0521",
                                    "title": "CS503 Class 1",
                                    "desc": "Variables"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0522",
                                    "title": "CS503 Class 2",
                                    "desc": "Numbers"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0523",
                                    "title": "CS503 Class 3",
                                    "desc": "Strings"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0524",
                                    "title": "CS503 Class 4",
                                    "desc": "Lists"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0525",
                                    "title": "CS503 Class 5",
                                    "desc": "Conditions"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0526",
                                    "title": "CS503 Class 6",
                                    "desc": "Loops"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0527",
                                    "title": "CS503 Class 7",
                                    "desc": "Functions"
                                }
                            ]
                        },
                        {
                            "id": "c82c93db-1234-4cf3-84a8-506e0rcd0644",
                            "name": "CS507 Git",
                            "desc": "In this course, we'll dive into Git, a version control system for tracking changes in files and coordinating work on them in teams",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0121",
                                    "title": "CS507 Class 1",
                                    "desc": "Logging"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0122",
                                    "title": "CS507 Class 2",
                                    "desc": "Head"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0123",
                                    "title": "CS507 Class 3",
                                    "desc": "Tagging"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0124",
                                    "title": "CS507 Class 4",
                                    "desc": "Branches"
                                },
                                {
                                    "id": "c82c93db-12s4-3cf3-84a8-507e0rcd0125",
                                    "title": "CS507 Class 5",
                                    "desc": "Repositories"
                                }
                            ]
                        },
                        {
                            "id": "c79c93db-1757-4cf3-84a8-507h0rcd0662",
                            "name": "CS501 Python",
                            "desc": "In this course, we'll look into Python, a simple but powerful programming language",
                            "type": "private",
                            "modulesUnits": [
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0461",
                                    "title": "CS501 Class 1",
                                    "desc": "Basics"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0462",
                                    "title": "CS501 Class 2",
                                    "desc": "Variable and types"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0463",
                                    "title": "CS501 Class 3",
                                    "desc": "Strings"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0464",
                                    "title": "CS501 Class 4",
                                    "desc": "Booleans"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0465",
                                    "title": "CS501 Class 5",
                                    "desc": "Conditional statements"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0466",
                                    "title": "CS501 Class 6",
                                    "desc": "Lists"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0467",
                                    "title": "CS501 Class 7",
                                    "desc": "Loops"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0468",
                                    "title": "CS501 Class 8",
                                    "desc": "Functions"
                                },
                                {
                                    "id": "c79c97db-17g7-4cu2-84a8-507h0rcd0469",
                                    "title": "CS501 Class 9",
                                    "desc": "Classes"
                                }
                            ]
                        }
                    ],
                    courses: [],
                    contact: {tel: "", wechat: ""}
                });
                newPerson.save();
                console.log("OK! New person document (projects and courses document) added.");
                resolve(newPerson);
            } else if (count === 1) {
                Person.findOne({id: person_id}, function (err, person) {
                    if (person) {
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
                        console.log("Ok! The course has been added into teacher's profile.");
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