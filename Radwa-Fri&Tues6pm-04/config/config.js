const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    database: "route",
    user: "root",
    password:"mysql"
});

module.exports={
    connection,
};