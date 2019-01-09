const mongoose = require('mongoose');
const User = require('../models/user');
const Application = require('../models/application');
const Credential = require('../models/credential');

mongoose.connect("mongodb://localhost:27017/auth-registry");
// notify on connect
mongoose.connection.on('connected', () => {
    console.log(`Connected to auth-registry`);
});
// notify on disconnect
mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected from auth-registry`);
});


var user = new User({
    firstName: "Απόστολος",
    lastName: "Παπαστεργίου",
    applications: [],
    credentials: []
});
user.save()
    .then(function () {
        var application = new Application({
            appName: "myApplication",
            secret: "this-is-a-secret",
            users: [user._id]
        });
        application.save()
            .then(function () {
                var credential = new Credential({
                    userName: "user-0",
                    password: "password-0",
                    user: user._id,
                    application: application._id
                });
                credential.save()
                    .then(function () {
                        console.log(`user._id: ${user._id}`);
                        console.log(`application._id: ${application._id}`);
                        console.log(`credential._id: ${credential._id}`);
                        mongoose.connection.close();
                    });

            });
    });
