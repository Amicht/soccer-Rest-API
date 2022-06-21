const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: 'football'
});

// GET queries
const getAllTeamsAsync = async cb => db.query('SELECT * FROM teams', cb);
const getTeamByIdAsync = async (id, cb) => db.query("SELECT * FROM teams WHERE `id` = ?" ,[id], cb);
const getTeamByNameAsync = async (name, cb) => db.query("SELECT * FROM teams WHERE `team` = ?",[name], cb);

const getAllPlayersAsync = async cb => db.query('SELECT * FROM players', cb);
const getPlayerByNameAsync = async (name, cb) => db.query("SELECT * FROM players WHERE `player` = ?",[name], cb);
const getPlayerByIdAsync = async (id, cb) => db.query("SELECT * FROM players WHERE `id` = ?" ,[id], cb);
const getTopScorrer = async (cb) => db.query("SELECT * FROM players ORDER BY `goals` DESC LIMIT 1", cb);
const getTopAssist = async (cb) => db.query("SELECT * FROM players ORDER BY `assists` DESC LIMIT 1", cb);
const getChampTeams = async (cb) => db.query("SELECT * FROM teams WHERE no = 1", cb);
const getPlayersByStats = async (minGoals, minAssists,cb) => db.query("SELECT * FROM players WHERE `goals`>=? AND `assists`>= ?",[minGoals,minAssists], cb);
const getPlayersByTeam = async (team,cb) => db.query("SELECT * FROM players WHERE `team` = ?",[team], cb);
const getPlayersByPos = async (pos,cb) => db.query("SELECT * FROM players WHERE `pos` =?",[pos], cb);

module.exports = {
    getTeamByIdAsync,
    getTeamByNameAsync,
    getAllPlayersAsync,
    getAllTeamsAsync,
    getPlayerByIdAsync,
    getPlayerByNameAsync,
    getTopAssist,
    getTopScorrer,
    getChampTeams,
    getPlayersByStats,
    getPlayersByTeam,
    getPlayersByPos
}