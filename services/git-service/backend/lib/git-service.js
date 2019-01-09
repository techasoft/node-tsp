/**
 *    ===========
 *    git service
 *    ===========
 * 
 *    created 08/08/2018
 *    updated 08/08/2018
 * 
 */

//  ============== ATTENTION ==============
//
// WE MUST CLEAR THE .gitconfig SETTINGS FILE
// 
//  To rename the .gitconfig file on windows 
//  we have to end the filename with a dot(.)
//

const path = require('path');
const Server = require('node-git-server');
const axios = require('axios');

module.exports = {
    // start function
    start: function (options) {
        console.log(`Repos Location: ${path.resolve(__dirname, options.repo_location)}`);
        // create a repo server on 'platform/repos' directory
        const repos = new Server(path.resolve(__dirname, options.repo_location), {
            autoCreate: true,
            authenticate: (type, repo, user, next) => {
                // console.log(type, repo);
                // if (type == 'push') {
                return new Promise((resolve, reject) => {
                    user((username, password) => {
                        console.log(`(authenticate) git-service data: ${repo} ${username} ${password}`);
                        axios({
                            url: 'http://localhost:2000/graphql',
                            method: 'post',
                            data: {
                                // query: `
                                //         query {
                                //             getCredentialsFromAccountName(accountName:"TAS") {
                                //                 username
                                //                 password
                                //             }
                                //         }
                                // `
                                query: `
                                        query {
                                            gitAuthenticate(
                                                repo:"${repo}",
                                                username:"${username}",
                                                password:"${password}"
                                            )
                                        }
                                `

                            }
                        }).then((result) => {
                            // const remote_username = result.data.data.getCredentialsFromAccountName.username;
                            // const remote_password = result.data.data.getCredentialsFromAccountName.password;
                            // console.log(`username: ${remote_username}`);
                            // console.log(`password: ${remote_password}`);

                            console.log(`(after axios call) result: ${result.data.data.gitAuthenticate}`);
                            // if (username == remote_username && password == remote_password) {
                            if (result.data.data.gitAuthenticate) {
                                // if (username === 'apapasterg' && password === 'password') {
                                return resolve();
                            }
                            return reject("sorry you don't have access to this content");
                        });

                        // if (username == remote_username && password == remote_password) {
                        //     // if (username === 'apapasterg' && password === 'password') {
                        //     return resolve();
                        // }
                        // return reject("sorry you don't have access to this content");
                    });
                });
                // };

            }
        });

        repos.on('push', (push) => {
            console.log(`push ${push.repo}/${push.commit} (${push.branch})`);
            push.accept();
        });

        repos.on('fetch', (fetch) => {
            console.log(`fetch ${fetch.commit}`);
            fetch.accept();
        });

        repos.listen(options.port, () => {
            console.log(`Starting Git Service at http://localhost:${options.port}`)
        });

    },
    // stop function
    stop: function (options) {
        console.log('Stopping Git Service')
    }
}

