"use strict";

const uuidV4 = require("uuid/v4");
const crypto = require("crypto");
var User = require("../models/userModel");

var addUser = function (user) {

    // generate user ID
    user.id = "" + uuidV4();

    // Encryption (random Salt + sha512)
    var saltGenerated = "";
    var hashGenerated = "";
    crypto.randomBytes(128, function (err, salt) {
        if (err) { throw err;}
        saltGenerated = salt.toString("hex");
        console.log("salt: " + saltGenerated);

        crypto.pbkdf2(user.password, saltGenerated, 4096, 512, "sha512", function (err, hash) {
            if (err) { throw err; }
            hashGenerated = hash.toString("hex");
            console.log("hash: " + hashGenerated);
        })
    });

    return new Promise((resolve, reject) => {
            User.count({email: user.email}, function (err, count) {
                if (count === 0) {
                    var newUser = new User({
                        id:user.id,
                        email: user.email,
                        hash: hashGenerated,
                        salt: saltGenerated,
                        parentName: user.parentName,
                        relationship: user.relationship,
                        childName: user.childName,
                        childAge: user.childAge,
                        childGender: user.childGender,
                        childBirthday: user.childBirthday,
                        childInterests: user.childInterest
                    });
                    newUser.save();
                    console.log(" New User Added !");
                    // console.log(newUser);
                    resolve(newUser);
                } else if (count >= 1) {
                    reject("The email has been registered!");
                } else {
                    reject(err);
                }
            });
    });
};


module.exports = {
    addUser: addUser
}
