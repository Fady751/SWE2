const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 

app.use(express.json());

const GetUser = async(req , res )=>{
    const UserId = req.user.id ; 

    const User = await query(`select * from users where id = ${UserId}`);

    if(!User) return res.status(404).json({message: "user not found !"});

    return res.status(200).json({ user : User[0]});

}

module.exports  = GetUser ;    