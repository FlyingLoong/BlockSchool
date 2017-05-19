var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
        id: String,
        email: String,
        phoneNumber: String,
        address: String,
        parentName: String,
        relationship: String,
        childName: String,
        childAge: String,
        childGender: String,
        childBirthday: Date,
        childInterests: String
    }
);

var User = mongoose.model("User", userSchema);

module.exports = User;