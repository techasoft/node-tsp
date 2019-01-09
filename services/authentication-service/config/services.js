module.exports = {
    services: [
        {
            service_name: 'AuthenticationService',
            service_module: '../lib/authentication-service', // relative from bin directory
            service_options: {
                http_host: '127.0.0.1',
                http_port: 10000,
                public_location: './public',
                db_name: 'auth-registry',
                db_host: '127.0.0.1',
                db_port: 27017
            },
            isActive: true
        }
    ]
}