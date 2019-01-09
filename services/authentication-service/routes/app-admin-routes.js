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
    res.sendFile(path.join(__dirname, '../public/pages/appAdmin/signin.html'));
});

/**
 * POST signin handler
 */
router.post('/signin', function (req, res, next) {
    console.log(`============== APP ADMIN SIGNIN FUNCTION ===============`);
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
    if (req.body.email === '') {
        res.json({
            success: false,
            message: 'email required'
        })
        return
    }
    if (req.body.password === '') {
        res.json({
            success: false,
            message: 'password required'
        })
        return
    }
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


});

/**
 * GET signup handler
 */
router.get('/signup', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/pages/appAdmin/signup.html'));
});

/**
 * POST signup handler
 */
router.post('/signup', function (req, res, next) {
    console.log(`============== APP ADMIN SIGNUP FUNCTION ===============`);
    console.log(`email : ${req.body.email}`);
    console.log(`firstName : ${req.body.firstName}`);
    console.log(`lastName : ${req.body.lastName}`);
    console.log(`password: ${req.body.password}`);
    console.log(`confPassword: ${req.body.confPassword}`);

    if (req.body.email === '') {
        res.json({
            success: false,
            message: 'email required'
        })
        return
    }
    if (req.body.firstName === '') {
        res.json({
            success: false,
            message: 'firstName required'
        })
        return
    }
    if (req.body.lastName === '') {
        res.json({
            success: false,
            message: 'lastName required'
        })
        return
    }
    if (req.body.password === '') {
        res.json({
            success: false,
            message: 'password required'
        })
        return
    }
    if (req.body.confPassword === '') {
        res.json({
            success: false,
            message: 'confPassword required'
        })
        return
    }

    Application.findOne({
        appName: 'techasoft-authentication-service'
    }, (err, authService) => {
        console.log(`auth service: ${authService}`);
        
    });



    // User.findOneAndUpdate({
    //     email: req.body.email
    // }, {
    //         $set: {
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName
    //         }
    //     }, {
    //         upsert: true,
    //         new: true,
    //         setDefaultsOnInsert: true
    //     }, function (err, userDoc) {
    //         if (err) {
    //             console.log(err);
    //             return
    //         }
    //         console.log(`user: ${userDoc}`);

    //         var account = new Account({
    //             accType: "admin",
    //             user: userDoc._id,
    //             userName: req.body.email,
    //             password: req.body.password,
    //             roles: ["appAdmin"]

    //         });
    //         account.save()
    //             .then(function (err, accountDoc) {
    //                 if (err) {
    //                     console.log(err);
    //                 }
    //                 console.log(`account: ${accountDoc}`);
    //                 res.json({
    //                     success: true,
    //                     message: 'user and account has been created ok',
    //                     user: userDoc,
    //                     account: accountDoc
    //                 })
    //             });

    //     });

    // return

});


module.exports = router;
