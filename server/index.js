const express = require('express');
const path = require('path');
const {query, pool} = require('./config/data_base');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');

const app = express();
const port = 3000;
const host = 'localhost';
const wss = new WebSocket.Server({ port: 8080 });



app.listen(port, host, async(err) => {
    if(err) {
        console.error('Server error:', err);
        process.exit(-1);
    }
    console.log(`App running at http://${host}:${port}`);
});