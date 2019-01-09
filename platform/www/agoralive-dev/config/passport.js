// var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

// var User = require('../models/user');
// var database = require('./database');

var users = [{
  id: 1,
  name: 'test',
  password: '1234'
}, {
  id: 2,
  name: 'test',
  password: 'test'
}];

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secret';
jwtOptions.issuer = 'accounts.agoralive.gr';
jwtOptions.audience = 'agoralive.gr';

// passport.use(new JwtStrategy(jwtOptions, function (jwtPayload, done) {
//   // User.getUserById({
//   //   id: jwtPayload._doc._id
//   // }, function (err, user) {
//   //   if (err) {
//   //     return done(err, false);
//   //   }
//   //   if (user) {
//   //     return done(null, user);
//   //   } else {
//   //     return done(null, false);
//   //     // or you could create a new account
//   //   }
//   //   });

// }));

module.exports = new JwtStrategy(jwtOptions, function (jwtPayLoad, done) {
  console.log('inside JwtStrategy function');
  return done(null, users[0]);
});
