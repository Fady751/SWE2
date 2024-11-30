const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 
const bcrypt = require('bcrypt');

app.use(express.json());

const GetAllUsers = async(req , res )=>{

    const Users = await query(`select * from users `);

    if(!Users) return res.status(404).json({message: "There are no users yet!"});

    return res.status(200).json({Users});

}

module.exports  = GetAllUsers   
