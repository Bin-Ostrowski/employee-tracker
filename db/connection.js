const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username,
        user: 'root',
        //your Mysql password
        password: 'Mysql-0892',
        database: 'election'
    },
);

module.exports = db;