let express = require('express');
let app = express();
let restRouter = require('./routes/rest');
let indexRouter = require('./routes/index');
let mongoose = require('mongoose');
let path = require('path');

mongoose.connect("mongodb://localhost/BlockSchool");

app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, "../public")));
app.use('/', indexRouter);

app.listen(3000, function() {
    console.log("Server start listening port 3000!");
})