var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        email: String,
        password: String,
        parentName: String,
        relationship: String,
        childName: String,
        childAge: String,
        childGender: String,
        childBirthday: Date,
        childInterests: String
    }
);

var userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;