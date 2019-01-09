/** 
 *   ======================
 *   authentication service
 *   ======================
 * 
 *   created: 02/02/2018 
 *   updated: 30/04/2018
 * 
*/

const VERSION = {
    LOGO_STRING: "V0.0.1",
    API_STRING: 'v01'
}
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');

// main service
const AuthService = express();

// middlewares
AuthService.use(bodyParser.json()); // for parsing application/json
AuthService.use(bodyParser.urlencoded({ // for parsing application/x-www-form-urlencoded
    extended: true
}));
AuthService.use(cors());
AuthService.use(compression());

// routes
const appAdminRoutes = require('../routes/app-admin-routes');
const userRoutes = require('../routes/user-routes');
AuthService.use(`/api/${VERSION.API_STRING}/appAdmin`, appAdminRoutes);
AuthService.use(`/api/${VERSION.API_STRING}/user`, userRoutes);

module.exports = {
    // start function
    start: function (options) {
        // connect to database
        mongoose.connect(`mongodb://${options.db_host}:${options.db_port}/${options.db_name}`, {
            socketTimeoutMS: 0,
            keepAlive: true,
            reconnectTries: 1000,
            poolSize: 1
        }).catch(err => {
            console.log(`error: ${err}`);
        });
        // notify on connect
        mongoose.connection.on('connected', () => {
            console.log(`Connected to ${options.db_name}`);
        });
        // notify on disconnect
        mongoose.connection.on('disconnected', () => {
            console.log(`Disconnected from ${options.db_name}`);
        });
        // static files (fallthrough route)
        AuthService.use(express.static(options.public_location));
        // start auth-http-server
        const AuthServiceHttpServer = http.createServer(AuthService);
        AuthServiceHttpServer.listen(options.http_port, options.http_host, () => {
            console.log(`Starting Authentication Service ${VERSION.LOGO_STRING} at ${AuthServiceHttpServer.address().address}:${AuthServiceHttpServer.address().port}`);
        });
    },
    // stop function
    stop: function (options) {
        // disconnect from database
        mongoose.connection.close(function () {
        });
        console.log('Stopping Authentication Service');
    }
}

