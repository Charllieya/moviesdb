const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "password",
    database: "csmith_moviesdb",
    socketPath: "/tmp/mysql.sock",
});

module.exports = pool;