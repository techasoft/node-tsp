module.exports = {
    services: [
        {
            service_name: 'Git Service',
            // service_module: '../services/git-service/backend/lib/git-service', // relative to bin directory
            service_module: '../lib/git-service', // relative to bin directory
            service_options: {
                port: 2100,
                repo_location: '../../../../platform/repos'
            },
            isActive: true
        },
    ]
}
