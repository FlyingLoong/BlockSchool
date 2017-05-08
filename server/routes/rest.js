let express = require('express');
let router = express.Router();
let authService = require('../services/authService');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.get("/home", function(req, res) {});

router.post("/users", jsonParser, function(req, res) {
    console.log("Get the add user request!");
    authService.addUser(req.body)
            .then(function(user){res.json(user)},
                  function(error){res.status(400).send("The email has been registered!")})});

module.exports = router;