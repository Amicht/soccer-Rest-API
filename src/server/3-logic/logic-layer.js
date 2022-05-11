const dal = require('../2-data-access-layer/dal');

const getAllPlayersAsync = async() => dal.getAllPlayersAsync()
.then(res => res? res:null);

const getPlayerByIDAsync = async(id)=> dal.getAllPlayersAsync()
    .then(res => res.find(p => p.id === id)).then(res => res?res:null);

const getPlayerByNameAsync = async(name) => dal.getAllPlayersAsync()
    .then(res => res.find(t => t.player === name)).then(res => res?res:null);

const getAllTeamsAsync = async() => 
    dal.getAllTeamsAsync().then(res => res?res:null);

const getTeamByIDAsync = async(id) => dal.getAllTeamsAsync()
    .then(res => res.find(t => t.id === id)).then(res=> res?res:null);

const getTeamByNameAsync = async(name) => dal.getAllTeamsAsync()
    .then(res=>res.find(t => t.team === name)).then(res=>res?res:null);

async function getPlayersFilter(search){
    let data = await dal.getAllPlayersAsync();
    if(search.team) data = data.filter(p => p.team === search.team);
    if(search.pos) data = data.filter(p => p.pos === search.pos);
    if(search.minGoals) data = data.filter(p => p.goals >= search.minGoals);
    if(search.maxGoals) data = data.filter(p => p.goals <= search.maxGoals);
    if(search.minAsts) data = data.filter(p => p.assists >= search.minAsts);
    if(search.maxAsts) data = data.filter(p => p.assists <= search.maxAsts);
    if(data.length===0) return null;
    return data;
}

module.exports = {
    getPlayersFilter,
    getAllPlayersAsync,
    getAllTeamsAsync,
    getTeamByIDAsync,
    getPlayerByIDAsync,
    getPlayerByNameAsync,
    getTeamByNameAsync
}