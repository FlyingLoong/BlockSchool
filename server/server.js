"use strict";
var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

// database by yidong
//mongoose.connect("mongodb://localhost/BlockSchool");

// database by oliver
mongoose.connect("mongodb://OliverCapstoneSchoolBlock:1234@ds021299.mlab.com:21299/oliver_capstone_schoolblock");
console.log("connected!");

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter);
app.use("/api/v1", restRouter);
app.use("/", function (req, res) {
    // send index.html to start client side
    console.log("send static client-side resource to the browser");
    res.sendFile("index.html", {root: path.join(__dirname, "../public/")});
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});