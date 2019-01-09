module.exports = {
    services: [
        {
            service_name: 'GraphQL Service',
            service_module: '../lib/graphql-service', // relative to bin directory
            service_options: {
                port: 2000,
                db_url: 'mongodb://localhost:27017/tasDB',
                db_params: {
                    useNewUrlParser: true,
                    socketTimeoutMS: 0,
                    keepAlive: true,
                    reconnectTries: 1000,
                    poolSize: 1
                },
                apollo_params: {
                    // typeDefs: require('../schema/typeDefs'),
                    // resolvers: require('../schema/resolvers'),
                    schema: require('../schema/schema'),
                    playground: {
                        settings: {
                            'editor.theme': 'dark' //'light',
                        },
                    },
                },
                params: {
                    api_key: '4e911a064e43b9cd6fbb3137c572d89a',
                    include_adult: false,
                }
            },
            isActive: true
        }
    ]
}
