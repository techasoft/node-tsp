/***
 * User model
 */

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId }, // manually create id
    firstName: { type: String },
    lastName: { type: String },
    // accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]
});

// create unique index on field email
// UserSchema.index({ _id: 1 }, { unique: true });

// export User model
var User = mongoose.model('User', UserSchema);

module.exports = User;
