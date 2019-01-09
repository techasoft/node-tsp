/** 
 *   =============
 *   proxy service
 *   =============
 * 
 *   created: 03/08/2018 
 *   updated: 03/08/2018
 * 
*/

module.exports = {
    // start function
    start: function (options) {
        // start hermes proxy
        const proxy = require('redbird')({ port: options.proxy_port });

        // register routes
        options.proxy_routes.forEach(route => {
            proxy.register(route.url, route.target);
        });

        console.log('Starting Proxy Service');
    },
    // stop function
    stop: function (options) {
        // console.log(`Stopping WebHostingService for [${options.site_name}]`);
        console.log('Stopping Proxy Service')
    }
}
