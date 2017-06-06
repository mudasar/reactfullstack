import axios from 'axios';
import config from './config';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const serverRender = () => {
    axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
        console.log(resp.data.contests);
    return ReactDOMServer.renderToString(<App />);
    }).catch(console.error);
};

export default serverRender;

