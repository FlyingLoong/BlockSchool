let express = require('express');
let router = express.Router();
let authService = require('../services/authService');
let scheduleService = require('../services/scheduleService');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.get("/home", function(req, res) {});

router.post("/users", jsonParser, function(req, res) {
    console.log("Get the add user request!");  //Debug output
    authService.addUser(req.body)
            .then(function(user){res.json(user)},
                  function(error){res.status(400).send("The email has been registered!")})});

router.post("/event", jsonParser, function(req, res) {
    console.log("Get the add events request!");
    scheduleService.addSchedule(req.body)
                    .then(function(event){res.json(event)},
                          function(error){res.status(400).send("The class has been scheduled!")})

})


module.exports = router;