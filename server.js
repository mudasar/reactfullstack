import config, { nodeEnv, logStars } from './config';
import express from 'express';
import apiRouter from './api';


const server = express();
// set the view engine to ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', { content: 'Hello Express and EJS!'});
});


server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
    console.info('Express listening on port ', config.port );
});
