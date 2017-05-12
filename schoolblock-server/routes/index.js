"use strict";
var express = require("express");
var router = new express.Router();
var path = require("path");

router.get("/", function (req, res) {
    // send index.html to start client side
    res.sendFile("index.html", {root: path.join(__dirname, "../../public/")});
    console.log("send static client-side resource to the browser");
});

module.exports = router;