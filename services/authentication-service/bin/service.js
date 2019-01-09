/** 
 *   ======================
 *   authentication service
 *   ======================
 * 
 *   created: 02/02/2018 
 *   updated: 30/04/2018
 * 
*/

console.log(`======================`);
console.log(`authentication service`);
console.log(`======================`);

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
