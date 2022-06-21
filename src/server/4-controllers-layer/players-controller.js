const express = require('express');
const dal = require('../2-data-access-layer/dal');
const ErrorModel = require('../models/error-model');
const playersCtrl = express.Router();

playersCtrl.get('/',async (req,res,next)=> {
    try{
        dal.getAllPlayersAsync((err, players) => res.json(players));
    }
    catch(err){next(err)}
});

playersCtrl.get("/filter",async (req,res,next)=> {
    try{
        const minGoals = req.query.minGoals || 0;
        const minassists = req.query.minAssists || 0;
        dal.getPlayersByStats(minGoals,minassists,(err,players)=> res.json(players));
    }
    catch(err){next(err)}
})

playersCtrl.get('/team/:team',async (req,res,next)=>{
    try{
        if(!req.params.team) return next(new ErrorModel(404, 'param dont exists'));
        dal.getPlayersByTeam(req.params.team, (err, players)=> res.json(players));
    }
    catch(err){next(err)}
});
playersCtrl.get('/position/:pos',async (req,res,next)=>{
    try{
        if(!req.params.pos) return next(new ErrorModel(404, 'param dont exists'));
        dal.getPlayersByPos(req.params.pos, (err, players)=> res.json(players));
    }
    catch(err){next(err)}
});


// currently only 'scorer' / 'assists'
playersCtrl.get('/top/:topParam',async (req,res,next)=> {
    try{
        if(req.params.topParam==='assists'){
            dal.getTopAssist((err,player) => res.json(player[0]));
        }
        else if(req.params.topParam==='scorrer'){
            dal.getTopScorrer((err,player) => res.json(player[0]));
        }
        else{
            return next(new ErrorModel(404, 'param doesnt exists'))
        }
    }catch(err){ next(err) }
});

playersCtrl.get('/:id([0-9]+)',async (req,res,next)=>{
    try{
        dal.getPlayerByIdAsync(req.params.id, (err, player) => {
            if(!player) return next(new ErrorModel(404, `Player with id ${req.params.id} dont exist`))
            res.json(player[0]);
        });
    }
    catch(err){next(err)}
});

playersCtrl.get('/:name',async (req,res,next)=> {
    try{
        dal.getPlayerByNameAsync(req.params.name, (err, player)=> {
            if(player.length === 0) return next(new ErrorModel(404, 'player not found'))
            if(err) return next(err);
            res.json(player[0]);
        });
    }
    catch(err){next(err)}
});

module.exports = playersCtrl;