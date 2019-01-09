
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;
