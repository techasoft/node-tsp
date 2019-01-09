module.exports = {
    services: [
        {
            service_name: 'Proxy Service',
            service_module: '../lib/proxy-service', // relative to bin directory
            service_options: {
                proxy_port: 2000,
                proxy_routes: [
                    { url: 'www.site1.gr', target: 'http://127.0.0.1:8000' }
                ]
            },
            isActive: true
        }
    ]
}
