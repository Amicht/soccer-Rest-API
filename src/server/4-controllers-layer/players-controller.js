const express = require('express');
const logic = require('../3-logic/logic-layer');
const ErrorModel = require('../models/error-model');
const playersCtrl = express.Router();

playersCtrl.get('/',async (req,res,next)=> {
    try{
        const players = await logic.getAllPlayersAsync();
        if(!players) next(new ErrorModel(400,'No results'));
        res.json(players);
    }
    catch(err){next(err)}
});

playersCtrl.get("/filter",async (req,res,next)=> {
    try{
        const players = await logic.getPlayersFilter(req.query);
        if(!players) next(new ErrorModel(404,`No results`));
        res.json(players);
    }
    catch(err){next(err)}
})

playersCtrl.get('/:id([0-9]+)',async (req,res,next)=>{
    try{
        const players = await logic.getPlayerByIDAsync(+req.params.id);
        if(!players) next(new ErrorModel(404, `Player id ${req.params.id} not found`));
        res.json(players);
    }
    catch(err){next(err)}
})

playersCtrl.get('/:name',async (req,res,next)=> {
    try{
        const player = await logic.getPlayerByNameAsync(req.params.name);
        if(!player) next(new ErrorModel(404,`No results for ${req.params.name}`));
        res.json(player);
    }
    catch(err){next(err)}
});

module.exports = playersCtrl;