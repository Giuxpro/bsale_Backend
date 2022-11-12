require('dotenv').config();
const mysql = require('mysql');
const{ DB_USER, DB_PASSWORD, DB_HOST, DATABASE } = process.env;

/* Creating a connection to the database. */
const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE
}

const db = mysql.createPool(config);

// keep the connection alive
setInterval(() =>{
   db.query(`SELECT 1`);
}, 4500);

module.exports = db;

