let express = require('express');
let app = express();
let restRouter = require('./routes/rest');
let indexRouter = require('./routes/index');
let mongoose = require('mongoose');
let path = require('path');

app.use(express.static(path.join(__dirname, "../public")));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.listen(3000, function() {
    console.log("Server start listening port 3000!");
})