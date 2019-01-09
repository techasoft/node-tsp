/** 
 * Account model
*/

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var AccountSchema = mongoose.Schema({
  accType: {
    type: String,
    enum: ["master", "admin", "user"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: String
  }],
  verified: {
    type: Boolean,
    default: false
  }
});

// create unique index on fields application, userName
AccountSchema.index({ application: 1, userName: 1 }, { unique: true });

// export model Account
var Account = module.exports = mongoose.model('Account', AccountSchema);
