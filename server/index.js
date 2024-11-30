const express = require('express');
const path = require('path');
const {query, pool} = require('./config/data_base');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const cors = require('cors')

const app = express();
const port = 3000;
const host = 'localhost';
const machine = new WebSocket.Server({ port: 8080 }); // add, remove, moved on map(edit)
const notification = new WebSocket.Server({ port: 8081 });

app.use(cors());
app.use(express.json());

app.use('/signup', require('./Routers/User/signUp'));



app.listen(port, host, async(err) => {
    if(err) {
        console.error('Server error:', err);
        process.exit(-1);
    }
    console.log(`App running at http://${host}:${port}`);
});