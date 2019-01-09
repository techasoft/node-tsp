/***
 * Membership model
 */

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

var CredentialSchema = mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId }, // manually create id
    owner: { type: mongoose.Schema.Types.ObjectId }, // ref: 'User' },
    email: { type: String },
    username: { type: String },
    password: { type: String }
});

// CredentialSchema.index({ email: 1 }, { unique: true });

// export Membership model
var Credential = mongoose.model('Credential', CredentialSchema);

module.exports = Credential;
