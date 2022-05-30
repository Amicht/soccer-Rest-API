const fs = require('fs');
const db = require('../db.json');

const leagues = ["La liga","Bundesliga","EPL","Serie A","Ligue 1","RFPL"];
const players = [];
const teams = [];

Object.values(db).forEach((lg,i) => {
    lg.forEach(t => {
        t.league = leagues[i];
        t.id = teams.length;
        t.players.forEach(p => {
            p.team = t.team;
            p.id = players.length;
            players.push(p);
        })
        delete t.players;
        teams.push(t);
    })
});
fs.writeFileSync('./teams.json',JSON.stringify(teams,null,4));
fs.writeFileSync('./players.json',JSON.stringify(players,null,4));
