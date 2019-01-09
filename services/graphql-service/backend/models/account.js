/***
 * Account model
 */

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

var AccountSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId }, // manually create id
    owner: { type: mongoose.Schema.Types.ObjectId }, // ref: 'User' },
    name: { type: String },
    type: { type: String, enum: ['GIT'] },
    subtype: { type: String },
    email: { type: String },
    credentials: {
        username: { type: String },
        password: { type: String }
    },
    roles: [
        { type: String }
    ],
    permissions: [
        { type: String }
    ]
});

// create unique index on field email
// AccountSchema.index({ email: 1 }, { unique: true });

// export Account model
var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
