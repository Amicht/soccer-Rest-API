/*
const builder = require('./builder');
const scrapper = require('./web-scrapping');
const fs = require('fs/promises');
const leagues = ["La_liga","Bundesliga","EPL","Serie_A","Ligue_1","RFPL"];

const leagueData = {};

(async function leaguesScrap(idx){
    leagueData[leagues[idx]]= await scrapper.getLeagueData(builder.leagueUrl(leagues[idx]));

    if(++idx<leagues.length){
        await leaguesScrap(idx);
    }
    return leagueData;
})(0)
    .then(data => fs.writeFile('db.json',JSON.stringify(data,null,4)));
