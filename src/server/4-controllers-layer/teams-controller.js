const express = require('express');
const teamsCtrl = express.Router();
const logic = require('../3-logic/logic-layer');
const ErrorModel = require('../models/error-model');


teamsCtrl.get('/',async (req,res,next)=> {
    try{
        const teams = await logic.getAllTeamsAsync();
        if(!teams) next(new ErrorModel(404,'No results'));
        res.json(teams);
    }
    catch(err){next(err)}
});

teamsCtrl.get('/:id([0-9]+)',async (req,res,next)=>{
    try{
        const team = await logic.getTeamByIDAsync(+req.params.id);
        if(!team) next(new ErrorModel(404,`No results for id ${req.params.id}`));
        res.json(team);
    }
    catch(err){next(err)}
});

teamsCtrl.get('/:name',async (req,res,next)=> {
    try{
        const team = await logic.getTeamByNameAsync(req.params.name);
        if(!team) next(new ErrorModel(404,`No results for ${req.params.name}`));
        res.json(team);
    } 
    catch(err){next(err)}
});

module.exports = teamsCtrl;