const express = require('express');
const teamsCtrl = express.Router();
const dal = require('../2-data-access-layer/dal');
const ErrorModel = require('../models/error-model');


teamsCtrl.get('/',async (req,res,next)=> {
    try{
        dal.getAllTeamsAsync((err,teams) => {
            if(!teams) return next(new ErrorModel(404,'No results'));
            res.json(teams);
        });
    }
    catch(err){next(err)}
});

teamsCtrl.get('/:id([0-9]+)',async (req,res,next)=>{
    try{
        dal.getTeamByIdAsync(+req.params.id, (err, team)=> {
            if(!team) return next(new ErrorModel(404,`No results for id ${req.params.id}`));
            res.json(team[0]);
        });
    }
    catch(err){next(err)}
});

teamsCtrl.get('/:name',async (req,res,next)=> {
    try{
        dal.getTeamByNameAsync(req.params.name,(err, team)=> {
            if(!team) return next(new ErrorModel(404,`No results for ${req.params.name}`));
            res.json(team[0]);
        });
    } 
    catch(err){next(err)}
});

module.exports = teamsCtrl;