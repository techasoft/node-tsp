/**
 *    ===========
 *    git service
 *    ===========
 * 
 *    created 08/08/2018
 *    updated 08/08/2018
 * 
 */

console.log(`===========`);
console.log(`git service`);
console.log(`===========`);

const services = require('../config/services').services;

// starting services as defined in config file
services.forEach(function (service) {
    if (service.isActive) {
        var serviceModule = require(service.service_module);
        serviceModule.start(service.service_options);
    }
});

// stopping services in reverse order
process.on('SIGINT', () => {
    services.reverse().forEach(function (service) {
        if (service.isActive) {
            var serviceModule = require(service.service_module);
            serviceModule.stop(service.service_options);
        }
    });
    console.log('Bye.');
    process.exit(0);
});
