/** 
 *   ===========================
 *   techasoft services platform
 *   ===========================
 * 
 *   created: 02/02/2018 
 *   updated: 08/08/2018
 * 
 *   If setInterval() is enabled, run inside tsp directory: 
 *   node --expose-gc bin\tsp.js or
 *   pm2 start bin/tsp.js -n tsp -i 2 --node-args="--expose-gc"
*/
// const TSP_VERSION = {
//     LOGO_STRING: "tsp/v0.0.2",
//     LATEST_UPDATE_STRING: "[2018-08-08]"
// }

const version = require('../platform/config/services').version;
const services = require('../platform/config/services').services;

process.title = version.LOGO_STRING;
// setInterval(global.gc, 30000);

console.log(`===========================`);
console.log(`techasoft services platform`);
console.log(`   --- [${version.LOGO_STRING}] ---   `);
console.log(`   --- [${version.LATEST_UPDATE_STRING}] ---   `);
console.log(`===========================`);
// console.log(`Worker process [${process.pid}] started...`);

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
