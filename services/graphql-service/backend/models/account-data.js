var Account = {
    name: "Git Account",
    type: "GIT",
    email: "apapasterg@gmail.com",
    credentials: {
        username: "apapasterg",
        password: "qwe890ap"
    },
    roles: ["owner", "admin"],
    permissions: ['R', 'W']
}

db.accounts.update(
    { _id: ObjectId("") },
    { $set: { owner: ObjectId("") } }
);
