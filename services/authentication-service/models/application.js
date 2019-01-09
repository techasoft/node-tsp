/** 
 * Application model
*/

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var ApplicationSchema = mongoose.Schema({
  appName: {
    type: String,
    required: true
  },
  appSecret: {
    type: String,
    required: true
  },
  appOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// export model Application
var Application = module.exports = mongoose.model('Application', ApplicationSchema);
