/** 
 *   ==================
 *   webhosting service
 *   ==================
 * 
 *   created: 02/02/2018 
 *   updated: 03/06/2018
 * 
*/

const http = require('http');
const express = require('express');
const serveIndex = require('serve-index')
const compression = require('compression');

module.exports = {
    // start function
    start: function (options) {
        // main service
        const WebHostingService = express();

        // middlewares
        WebHostingService.use(compression());

        // routes
        // const signinRoutes = require('../routes/signin');
        // WebHostingService.use('/signin', signinRoutes);

        // static files
        if (options.resource_locations) {
            options.resource_locations.forEach(function (location) {
                WebHostingService.use(location.root, express.static(location.path));
            });
        }

        // directory index 
        if (options.directory_index_locations) {
            options.directory_index_locations.forEach(function (location) {
                WebHostingService.use(location.root, serveIndex(location.path, { 'icons': true }));
            });
        }

        // http server
        const WebHostingHttpServer = http.createServer(WebHostingService);
        WebHostingHttpServer.listen(options.http_port, options.http_host, () => {
            console.log(`Starting Web Site Service for [${options.site_name}] at ${WebHostingHttpServer.address().address}:${WebHostingHttpServer.address().port}`);
        });
    },
    // stop function
    stop: function (options) {
        console.log(`Stopping Web Site Service for [${options.site_name}]`);
    }
}

