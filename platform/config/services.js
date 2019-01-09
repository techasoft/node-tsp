module.exports = {
    version: {
        LOGO_STRING: "tsp/v0.0.2",
        LATEST_UPDATE_STRING: "2018-08-08"
    },
    services: [
        {
            service_name: 'Git Service',
            service_module: '../services/git-service/backend/lib/git-service', // relative to bin directory
            service_options: {
                port: 2100,
                repo_location: '../../../../platform/repos'
            },
            isActive: false
        },
        {
            service_name: 'GraphQL Service',
            service_module: '../services/graphql-service/backend/lib/graphql-service', // relative to bin directory
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
                    schema: require('../../services/graphql-service/backend/schema/schema'),
                    playground: {
                        settings: {
                            'editor.theme': 'dark', // also light
                        },
                    },
                },
            },
            isActive: false
        },
        {
            service_name: 'Proxy Service',
            service_module: '../services/proxy-service/backend/lib/proxy-service', // relative to bin directory
            service_options: {
                proxy_port: 3000,
                proxy_routes: [
                    { url: 'www.techasol.gr', target: 'http://127.0.0.1:8000' },
                    { url: 'techasol.gr', target: 'http://127.0.0.1:8000' },
                    { url: 'www.metaco.gr', target: 'http://127.0.0.1:8001' },
                    { url: 'metaco.gr', target: 'http://127.0.0.1:8001' },
                    { url: 'www.agoralive.gr', target: 'http://127.0.0.1:8002' },
                    { url: 'agoralive.gr', target: 'http://127.0.0.1:8002' },
                    { url: 'www.techasoft.gr', target: 'http://127.0.0.1:8003' },
                    { url: 'techasoft.gr', target: 'http://127.0.0.1:8003' },
                    // { url: 'www.site1.gr', target: 'http://127.0.0.1:8000' },
                    // { url: 'www.site2.gr', target: 'http://127.0.0.1:8001' }
                ]
            },
            isActive: false
        },
        {
            service_name: 'Web Site Service',
            service_module: '../services/web-site-service/backend/lib/web-site-service', // relative from bin directory
            service_options: {
                site_name: 'techasol',
                resource_locations: [
                    { root: '/', path: './platform/www/www.techasol.gr/public' }, // relative from (tsp) directory
                    { root: '/files', path: './platform/www/www.techasol.gr/static/files' },  // relative from (tsp) directory
                ],
                directory_index_locations: [
                    { root: '/files', path: './platform/www/www.techasol.gr/static/files' },
                ],
                http_host: '127.0.0.1',
                http_port: 8000
            },
            isActive: true
        },
        {
            service_name: 'Web Site Service',
            service_module: '../services/web-site-service/backend/lib/web-site-service', // relative from bin directory
            service_options: {
                site_name: 'metaco',
                resource_locations: [
                    { root: '/', path: './platform/www/www.metaco.gr/public' }, // relative from (tsp) directory
                ],
                http_host: '127.0.0.1',
                http_port: 8001
            },
            isActive: true
        },
        {
            service_name: 'Authentication Service',
            service_module: '../services/authentication-service/backend/lib/authentication-service', // relative to bin directory
            service_options: {
                http_host: '127.0.0.1',
                http_port: 10000,
                public_location: './platform/www/authentication-service/public', // relative from tsp directory
                db_name: 'auth-registry',
                db_host: '127.0.0.1',
                db_port: 27017
            },
            isActive: false
        },
    ]
}



