const express = require('express');
const dotenv = require('dotenv');
const teamsCtrl = require('./src/server/4-controllers-layer/teams-controller');
const playersCtrl = require('./src/server/4-controllers-layer/players-controller');
const errorHandler = require('./src/server/middleware/errors-handler');
const ErrorModel = require('./src/server/models/error-model');

dotenv.config();
const server = express();
server.use(express.json());

server.use('/api/teams',teamsCtrl);
server.use('/api/players',playersCtrl);
server.use('*',(req,res,next)=> next(new ErrorModel(404,'Route not found')));
server.use(errorHandler);

server.listen(process.env.PORT, ()=> console.log(`Listening...`));