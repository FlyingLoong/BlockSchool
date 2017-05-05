let mongoose = require('mongoose');
let userSchema = mongoose.Schema(
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

let userModel = mongoose.Model("userModel", userSchema);

module.exports = userModel;