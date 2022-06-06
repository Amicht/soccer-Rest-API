const express = require('express');
const logic = require('../3-logic/logic-layer');
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
        const players = await dal.getAllPlayersAsync((err,players)=> logic.getPlayersFilter(players,req.query)
        .then(players => res.json(players)));
        //if(!players) return next(new ErrorModel(404,`No results`));
        //res.json(players);
    }
    catch(err){next(err)}
})

playersCtrl.get('/:id([0-9]+)',async (req,res,next)=>{
    try{
        dal.getPlayerByIdAsync(+req.params.id, (err, player)=> res.json(player));
    }
    catch(err){next(err)}
});

// currently only 'scorer' / 'assists'
playersCtrl.get('/top/:topParam',async (req,res,next)=> {
    dal.getAllPlayersAsync( (err, players)=> logic.getTopPlayer(players,req.params.topParam)
    .then(players => res.json(players)).catch(err => next(err)));
});

playersCtrl.get('/:name',async (req,res,next)=> {
    try{
        dal.getPlayerByNameAsync(JSON.stringify(req.params.name), (err, player)=> {
            if(player.length === 0) return next(new ErrorModel(404, 'player not found'));
            res.json(player)
        });
    }
    catch(err){next(err)}
});

module.exports = playersCtrl;