/***
 * Repository model
 */

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

var RepositorySchema = mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId }, // manually create id
    owner: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    status: { type: String, enum: ['ACTIVE'] },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Membership' }]
});

// create unique index on field name
RepositorySchema.index({ name: 1 }, { unique: true });

// export Repository model
var Repository = mongoose.model('Repository', RepositorySchema);

module.exports = Repository;
