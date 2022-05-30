const fs = require('fs');
const db = require('../src/server/1-database/db.json');

const leagues = ["La liga","Bundesliga","EPL","Serie A","Ligue 1","RFPL"];
const players = [];
const teams = [];

Object.values(db).forEach((lg,i) => {
    lg.forEach(t => {
        t.league = leagues[i];
        t.id = teams.length;
        t.players.forEach(p => {
            if(p.player === "") return;
            p.team = t.team;
            p.id = players.length;
            players.push(p);
        })
        delete t.players;
        teams.push(t);
    })
});
fs.writeFileSync('./src/server/1-database/teams.json',JSON.stringify(teams,null,4));
fs.writeFileSync('./src/server/1-database/players.json',JSON.stringify(players,null,4));
