const ErrorModel = require('../models/error-model');


const getPlayersFilter = async(data, search) => {
    //let data = await dal.getAllPlayersAsync();
    if(search.team) data = data.filter(p => p.team === search.team);
    if(search.pos) data = data.filter(p => p.pos === search.pos);
    if(search.minGoals) data = data.filter(p => p.goals >= search.minGoals);
    if(search.maxGoals) data = data.filter(p => p.goals <= search.maxGoals);
    if(search.minAsts) data = data.filter(p => p.assists >= search.minAsts);
    if(search.maxAsts) data = data.filter(p => p.assists <= search.maxAsts);
    if(data.length===0) return null;
    return data;
}

const getTopPlayer = async(data, searchParam)=>{
    let result;
    if(searchParam === 'scorer') result = topScorerAssists(data,'goals');
    if(searchParam === 'assists') result = topScorerAssists(data,'assists');
    if(!result) throw new ErrorModel(404, 'route dont exists');
    return result;
}

function topScorerAssists(data, param){
    let counter = 0;
    let player = [];
    data.forEach(p => {
        if(p[param] > counter){
            player = [p];
            counter = p[param];
        }
        else if(p[param] === counter) player.push(p);
    })
    return player;
};

module.exports = {
    getPlayersFilter,
    getTopPlayer
}