const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 
const {body , validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const generatejwt = require('../../middleware/GenerateJWT');

app.use(express.json());

const SignIn = async(req , res )=>{
    const {name , password} = req.body ;
    
    const matchPass = await bcrypt.compare(password, process.env.TOKEN_SECRET);

    const found = await query(`select * from users where name = '${name}' and password = '${password}'`);
    
    if(!found) return res.status(401).json({message:"Have no account , please signup"});

    const token = generatejwt({name : name , password : password });

    return res.status(200).json({message:"Singin successfully" , token}) ;


}

module.exports = SignIn ; 