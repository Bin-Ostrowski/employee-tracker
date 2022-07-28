const mysql = require('mysql2');

//connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    //your mysql username,
    user: 'root',
    //your Mysql password
    password: 'Mysql-0892',
    database: 'employees'
}, );

connection.connect(function (err) {
    if (err) throw err;
})

module.exports = connection;