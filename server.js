import config, { nodeEnv, logStars } from './config';
import express from 'express';
import apiRouter from './api';


const server = express();
// set the view engine to ejs
server.set('view engine', 'ejs');

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




server.use('/api', apiRouter);
server.use(express.static('public'));

import serverRender from  './serverRender';

server.get('/', (req, res) => {
    res.render('index', { content: serverRender()});
});

server.listen(config.port, config.host, () => {
    console.info('Express <b>listening</b> on port ', config.port );
});
