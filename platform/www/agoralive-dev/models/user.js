var mongoose = require('mongoose');
// var database = require('../config/database');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, cb) {
  User.findById(id, cb);
};

module.exports.getUserByEmail = function (email, cb) {
  User.findOne({
    email: email
  }, cb);
};

module.exports.createUser = function (newUser, cb) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(cb);
    });
  });
};

module.exports.comparePassword = function (myPassword, hash, cb) {
  bcrypt.compare(myPassword, hash, function (err, isMatch) {
    if (err) throw err;
    cb(null, isMatch);
  });
};
