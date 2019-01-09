module.exports = {
    services: [
        {
            service_name: 'Web Site Service',
            service_module: '../lib/web-site-service', // relative from bin directory
            service_options: {
                site_name: 'test site',
                resource_locations: [
                    { root: '/', path: '../../../platform/www/www.test.gr/public/static' }, // relative from (tsp) directory
                    // { root: '/files', path: '../../../platform/www/www.techasol.gr/static/files' },  // relative from (tsp) directory
                ],
                // directory_index_locations: [
                //     { root: '/files', path: '../../../platform/www/www.techasol.gr/static/files' },
                // ],
                http_host: '127.0.0.1',
                http_port: 7000
            },
            isActive: false
        },
        {
            service_name: 'Web Site Service',
            service_module: '../lib/web-site-service', // relative from bin directory
            service_options: {
                site_name: 'techasol',
                resource_locations: [
                    { root: '/', path: '../../../platform/www/www.techasol.gr/public' }, // relative from (tsp) directory
                    { root: '/files', path: '../../../platform/www/www.techasol.gr/static/files' },  // relative from (tsp) directory
                ],
                directory_index_locations: [
                    { root: '/files', path: '../../../platform/www/www.techasol.gr/static/files' },
                ],
                http_host: '127.0.0.1',
                http_port: 8000
            },
            isActive: true
        },
        {
            service_name: 'Web Site Service',
            service_module: '../lib/web-site-service', // relative from bin directory
            service_options: {
                site_name: 'metaco',
                resource_locations: [
                    { root: '/', path: '../../../platform/www/www.metaco.gr/public' }, // relative from (tsp) directory
                ],
                http_host: '127.0.0.1',
                http_port: 8001
            },
            isActive: false
        }
    ]
}



