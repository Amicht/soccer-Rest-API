const mysql = require('mysql');
const players = require('../src/server/1-database/players.json');
const teams = require('../src/server/1-database/teams.json');
const season = "2021-2022";

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: 'football'
});

// insert all teams & players to database 

function addPlayer(p){
    db.query("INSERT into players (`no`, `player`, `pos`, `apps`, `mins`, `goals`, `assists`, `team`, `season`) VALUES (?,?,?,?,?,?,?,?,?)",
 [p.no, p.player, p.pos, p.apps, p.mins, p.goals,p.assists, p.team, season]);
};
function addTeam(t){
    db.query("INSERT into teams (`no`, `team`, `matches`, `wins`, `draws`,  `loses`, `goals_for`, `goals_against`, `pts`, `league`, `season`) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [t.no, t.team, t.matches, t.wins, t.draws, t.loses, t.goals_for, t.goals_against, t.pts, t.league, season]);
};

const addAllPlayers = () => players.forEach(p => addPlayer(p));
const addAllTeams = () => teams.forEach(t => addTeam(t));

const insertDB = () => {addAllPlayers(); addAllTeams();}


insertDB();

module.exports = insertDB
