const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: 'football'
});

// CRUD functions
const getAllTeamsAsync = async cb => db.query('SELECT * FROM teams', cb);
const getAllPlayersAsync = async cb => db.query('SELECT * FROM players', cb);
const getPlayerByNameAsync = async (name, cb) => db.query(`SELECT * FROM players WHERE player = ${name}`, cb);
const getPlayerByIdAsync = async (id, cb) => db.query(`SELECT * FROM players WHERE id = ${id}`, cb);


module.exports = {
    getAllPlayersAsync,
    getAllTeamsAsync,
    getPlayerByIdAsync,
    getPlayerByNameAsync
}