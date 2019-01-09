const mongoose = require('mongoose');

const User = require('../models/user');
const Account = require('../models/account');
const Repository = require('../models/repository');
const Membership = require('../models/membership');
const Credential = require('../models/credential');

const resolvers = {
    Query: {
        users: () => {
            return User.find()
                // .populate('accounts')
                .exec();
        },
        user: (parent, args, context, info) => {
            return User.findOne({ "_id": args._id })
                // .populate('accounts')
                .exec();
        },
        repositories: () => {
            return Repository.find()
                .populate({
                    path: 'members',
                    populate: {
                        path: 'credential'
                    }
                })
                // .populate('members')
                // .populate('members.credential')
                .exec();
        },
        memberships: () => {
            return Membership.find()
                .populate('credential')
                .exec();
        },
        credentials: () => {
            return Credential.find()
                .exec();
        },
        // accounts: () => {
        //     return Account.find()
        //         // .populate('owner') // only if ref: 'User' on model
        //         .exec();
        // },
        // account: (parent, args, context, info) => {
        //     return Account.findOne({ "_id": args._id })
        //         // .populate('owner')
        //         .exec();
        // },
        // getCredentialsFromAccountName: (parent, args, context, info) => {
        //     var username = null;
        //     var password = null;
        //     return User.findOne({ "accounts.name": { $regex: new RegExp(args.accountName) } })
        //         .exec()
        //         .then((result) => {
        //             result.accounts.forEach((account) => {
        //                 if ((account.name.includes(args.accountName))) {
        //                     username = account.credentials.username;
        //                     password = account.credentials.password;
        //                 };
        //             });
        //             return {
        //                 "username": username,
        //                 "password": password
        //             };
        //         });
        // },
        gitAuthenticate: (parent, args, context, info) => {
            console.log(`resolver data:`, args);
            // let ret = false;

            return Repository.findOne({ name: args.repo })
                .populate({
                    path: 'members',
                    populate: {
                        path: 'credential'
                    }
                })
                .exec()
                .then((result) => {
                    console.log('result:', result)
                    // return true
                    if (result != null) {
                        result.members.forEach((member) => {
                            console.log('username from DB   :', member.credential.username);
                            console.log('username from Query:', args.username);
                            console.log('password from DB   :', member.credential.password);
                            console.log('password from Query:', args.password);
                            if (member.credential.username == args.username &&
                                member.credential.password == args.password) {
                                console.log('will return true');
                                // ret = true
                                // return ret
                                return true
                            } else {
                                console.log('will return false - UN/PS not same')
                                return false
                            }
                            
                        });
                    } else {
                        console.log('will return false - repo not found')
                        return false
                    }
                });

            // return
            // return ret
            // return true
            // console.log('will return false - end of resolver')
            // return false
        }
    },
    // Mutation: {
    // createUser: (parent, args, context, info) => {
    //     const _id = new mongoose.Types.ObjectId();
    //     if (!args.user) {
    //         const user = new User({
    //             _id: _id
    //         });
    //         user.save();
    //         return user
    //     }
    //     if (args.user) {
    //         const userAccounts = [];
    //         let resultAccounts;
    //         if (args.user.accounts) {
    //             resultAccounts = args.user.accounts.slice();
    //             args.user.accounts.forEach((account) => {
    //                 account.owner = _id;
    //                 account._id = new mongoose.Types.ObjectId();
    //                 const newAccount = new Account(account);
    //                 newAccount.save();
    //                 userAccounts.push(account._id);
    //             })
    //         }
    //         const user = new User({
    //             _id: _id,
    //             firstName: args.user.firstName,
    //             lastName: args.user.lastName,
    //             accounts: userAccounts
    //         });
    //         user.save();
    //         const resultUser = {
    //             _id: _id,
    //             firstName: args.user.firstName,
    //             lastName: args.user.lastName,
    //             accounts: resultAccounts
    //         };
    //         return resultUser
    //     }
    // },
    // createAccount: (parent, args, context, info) => {
    //     // TODO: check if account exists
    //     const account = new Account(args.account);
    //     account._id = new mongoose.Types.ObjectId();
    //     account.save();
    //     return account
    // },
    // setAccountOwner: (parent, args, context, info) => {
    //     return Account.findByIdAndUpdate(args.account, { $set: { owner: args.owner } }, (err, account) => {
    //         User.findByIdAndUpdate(args.owner, { $push: { accounts: args.account } }).exec();
    //     }).exec();
    // }
    // }
};

module.exports = resolvers;
