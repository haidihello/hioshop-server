const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'haifeng',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '10.165.131.14',
    port: '3306',
    user: 'root',
    password: 'root',
    dateStrings: true
};
