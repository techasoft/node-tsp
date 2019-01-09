/************************** SIGNIN TEST DATA ******************************* */

/**
 * Drop old database
 */
db.dropDatabase();

/**
 * Create database and insert documents
 */

/**
* users
*/
db.users.insert({
    "email": "master@auth-service.techasoft.gr",
    "firstName": "Master",
    "lastName": "User"
});
var masterUser = db.users.findOne({ "email": "master@auth-service.techasoft.gr" });

/**
 * applications
 */
db.applications.insert({
    "appName": "techasoft-authentication-service",
    "appSecret": "auth-service-secret-key",
    "appOwner": masterUser._id
});
var masterApplication = db.applications.findOne({ "appName": "techasoft-authentication-service" });

/**
 * accounts
 */
db.accounts.insert({
    "accType": "master",
    "user": masterUser._id,
    "application": masterApplication._id,
    "userName": "master",
    "password": "password",
    "roles": ["master", "admin", "owner"]
});

/**
 * Print documents
 */
db.users.find({}).forEach(function (doc) {
    printjson(doc);
});
db.applications.find({}).forEach(function (doc) {
    printjson(doc);
});
db.accounts.find({}).forEach(function (doc) {
    printjson(doc);
});




// db.credentials.insert({
//     "userName": "user-0",
//     "password": "password-0",
//     "roles": ["user"]
// });

// /**
//  * Get documents and update references
//  */
// var docUserApostolos = db.users.findOne({ "firstName": "Apostolos" });
// var docUserSofia = db.users.findOne({ "firstName": "Sofia" });
// var docApplicationAuth = db.applications.findOne({ "appName": "Authentication Service" });
// var docApplicationwww = db.applications.findOne({ "appName": "www.agoralive.gr" });
// var docCredential0 = db.credentials.findOne({ "userName": "user-0" });
// var docCredential1 = db.credentials.findOne({ "userName": "user-0" });

// db.users.update({ "firstName": "Apostolos" },
//     {
//         $set: {
//             "applications": [docApplicationAuth._id, docApplicationwww._id],
//             "credentials": [docCredential0._id, docCredential1._id]
//         }
//     },
//     { upsert: true }
// );
// db.applications.update({ "appName": "Authentication Service" },
//     {
//         $set: {
//             "users": [docUserApostolos._id]
//         }
//     },
//     { upsert: true }
// );
// db.credentials.update({ "userName": "user-0" },
//     {
//         $set: {
//             "user": docUserApostolos._id,
//             "application": docApplicationAuth._id
//         }
//     },
//     { upsert: true }
// );
