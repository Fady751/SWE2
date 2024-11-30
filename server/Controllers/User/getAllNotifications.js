const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 

app.use(express.json());

const GetAllNotifications = async (req , res)=>{
    const User = req.user; 
    


}