let userModel = require('../models/userModel');

let addUser = function(newUser) {
    return new Promise((resolve, reject) => {
        userModel.findOne({email: newUser.email}, function(err, user){
            if (user) {
                reject("The email has been registered!");
            } else {
                let mongoUser = new userModel(newUser);
                mongoUser.save();
                resolve(newUser);
            }
        });
    });
}

module.exports = {
    addUser: addUser
}