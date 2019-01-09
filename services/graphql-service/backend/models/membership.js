/***
 * Membership model
 */

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

var MembershipSchema = mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId }, // manually create id
    owner: { type: mongoose.Schema.Types.ObjectId }, // ref: 'User' },
    credential: { type: mongoose.Schema.Types.ObjectId, ref: 'Credential' },
    roles: [{ type: String }],
    permissions: [{ type: String }]
});

// MembershipSchema.index({ _id: 1 }, { unique: true });

// export Membership model
var Membership = mongoose.model('Membership', MembershipSchema);

module.exports = Membership;
