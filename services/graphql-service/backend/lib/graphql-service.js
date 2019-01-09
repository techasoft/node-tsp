/** 
 *   ===============
 *   graphql service
 *   ===============
 * 
 *   created: 03/08/2018 
 *   updated: 03/08/2018
 * 
*/

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

module.exports = {
    // start function
    start: function (options) {
        // connect to database
        mongoose.connect(options.db_url, options.db_params);

        // exit process if connection to database failed
        mongoose.connection.on('error', function (err) {
            console.log('Connection to MongoDB failed. ' + err);
            console.log('Exit process');
            process.exit(1);
        });

        // notify if connected
        mongoose.connection.on('connected', () => {
            console.log(`Connected to DB`);
        });

        // notify if disconnected
        mongoose.connection.on('disconnected', () => {
            console.log(`Disconnected from DB`);
        });

        // create graphql server
        const server = new ApolloServer(options.apollo_params);

        // start server
        server.listen({ port: options.port }).then(({ url }) => {
            console.log(`Starting GraphQL Service at ${url}`);
            // console.log(`🚀  Server ready at ${url}`);
        });

    },
    // stop function
    stop: function (options) {
        console.log('Stopping GraphQL Service')
    }
}

