const express = require('express');
const router = express.Router();

const path = require('path');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = require('../models/user');
const Application = require('../models/application');
const Account = require('../models/account');

/**
 * GET signin handler
 */
router.get('/signin', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/pages/user/signin.html'));
});

/**
 * POST signin handler
 */
router.post('/signin', function (req, res, next) {

    res.json({
        success: false,
        message: "Not Implemented yet."
    });


    // console.log(`============== USER SIGNIN FUNCTION ===============`);
    // console.log(`appId : ${req.body.appId}`);
    // console.log(`email : ${req.body.email}`);
    // console.log(`passwd: ${req.body.password}`);
    // console.log(`cburl : ${req.body.cburl}`);

    // if (req.body.appId === '') {
    //     res.json({
    //         success: false,
    //         message: 'appId required'
    //     })
    //     return
    // }
    // if (req.body.email === '') {
    //     res.json({
    //         success: false,
    //         message: 'email required'
    //     })
    //     return
    // }
    // if (req.body.password === '') {
    //     res.json({
    //         success: false,
    //         message: 'password required'
    //     })
    //     return
    // }
    // if (req.body.cburl === '') {
    //   res.json({
    //     success: false,
    //     message: 'cburl required'
    //   })
    //   return
    // }


    // Credential.findOne({
    //     application: req.body.appId,
    //     userName: req.body.email,
    //     password: req.body.password
    // })
    //     .populate('user')
    //     .populate('application')
    //     .exec(function (err, credential) {

    //         if (err) {
    //             console.log(`error: ${err}`);
    //             res.send(err);
    //             return
    //         }

    //         if (credential == null) {
    //             console.log(`============ DATA FROM DATABASE ============`);
    //             console.log(`Unknown user`);
    //             res.json({
    //                 success: false,
    //                 message: `Unknown user`
    //             })
    //             return
    //         }

    //         console.log(`============ DATA FROM DATABASE ============`);
    //         // console.log(`credential: ${credential}`);
    //         console.log(`application name: ${credential.application.appName}`);
    //         console.log(`application secret: ${credential.application.secret}`);
    //         console.log(`user Id: ${credential.user._id}`);
    //         console.log(`user firstName: ${credential.user.firstName}`);
    //         console.log(`user lastName: ${credential.user.lastName}`);
    //         console.log(`credential userName: ${credential.userName}`);
    //         console.log(`credential password: ${credential.password}`);
    //         console.log(`credential roles: ${credential.roles}`);

    //         var tokenData = {
    //             "id": credential.user._id,
    //             "firstName": credential.user.firstName,
    //             "lastName": credential.user.lastName,
    //             "roles": credential.roles
    //         };
    //         var token = jwt.sign(tokenData, 'secret', {
    //             expiresIn: 86400 // 24 hours in seconds
    //         });
    //         console.log(token);
    //         res.json({
    //             success: true,
    //             token: token, // or token: 'JWT ' + token
    //             redirect: "/" //req.body.cburl
    //         });

    //         var decoded = jwt.verify(token, 'secret');
    //         console.log(`Decoded jwt: ${JSON.stringify(decoded)}`);

    //     });

    // return




    // // var RegistryEntry = mongoose.model("RegistryEntry", RegistryEntrySchema);
    // RegistryEntry.findOne({ appId: req.body.appId }, (err, registryentry) => {
    //   if (err) {
    //     res.send(err);
    //     return
    //   }
    //   // if appId not found on database return error
    //   if (registryentry == null) {
    //     const appId = req.body.appId;
    //     console.log(`appId    : ${appId} - ENTRY NOT FOUND`);
    //     res.json({
    //       success: false,
    //       message: `Unknown appId: ${appId}`
    //     })
    //     return
    //   }
    //   // if appId found on database open consumer db, get user and return jwt and secret
    //   if (registryentry != null) {
    //     const appId = req.body.appId;
    //     console.log(`appId    : ${registryentry.appId} - ENTRY FOUND`);
    //     console.log(`database : ${registryentry.database}`);
    //     console.log(`secret   : ${registryentry.secret}`);

    //     // var userDB = mongoose.createConnection(`mongodb://localhost:27017/${registryentry.database}`);
    //     // var User = userDB.model("User", UserSchema);

    //     // var User = mongoose.model("User", UserSchema);

    //     // userDB.on('connected', () => {
    //     //   console.log(`Connected userDB`);
    //     // });
    //     // // notify on disconnect
    //     // userDB.on('disconnected', () => {
    //     //   console.log(`Disconnected userDB`);
    //     // });
    //     // userDB.on('open', () => {
    //     //   console.log(`DB Opened userDB`);
    //     // });

    //     User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    //       if (err) {
    //         res.send(err);
    //         return
    //       }
    //       if (user == null) {
    //         res.json({
    //           success: false,
    //           message: `Unknown user`
    //         })
    //         // userDB.close(function () {
    //         // });
    //         return
    //       }
    //       if (user != null) {
    //         console.log(`${user}`);
    //         var token = jwt.sign(user.toJSON(), 'secret', {
    //           expiresIn: 10080 // in seconds
    //         });
    //         console.log(token);
    //         res.json({
    //           success: true,
    //           token: token, // or token: 'JWT ' + token
    //           redirect: req.body.cburl
    //         });
    //         // userDB.close(function () {
    //         // });
    //         return
    //       }
    //       // return
    //     });
    //     return
    //   }
    //   return
    // })
    // return


});

/**
 * GET signin handler
 */
router.get('/signup', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/pages/user/signup.html'));
});

/**
 * POST signin handler
 */
router.post('/signup', function (req, res, next) {
    // console.log(`============== USER SIGNUP FUNCTION ===============`);
    // console.log(`appId : ${req.body.appId}`);
    // console.log(`email : ${req.body.email}`);
    // console.log(`passwd: ${req.body.password}`);
    // console.log(`cburl : ${req.body.cburl}`);

    // if (req.body.appId === '') {
    //     res.json({
    //         success: false,
    //         message: 'appId required'
    //     })
    //     return
    // }
    // if (req.body.email === '') {
    //     res.json({
    //         success: false,
    //         message: 'email required'
    //     })
    //     return
    // }
    // if (req.body.password === '') {
    //     res.json({
    //         success: false,
    //         message: 'password required'
    //     })
    //     return
    // }
    // if (req.body.cburl === '') {
    //   res.json({
    //     success: false,
    //     message: 'cburl required'
    //   })
    //   return
    // }


    // Credential.findOne({
    //     application: req.body.appId,
    //     userName: req.body.email,
    //     password: req.body.password
    // })
    //     .populate('user')
    //     .populate('application')
    //     .exec(function (err, credential) {

    //         if (err) {
    //             console.log(`error: ${err}`);
    //             res.send(err);
    //             return
    //         }

    //         if (credential == null) {
    //             console.log(`============ DATA FROM DATABASE ============`);
    //             console.log(`Unknown user`);
    //             res.json({
    //                 success: false,
    //                 message: `Unknown user`
    //             })
    //             return
    //         }

    //         console.log(`============ DATA FROM DATABASE ============`);
    //         // console.log(`credential: ${credential}`);
    //         console.log(`application name: ${credential.application.appName}`);
    //         console.log(`application secret: ${credential.application.secret}`);
    //         console.log(`user Id: ${credential.user._id}`);
    //         console.log(`user firstName: ${credential.user.firstName}`);
    //         console.log(`user lastName: ${credential.user.lastName}`);
    //         console.log(`credential userName: ${credential.userName}`);
    //         console.log(`credential password: ${credential.password}`);
    //         console.log(`credential roles: ${credential.roles}`);

    //         var tokenData = {
    //             "id": credential.user._id,
    //             "firstName": credential.user.firstName,
    //             "lastName": credential.user.lastName,
    //             "roles": credential.roles
    //         };
    //         var token = jwt.sign(tokenData, 'secret', {
    //             expiresIn: 86400 // 24 hours in seconds
    //         });
    //         console.log(token);
    //         res.json({
    //             success: true,
    //             token: token, // or token: 'JWT ' + token
    //             redirect: "/" //req.body.cburl
    //         });

    //         var decoded = jwt.verify(token, 'secret');
    //         console.log(`Decoded jwt: ${JSON.stringify(decoded)}`);

    //     });

    // return




    // // var RegistryEntry = mongoose.model("RegistryEntry", RegistryEntrySchema);
    // RegistryEntry.findOne({ appId: req.body.appId }, (err, registryentry) => {
    //   if (err) {
    //     res.send(err);
    //     return
    //   }
    //   // if appId not found on database return error
    //   if (registryentry == null) {
    //     const appId = req.body.appId;
    //     console.log(`appId    : ${appId} - ENTRY NOT FOUND`);
    //     res.json({
    //       success: false,
    //       message: `Unknown appId: ${appId}`
    //     })
    //     return
    //   }
    //   // if appId found on database open consumer db, get user and return jwt and secret
    //   if (registryentry != null) {
    //     const appId = req.body.appId;
    //     console.log(`appId    : ${registryentry.appId} - ENTRY FOUND`);
    //     console.log(`database : ${registryentry.database}`);
    //     console.log(`secret   : ${registryentry.secret}`);

    //     // var userDB = mongoose.createConnection(`mongodb://localhost:27017/${registryentry.database}`);
    //     // var User = userDB.model("User", UserSchema);

    //     // var User = mongoose.model("User", UserSchema);

    //     // userDB.on('connected', () => {
    //     //   console.log(`Connected userDB`);
    //     // });
    //     // // notify on disconnect
    //     // userDB.on('disconnected', () => {
    //     //   console.log(`Disconnected userDB`);
    //     // });
    //     // userDB.on('open', () => {
    //     //   console.log(`DB Opened userDB`);
    //     // });

    //     User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    //       if (err) {
    //         res.send(err);
    //         return
    //       }
    //       if (user == null) {
    //         res.json({
    //           success: false,
    //           message: `Unknown user`
    //         })
    //         // userDB.close(function () {
    //         // });
    //         return
    //       }
    //       if (user != null) {
    //         console.log(`${user}`);
    //         var token = jwt.sign(user.toJSON(), 'secret', {
    //           expiresIn: 10080 // in seconds
    //         });
    //         console.log(token);
    //         res.json({
    //           success: true,
    //           token: token, // or token: 'JWT ' + token
    //           redirect: req.body.cburl
    //         });
    //         // userDB.close(function () {
    //         // });
    //         return
    //       }
    //       // return
    //     });
    //     return
    //   }
    //   return
    // })
    // return


});

module.exports = router;
