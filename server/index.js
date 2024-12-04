const express = require('express');
const path = require('path');
const {query, pool} = require('./config/data_base');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const cors = require('cors')
// const multer = require('multer')

const app = express();
const port = 3000;
const host = 'localhost';
const machine = new WebSocket.Server({ port: 8080 }); // add, remove, moved on map(edit)
const notification = new WebSocket.Server({ port: 8081 });

app.use(cors());
app.use(express.json());

app.use('/signin', require('./Routers/User/signIn'));
app.use('/signup', require('./Routers/User/signup'));
app.use('/user', require('./Routers/User/getUser'));
app.use('/addmachine', require('./Routers/Machine/addMachine'));
app.use('/deletemachine', require('./Routers/Machine/deletMachine'));
app.use('/editmachine', require('./Routers/Machine/editMachine'));
app.use('/getAllMachines', require('./Routers/Machine/getAllMachines'));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../view/public/images/profiles');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${file.originalname}`);
//     },
// });
  
// const upload = multer({ storage });

// app.post('/upload', upload.single('image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }
//     res.send({ message: 'File uploaded successfully', file: req.file });
// });

app.listen(port, host, async(err) => {
    if(err) {
        console.error('Server error:', err);
        process.exit(-1);
    }
    console.log(`App running at http://${host}:${port}`);
});