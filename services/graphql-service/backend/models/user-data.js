
var User = {
    firstName: "Apostolos",
    lastName: "Papastergiou"
};


db.users.update(
    { _id: ObjectId("") },
    { $push: { accounts: "" } }
);



var user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: 'Apostolos',
    lastName: 'Papastergiou',
    accounts: []
});

user.save(function (err) {
    if (err) return handleError(err);

    var account = new Account({
        owner: user._id

    });

    account.save(function (err) {
        if (err) return handleError(err);
    });
});
