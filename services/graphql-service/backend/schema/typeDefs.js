
const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        _id: ID
        firstName: String
        lastName: String
        #accounts: [Account]
    }

    # input userInput {
    #     firstName: String
    #     lastName: String
    #     #accounts: [accountInput]
    # }

    # type Account {
    #     _id: ID
    #     owner: String
    #     name: String
    #     type: String
    #     subtype: String
    #     email: String
    #     credentials: credentials
    #     roles: [String]
    #     permissions: [String]
    # }

    # input accountInput {
    #     name: String
    #     type: String
    #     subtype: String
    #     email: String
    #     credentials: credentialsInput
    #     roles: [String]
    #     permissions: [String]
    # }

    type Repository {
        _id: ID
        owner: String
        name: String
        status: String
        members: [Membership]
    }

    type Membership {
        _id: ID
        owner: String
        credential: Credential
        roles: [String]
        permissions: [String]
    }

    type Credential {
        _id: ID
        owner: String
        email: String
        username: String
        password: String
    }

    # input credentialsInput {
    #     username: String
    #     password: String  
    # }

    type Query {
        users: [User]
        user(_id: String): User
        repositories: [Repository]
        memberships: [Membership]
        credentials: [Credential]
        # accounts: [Account]
        # account(_id: String): Account
        #getCredentialsFromAccountName(accountName: String): credentials
        gitAuthenticate(repo: String, username: String, password: String): Boolean
    }
    
    # type Mutation {
        # createUser(user: userInput): User
        # createAccount(account: accountInput): Account
        # setAccountOwner(account: String, owner: String): Account
    # }

`;

module.exports = typeDefs;
