/** 
 * User model
*/

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
  // ,
  // applications: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Application'
  // }],
  // credentials: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Credential'
  // }]
});

// create unique index on field emaile
UserSchema.index({ email: 1 }, { unique: true });

// export model User
var User = module.exports = mongoose.model('User', UserSchema);
