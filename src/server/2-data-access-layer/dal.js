const fs = require('fs').promises;

async function getAllPlayersAsync(){
    return JSON.parse(await fs.readFile('./src/server/1-database/players.json','utf-8'));
}

async function getAllTeamsAsync(){
    return JSON.parse(await fs.readFile('./src/server/1-database/teams.json','utf-8'));
}

module.exports = {
    getAllPlayersAsync,
    getAllTeamsAsync
}